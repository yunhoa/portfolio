import { useEffect, useRef } from 'react';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import LineString from 'ol/geom/LineString.js';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector.js';
import OSM from 'ol/source/OSM.js';
import VectorSource from 'ol/source/Vector.js';
import Overlay from 'ol/Overlay.js';
import { fromLonLat } from 'ol/proj.js';
import { defaults as defaultInteractions } from 'ol/interaction/defaults.js';
import walkingRoute from '../data/seoulWalkingRoute.json';
import { Circle, Fill, Stroke, Style, Text } from 'ol/style.js';
import 'ol/ol.css';

const stops = [
  {
    order: '1',
    type: '출발',
    name: '롯데월드 어드벤처',
    address: '서울 송파구 올림픽로 240',
    detail: '코스 출발 장소',
    coordinate: walkingRoute.stops[0],
    color: '#2878d0',
  },
  {
    order: '2',
    type: '경유',
    name: '석촌호수 동호',
    address: '서울 송파구 송파나루길 206',
    detail: '호수 산책로를 따라 이동',
    coordinate: walkingRoute.stops[1],
    color: '#dc8b24',
  },
  {
    order: '3',
    type: '도착',
    name: '올림픽공원 평화의문',
    address: '서울 송파구 올림픽로 424',
    detail: '코스 도착 장소',
    coordinate: walkingRoute.stops[2],
    color: '#23856f',
  },
];

const routeCoordinates = walkingRoute.coordinates;

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
        new TileLayer({ source: new OSM() }),
        new VectorLayer({ source: new VectorSource({ features: [route] }) }),
        new VectorLayer({ source: new VectorSource({ features: [routeColor, ...markerFeatures] }) }),
      ],
      overlays: [popup],
      interactions: defaultInteractions({ mouseWheelZoom: false }),
      view: new View({
        center: fromLonLat([127.109, 37.514]),
        zoom: 14.7,
        minZoom: 12,
        maxZoom: 18,
      }),
      controls: undefined,
    });

    const showStop = (event) => {
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
    };
    map.on('pointermove', showStop);
    map.on('singleclick', showStop);

    const bounds = route.getGeometry().getExtent();
    const fitRoute = () => {
      map.updateSize();
      const compact = mapElement.current.clientWidth < 500;
      map.getView().fit(bounds, { padding: compact ? [30, 18, 18, 18] : [58, 65, 45, 65], maxZoom: 15.5, duration: 0 });
    };
    fitRoute();
    const resizeObserver = new ResizeObserver(fitRoute);
    resizeObserver.observe(mapElement.current);

    return () => {
      resizeObserver.disconnect();
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div data-interactive-map className="flex aspect-[16/10] flex-col overflow-hidden border border-slate-200 bg-white">
      <div className="relative min-h-0 flex-1">
        <div ref={mapElement} className="absolute inset-0 bg-slate-100" aria-label="롯데월드에서 석촌호수를 거쳐 올림픽공원까지 이어지는 코스 지도" />
        <div className="pointer-events-none absolute left-11 top-2 flex gap-2 rounded border border-slate-200 bg-white/95 px-2 py-1 text-[10px] font-medium text-slate-700 sm:left-14 sm:top-5 sm:gap-4 sm:px-4 sm:py-2 sm:text-xs">
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
      <div className="grid shrink-0 grid-cols-3 border-t border-slate-200">
        {stops.map((stop, index) => (
          <div key={stop.order} className={`flex min-w-0 gap-2 px-2 py-2 sm:gap-3 sm:px-4 sm:py-3 ${index ? 'border-l border-slate-200' : ''}`}>
            <span className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white sm:flex" style={{ backgroundColor: stop.color }}>{stop.order}</span>
            <div className="min-w-0">
              <p className="text-[9px] font-semibold text-slate-500 sm:text-[11px]">{stop.type}</p>
              <p className="truncate text-[10px] font-semibold text-slate-900 sm:text-sm">{stop.name}</p>
              <p className="mt-0.5 hidden truncate text-xs text-slate-500 sm:block">{stop.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
