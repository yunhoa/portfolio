export const visualWorks = [
  {
    title: '디지털 트윈 기반 병원 운영 플랫폼',
    category: '연구과제',
    label: 'R&D / Digital Twin',
    badge: '3D 공간 화면',
    period: '2025.01.01 ~ 2025.12.31',
    summary:
      '실제 병원에서 운행되는 로봇의 위치 API를 연동해 병원 3D 공간에 표시했습니다.',
    background:
      '외래·병동 운영 최적화를 위해 병원 공간과 운영 데이터를 디지털 트윈으로 연결하는 메디컬트윈 연구과제입니다.',
    highlights: ['서비스 로봇 API 연동', '원지도-GLB 좌표 정합', '층별·로봇 유형별 위치 보정'],
    details: [
      'React·Three.js 병원 3D 화면과 로봇 위치 API 연동',
      'Access Token 인증 및 로봇 유형별 위치 데이터 처리',
      'Homography 좌표 변환과 층별 GLB 위치 보정 적용',
    ],
    problem:
      '병원 원지도 좌표, 로봇 위치 좌표, GLB 모델 좌표계가 서로 달라 단순 스케일 변환만으로는 로봇 마커가 실제 위치와 맞지 않았습니다. 층마다 원점, 회전, 스케일 기준도 달라 하나의 변환식만 적용하기 어려웠습니다.',
    improvement:
      '단순 스케일 변환으로는 로봇 마커가 병원 벽 안쪽에 표시되는 현상이 남아, 기준점 4개로 Homography 변환 행렬을 계산해 원지도 좌표를 Three.js X/Z 좌표로 변환했습니다. 층마다 원점과 회전 기준이 달라 변환 설정과 offset을 층별로 분리하고, 위치 데이터 형식이 다른 로봇은 별도 변환 로직으로 처리했습니다.',
    tech: [
      'React',
      'JavaScript',
      'Three.js',
      'React Three Fiber',
      'REST API',
      'GLB',
      'Homography',
    ],
  },
  {
    title: '반도체 제조 디지털 트윈 플랫폼',
    category: '연구과제',
    label: 'Fab Digital Twin / Manufacturing',
    badge: '3D 제조 화면',
    period: '2025.01.01 ~ 2025.12.31',
    summary:
      'React 기반 3D 공장 화면에서 GLB 설비 모델과 InfluxDB 시계열 데이터를 연결해 설비 상태를 확인할 수 있도록 개발했습니다.',
    background:
      '반도체 제조공정 상태를 실시간 모니터링하고 공정 최적화를 지원하는 디지털 트윈 연구과제입니다.',
    highlights: [
      'React Three Fiber 기반 3D 공장 화면 개발',
      'InfluxDB 설비 데이터 조회 및 화면 표시',
      '설비별 데이터 매핑과 상태값 시각화',
    ],
    details: [
      'React Three Fiber로 GLB 공장 모델과 설비 상태 화면 개발',
      'Postman으로 InfluxDB API 응답을 확인하며 설비별 조회·매핑 수정',
      'TanStack Query와 Zustand로 데이터 조회·화면 상태 관리',
    ],
    problem:
      '일부 설비 데이터가 3D 화면에 제대로 들어오지 않았습니다. 시계열 데이터를 처음 다루던 때라 API 응답과 설비별 조회 규칙, 화면 매핑을 직접 따라가며 원인을 찾아야 했습니다.',
    improvement:
      'Postman으로 설비별 API를 반복 호출해 시계열 데이터를 확인했습니다. 데이터가 누락된 설비는 조회 조건과 식별값 매핑을 살펴 수정했고, API 응답과 3D 화면 값을 대조해 정상적으로 표시되는 것까지 확인했습니다. 설비 상태는 켜짐·꺼짐·오류로 구분했습니다. 데이터 조회는 TanStack Query, 화면 상태는 Zustand로 관리했습니다.',
    tech: ['React', 'Vite', 'React Three Fiber', 'GLB', 'Zustand', 'TanStack Query 5.71.10', 'InfluxDB'],
  },
];
