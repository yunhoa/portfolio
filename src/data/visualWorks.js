import medicalTwinImage from '../assets/medical-twin.png';
import semiconductorImage from '../assets/semiconductor.png';
import mySafetyImage from '../assets/mysafety-screen.png';

export const visualWorks = [
  {
    title: 'Medical Twin 디지털 트윈 플랫폼',
    label: '3D / Digital Twin',
    image: medicalTwinImage,
    summary:
      '의료 공간과 상태 정보를 3D 환경에서 확인할 수 있도록 구성한 디지털 트윈 화면 작업입니다.',
    highlights: ['3D 공간 시각화', '상태 정보 표시', '화면 내 데이터 흐름 정리'],
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
      'REST API 응답 데이터 가공 및 Zustand 기반 상태 관리',
      'INPUT / PASS / FAIL 생산 데이터와 MTBF / MTTR / MTTF 지표 시각화',
    ],
    problem:
      '실시간 센서 데이터와 다수 설비 상태가 함께 갱신되면서 화면 렌더링 지연과 응답 속도 저하가 발생했습니다.',
    improvement:
      'useMemo 기반 메모이제이션, 설비별 데이터 매핑, 예외 처리, 데이터 조회 로직 분리로 불필요한 재계산과 재렌더링을 줄였습니다.',
    tech: ['React', 'JavaScript', 'Three.js', 'Zustand', 'REST API', 'JSON', 'InfluxDB'],
  },
  {
    title: 'MySafety 모바일 안전 서비스',
    label: 'Mobile / Safety Service',
    image: mySafetyImage,
    summary:
      '안전 관련 정보를 모바일에서 확인할 수 있도록 기능 흐름과 화면 구조를 정리한 서비스 작업입니다.',
    highlights: ['모바일 화면 구조 정리', '안전 정보 표시', '서비스 흐름 구성'],
  },
];
