import medicalTwinImage from '../assets/medical-twin.png';
import semiconductorImage from '../assets/semiconductor.png';
import mySafetyImage from '../assets/mysafety-screen.png';

export const visualWorks = [
  {
    title: '디지털 트윈 기반 병원 운영 플랫폼',
    label: 'R&D / RD-25-021-C',
    badge: '디지털 트윈 구축',
    image: medicalTwinImage,
    imagePrivacy: 'blur',
    summary:
      '병원 공간 데이터, GLB 기반 3D 모델, 운영 정보, 서비스 로봇 위치 API를 연계해 실제 병원 내 로봇 위치와 운영 상태를 모니터링할 수 있게 만든 디지털 트윈 플랫폼입니다.',
    highlights: ['서비스 로봇 API 연동', '원지도-GLB 좌표 정합', '층별·로봇 유형별 위치 보정'],
    details: [
      '병원 서비스 로봇 API 구조 분석 및 Access Token 기반 인증 흐름 연동',
      '로봇 위치 데이터 수집 및 화면 반영 구조 구현',
      '병원 원지도 좌표와 GLB 기반 3D 좌표계 매핑 로직 구현',
      'Homography 기반 2D 지도 좌표 → Three.js X/Z 좌표 변환 적용',
      '층별 GLB 모델 위치 오차와 마커 위치 보정값 관리',
      '로봇 종류별 위치 데이터 분기 처리 및 상태 시각화',
      'React + Three.js 기반 디지털 트윈 UI 개발',
    ],
    problem:
      '병원 원지도 좌표, 로봇 위치 좌표, GLB 모델 좌표계가 서로 달라 단순 스케일 변환만으로는 로봇 마커가 실제 위치와 맞지 않았습니다. 층마다 원점, 회전, 스케일 기준도 달라 하나의 변환식만 적용하기 어려웠습니다.',
    improvement:
      '기준점 A/B/C/D로 Homography 변환 행렬을 계산하고, mapX/mapY를 Three.js X/Z 좌표로 변환했습니다. 층별 변환 설정과 offset 값을 분리하고, 로봇 유형별로 필요한 경우 별도 변환 로직을 적용했습니다.',
    outcome:
      '실제 병원 공간 데이터 기반 3D 디지털 트윈 환경에 로봇 위치를 실시간 시각화하고, 원지도 좌표와 GLB 좌표계 간 위치 정합 구조를 구축했습니다.',
    tech: [
      'React',
      'JavaScript',
      'Three.js',
      'React Three Fiber',
      'REST API',
      'Access Token',
      'GLB',
      'Homography',
      'Affine Transform',
      'Coordinate Transform',
    ],
  },
  {
    title: '반도체 제조 디지털 트윈 플랫폼',
    label: 'Fab Digital Twin / Manufacturing',
    badge: '디지털 트윈 구축',
    image: semiconductorImage,
    imagePrivacy: 'blur',
    summary:
      '반도체 제조 현장의 공간 정보와 설비·센서 데이터를 디지털 트윈 환경에서 통합 시각화하기 위한 지도 기반 플랫폼 구축 프로젝트입니다.',
    highlights: [
      'Three.js 기반 3D 제조 공정 화면 구현',
      '실시간 센서 데이터 및 InfluxDB 연동',
      '설비 상태와 생산 지표 시각화',
    ],
    details: [
      'React 기반 디지털 트윈 지도 및 대시보드 UI 개발',
      '미니맵과 메인 화면 간 설비 선택, 카메라 이동 연계 기능 구현',
      '설비 및 센서 위치 기반 공간 시각화 기능 개발',
      '실시간 센서 데이터 API 및 InfluxDB 연동',
      'INPUT / PASS / FAIL 생산 데이터와 MTBF / MTTR / MTTF 지표 시각화',
      'API 응답 데이터 가공 및 Zustand 기반 상태 관리',
    ],
    problem:
      '실시간 센서 데이터와 다수 설비 상태가 함께 갱신되면서 화면 렌더링 지연과 응답 속도 저하가 발생했습니다.',
    improvement:
      'useMemo 기반 메모이제이션, 설비별 데이터 매핑, 예외 처리, 데이터 조회 로직 분리로 불필요한 재계산과 재렌더링을 줄였습니다.',
    outcome:
      '공간 정보와 제조 데이터를 한 화면에서 확인하는 3D 디지털 트윈 환경을 구성하고, 실시간 상태 모니터링 화면의 응답성을 개선했습니다.',
    tech: ['React', 'JavaScript', 'Three.js', 'Zustand', 'REST API', 'JSON', 'InfluxDB'],
  },
  {
    title: 'MySafety 작업자 안전 지원 모바일 플랫폼',
    label: '한화토탈에너지스 / Mobile Operations',
    badge: '모바일 운영 플랫폼',
    image: mySafetyImage,
    summary:
      '공장 작업자의 안전 관리와 비상 대응을 지원하기 위한 모바일 앱 구축 및 운영 프로젝트입니다. 공지사항, 작업자 위치, 대피소 정보, 백그라운드 위치 수집 기능을 다뤘습니다.',
    highlights: ['Cordova 기반 모바일 앱 개발', '백그라운드 위치 수집 처리', 'Google Play 배포 및 운영'],
    details: [
      'Apache Cordova 기반 하이브리드 모바일 앱 UI 및 기능 개발',
      '실시간 공지사항 및 안전 정보 조회 기능 구현',
      '지도 기반 대피소 위치 및 현장 정보 시각화',
      '작업자 실시간 위치 추적 및 위치 데이터 처리 기능 개발',
      'Background Geolocation 기반 백그라운드 위치 수집 및 권한 처리',
      'REST API 연동 및 Android 플랫폼 유지보수',
      'Google Play 배포와 운영 관리',
    ],
    problem:
      '운영 환경에서 사용자 증가로 공지사항과 안전 정보 조회 요청이 집중되며 화면 진입 응답과 렌더링이 늦어졌습니다. Android 버전과 제조사 정책 차이로 일부 단말에서 백그라운드 위치 수집이 정상 동작하지 않는 이슈도 있었습니다.',
    improvement:
      'API 호출을 비동기 처리 구조로 정리하고 불필요한 중복 요청을 줄였습니다. Android Background Location 정책과 제조사별 동작 차이를 확인해 권한 처리, Cordova 플러그인 버전, OS별 호환성을 조정했습니다.',
    outcome:
      '실제 산업 현장 운영 앱을 유지보수했고, Google Play 등록 및 운영을 경험했습니다. 앱은 다운로드 1만+와 사용자 평점 4.6을 유지했습니다.',
    tech: [
      'Apache Cordova',
      'JavaScript',
      'HTML / CSS',
      'REST API',
      'JSON',
      'Android',
      'Google Play Console',
      'Background Geolocation',
      'Firebase',
    ],
  },
];
