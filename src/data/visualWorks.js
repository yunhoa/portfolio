import medicalTwinImage from '../assets/medical-twin.png';
import semiconductorImage from '../assets/semiconductor.png';
import mySafetyImage from '../assets/mysafety-screen.png';

export const visualWorks = [
  {
    title: '디지털 트윈 기반 병원 운영 플랫폼',
    label: 'R&D / RD-25-021-C',
    image: medicalTwinImage,
    summary:
      '병원 공간 데이터와 로봇 위치 데이터를 연계해 3D 공간에서 로봇 위치를 실시간으로 확인할 수 있게 만든 디지털 트윈 운영 플랫폼 프로젝트입니다.',
    highlights: ['병원 로봇 API 연동', '원지도-GLB 좌표 정합', 'Three.js 로봇 위치 시각화'],
    details: [
      '병원 로봇 API 구조와 Access Token 기반 통신 구조 분석',
      '병원 원지도와 GLB 공간 좌표 정합 로직 구현',
      'Homography 기반 좌표 매핑 및 위치 보정',
      'Three.js 기반 3D 공간 내 로봇 위치 및 이동 상태 시각화',
      '병원 API 문서 분석 및 인터페이스 구조 정리',
    ],
    outcome:
      '실제 병원 공간 데이터와 3D 모델을 연결하고, 로봇 위치를 디지털 트윈 공간에 매핑하는 구조를 구축했습니다.',
    tech: ['JavaScript', 'Three.js', 'REST API', 'GLB / 3D Model', 'Homography'],
  },
  {
    title: '반도체 제조 디지털 트윈 플랫폼',
    label: 'Fab Digital Twin / Manufacturing',
    image: semiconductorImage,
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
