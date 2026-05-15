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
    title: 'MySafety 모바일 안전 서비스',
    label: 'Mobile / Safety Service',
    image: mySafetyImage,
    summary:
      '안전 관련 정보를 모바일에서 확인할 수 있도록 기능 흐름과 화면 구조를 정리한 서비스 작업입니다.',
    highlights: ['모바일 화면 구조 정리', '안전 정보 표시', '서비스 흐름 구성'],
    outcome: '안전 관련 기능을 모바일 사용 흐름에 맞춰 확인할 수 있도록 화면 구조를 정리했습니다.',
  },
];
