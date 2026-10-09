export const visualWorks = [
  {
    title: '디지털 트윈 기반 병원 운영 플랫폼',
    label: 'R&D / Digital Twin',
    badge: '3D 공간 화면',
    period: '2025.01.01 ~ 2025.12.31',
    summary:
      '병원 공간 데이터, GLB 3D 모델, 운영 정보, 서비스 로봇 위치 API를 연결해 로봇 위치와 상태를 화면에서 확인할 수 있게 만든 작업입니다.',
    highlights: ['서비스 로봇 API 연동', '원지도-GLB 좌표 정합', '층별·로봇 유형별 위치 보정'],
    details: [
      '병원 서비스 로봇 API 구조 분석 및 Access Token 인증 처리',
      '로봇 위치 데이터 수집 및 화면 반영 구조 구현',
      '병원 원지도 좌표와 GLB 기반 3D 좌표계 매핑 로직 구현',
      'Homography 기반 2D 지도 좌표 → Three.js X/Z 좌표 변환 적용',
      '층별 GLB 모델 위치 오차와 마커 위치 보정값 관리',
      '로봇 종류별 위치 데이터 분기 처리 및 상태 시각화',
      'React + Three.js 기반 3D 화면 개발',
    ],
    problem:
      '병원 원지도 좌표, 로봇 위치 좌표, GLB 모델 좌표계가 서로 달라 단순 스케일 변환만으로는 로봇 마커가 실제 위치와 맞지 않았습니다. 층마다 원점, 회전, 스케일 기준도 달라 하나의 변환식만 적용하기 어려웠습니다.',
    improvement:
      '단순 스케일 변환으로는 로봇이 벽 안에 박히는 문제가 계속 나와서, 기준점 4개(A/B/C/D)로 Homography 변환 행렬을 계산해 원지도 좌표를 Three.js X/Z 좌표로 옮기는 방식으로 바꿨습니다. 층마다 원점과 회전 기준이 달라 변환 설정과 offset을 층별로 분리했고, 위치 데이터 형식이 다른 로봇 유형은 변환 로직을 따로 태웠습니다.',
    outcome:
      '로봇 위치가 3D 병원 공간의 실제 위치에 맞게 표시되는 상태까지 구현했습니다.',
    tech: [
      'React',
      'JavaScript',
      'Three.js',
      'React Three Fiber',
      'REST API',
      'Access Token',
      'GLB',
      'Homography',
      'Coordinate Transform',
    ],
  },
  {
    title: '반도체 제조 디지털 트윈 플랫폼',
    label: 'Fab Digital Twin / Manufacturing',
    badge: '3D 제조 화면',
    period: '2025.01.01 ~ 2025.12.31',
    summary:
      'React 기반 3D 공장 화면에서 GLB 설비 모델과 InfluxDB 시계열 데이터를 연결해 설비 상태를 확인할 수 있도록 개발했습니다.',
    highlights: [
      'React Three Fiber 기반 3D 공장 화면 개발',
      'InfluxDB 설비 데이터 조회 및 화면 표시',
      '설비별 데이터 매핑과 상태값 시각화',
    ],
    details: [
      'React와 Vite 기반 디지털 트윈 화면 개발',
      'React Three Fiber로 GLB 3D 공장 모델 연동 및 시각화',
      'Postman으로 설비별 시계열 API 응답과 데이터 조회 흐름 확인',
      '설비별 데이터 매핑을 수정해 화면에 표시되지 않던 값 처리',
      '조회한 설비 데이터를 3D 모델과 연결하고 상태값에 따라 시각화',
      'Zustand 상태 관리와 TanStack Query를 이용한 데이터 조회 처리',
    ],
    problem:
      '일부 설비 데이터가 3D 화면에 제대로 들어오지 않았습니다. 시계열 데이터를 처음 다루던 때라 API 응답과 설비별 조회 규칙, 화면 매핑을 직접 따라가며 원인을 찾아야 했습니다.',
    improvement:
      'Postman으로 설비별 API를 반복 호출해 시계열 데이터를 확인했습니다. 데이터가 누락된 설비는 조회 조건과 식별값 매핑을 살펴 수정했고, API 응답과 3D 화면 값을 대조해 정상적으로 표시되는 것까지 확인했습니다. 설비 상태는 켜짐·꺼짐·오류로 구분했습니다. 데이터 조회는 TanStack Query, 화면 상태는 Zustand로 관리했습니다.',
    outcome:
      '설비별 데이터를 3D 모델과 연결하고, 누락된 값의 매핑을 수정해 화면에서 정상 표시되는 것까지 확인했습니다.',
    tech: ['React', 'Vite', 'React Three Fiber', 'GLB', 'Zustand', 'TanStack Query 5.71.10', 'InfluxDB'],
  },
];
