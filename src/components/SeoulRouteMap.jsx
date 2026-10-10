import { useEffect, useRef } from 'react';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import LineString from 'ol/geom/LineString.js';
import TileLayer from 'ol/layer/Tile.js';
import ImageLayer from 'ol/layer/Image.js';
import VectorLayer from 'ol/layer/Vector.js';
import OSM from 'ol/source/OSM.js';
import Static from 'ol/source/ImageStatic.js';
import VectorSource from 'ol/source/Vector.js';
import Overlay from 'ol/Overlay.js';
import { fromLonLat } from 'ol/proj.js';
import routeBasemap from '../assets/seoulhere-route-basemap.svg';
import { Circle, Fill, Stroke, Style, Text } from 'ol/style.js';
import 'ol/ol.css';

const stops = [
  {
    order: '1',
    type: '출발',
    name: '롯데월드 어드벤처',
    address: '서울 송파구 올림픽로 240',
    detail: '코스 출발 장소',
    coordinate: [127.0981, 37.5112],
    color: '#2878d0',
  },
  {
    order: '2',
    type: '경유',
    name: '석촌호수 동호',
    address: '서울 송파구 송파나루길 206',
    detail: '호수 산책로를 따라 이동',
    coordinate: [127.1063, 37.5089],
    color: '#dc8b24',
  },
  {
    order: '3',
    type: '도착',
    name: '올림픽공원 평화의문',
    address: '서울 송파구 올림픽로 424',
    detail: '코스 도착 장소',
    coordinate: [127.1206, 37.5205],
    color: '#23856f',
  },
];

const routeCoordinates = [
  [127.0981, 37.5112],
  [127.099, 37.5121],
  [127.1025, 37.5121],
  [127.1063, 37.5123],
  [127.1063, 37.5089],
  [127.107, 37.511],
  [127.108, 37.5123],
  [127.113, 37.5123],
  [127.114, 37.5183],
  [127.118, 37.5193],
  [127.1206, 37.5205],
];

function markerStyle(stop, active = false) {
  return new Style({
    image: new Circle({
      radius: active ? 16 : 14,
      fill: new Fill({ color: stop.color }),
      stroke: new Stroke({ color: '#ffffff', width: 3 }),
    }),
    text: new Text({
      text: stop.order,
      font: '700 13px Inter, sans-serif',
      fill: new Fill({ color: '#ffffff' }),
      textAlign: 'center',
      textBaseline: 'middle',
    }),
  });
}

export default function SeoulRouteMap() {
  const mapElement = useRef(null);
  const popupElement = useRef(null);
  const popupContent = useRef(null);

  useEffect(() => {
    if (!mapElement.current || !popupElement.current) return undefined;

    const route = new Feature({
      geometry: new LineString(routeCoordinates.map((coordinate) => fromLonLat(coordinate))),
      kind: 'route',
    });
    route.setStyle(
      new Style({
        stroke: new Stroke({ color: '#ffffff', width: 10, lineCap: 'round', lineJoin: 'round' }),
      }),
    );
    const routeColor = new Feature({
      geometry: route.getGeometry(),
      kind: 'route',
    });
    routeColor.setStyle(
      new Style({
        stroke: new Stroke({ color: '#2878d0', width: 5, lineCap: 'round', lineJoin: 'round' }),
      }),
    );

    const markerFeatures = stops.map((stop) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(stop.coordinate)),
        kind: 'stop',
        stop,
      });
      feature.setStyle(markerStyle(stop));
      return feature;
    });

    const popup = new Overlay({
      element: popupElement.current,
      positioning: 'bottom-center',
      offset: [0, -18],
      stopEvent: false,
    });
    const map = new Map({
      target: mapElement.current,
      layers: [
        new ImageLayer({
          source: new Static({
            url: routeBasemap,
            imageExtent: [
              ...fromLonLat([127.08, 37.497]),
              ...fromLonLat([127.14, 37.529]),
            ],
          }),
          zIndex: 0,
        }),
        new TileLayer({ source: new OSM() }),
        new VectorLayer({ source: new VectorSource({ features: [route] }) }),
        new VectorLayer({ source: new VectorSource({ features: [routeColor, ...markerFeatures] }) }),
      ],
      overlays: [popup],
      view: new View({
        center: fromLonLat([127.109, 37.514]),
        zoom: 14.7,
        minZoom: 12,
        maxZoom: 18,
      }),
      controls: undefined,
    });

    map.on('pointermove', (event) => {
      if (event.dragging) return;
      const feature = map.forEachFeatureAtPixel(event.pixel, (candidate) => candidate);
      const stop = feature?.get('stop');
      if (!stop) {
        popup.setPosition(undefined);
        popupElement.current.classList.remove('is-visible');
        map.getTargetElement().style.cursor = '';
        markerFeatures.forEach((marker) => marker.setStyle(markerStyle(marker.get('stop'))));
        return;
      }
      popupContent.current.innerHTML = `<span class="route-popup-type">${stop.type}</span><strong>${stop.name}</strong><span>${stop.address}</span><small>${stop.detail}</small>`;
      popup.setPosition(feature.getGeometry().getCoordinates());
      popupElement.current.classList.add('is-visible');
      map.getTargetElement().style.cursor = 'pointer';
      markerFeatures.forEach((marker) => marker.setStyle(markerStyle(marker.get('stop'), marker === feature)));
    });

    const bounds = route.getGeometry().getExtent();
    map.getView().fit(bounds, { padding: [72, 88, 72, 88], maxZoom: 15.5, duration: 0 });
    const resizeObserver = new ResizeObserver(() => map.updateSize());
    resizeObserver.observe(mapElement.current);

    return () => {
      resizeObserver.disconnect();
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div className="overflow-hidden border border-slate-200 bg-white">
      <div className="relative">
        <div ref={mapElement} className="h-[220px] w-full bg-slate-100 sm:h-[470px]" aria-label="롯데월드에서 석촌호수를 거쳐 올림픽공원까지 이어지는 코스 지도" />
        <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-2 rounded-md border border-slate-200 bg-white/95 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm sm:left-5 sm:top-5 sm:gap-4 sm:px-4">
          {stops.map((stop) => (
            <span key={stop.order} className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: stop.color }} />
              {stop.type}
            </span>
          ))}
        </div>
        <div ref={popupElement} className="route-map-popup" role="status" aria-live="polite">
          <div ref={popupContent} />
        </div>
      </div>
      <div className="grid gap-0 border-t border-slate-200 sm:grid-cols-3">
        {stops.map((stop, index) => (
          <div key={stop.order} className={`flex min-w-0 gap-3 px-4 py-3 ${index ? 'border-t border-slate-200 sm:border-l sm:border-t-0' : ''}`}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: stop.color }}>{stop.order}</span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-slate-500">{stop.type}</p>
              <p className="truncate text-sm font-semibold text-slate-900">{stop.name}</p>
              <p className="mt-0.5 truncate text-xs text-slate-500">{stop.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
