import safetyWatchImage from '../assets/safety-watch.png';
import plantMainImage from '../assets/plant-main.svg';
import plantLoginImage from '../assets/plant-login.svg';
import paperPdf from '../assets/paper-smart-plant-ai-metadata.pdf';
import seatPlanImage from '../assets/seat-plan.png';
import yoloDetectImage from '../assets/yolo-detect.png';
import yoloDetect2Image from '../assets/yolo-detect-2.png';
import smIndustryImage from '../assets/sm-industrial.png';
import slackMeetingImage from '../assets/slack-meeting.png';
import slackVacationImage from '../assets/slack-vacation.png';
import seoulDateCourseImage from '../assets/seoul-date-course.png';
import proxmoxServerImage from '../assets/proxmox-server.png';

export const projects = [
  {
    title: 'Safety Watch 스마트검색 RAG 기반 AI 플랫폼',
    category: '회사 프로젝트',
    domain: 'AI Search / Backend',
    tags: ['Backend', 'AI Search', 'RAG', 'VectorDB'],
    image: safetyWatchImage,
    imagePrivacy: 'blur',
    summary:
      '건설·안전 문서를 검색하고 질문에 답하기 위한 RAG 기반 스마트검색 API 작업입니다.',
    highlights: [
      'RAG 검색 API 구성',
      'PGVector 벡터 검색 연결',
      'LangGraph 기반 질의 라우팅 검토',
    ],
    role: [
      '도메인 문서 전처리 및 청킹 기준 정리',
      'HuggingFace Embeddings와 BAAI/bge-m3 기반 문서 임베딩 처리',
      'PostgreSQL / PGVector 기반 벡터 저장 구조 구성',
      'FastAPI 기반 스마트검색 API 엔드포인트 작성',
      'Ollama 로컬 LLM과 LangChain 기반 RAG 응답 처리 연결',
      'LangGraph로 질문 유형별 검색 라우팅 구조 검토',
    ],
    problem:
      '건설·안전 문서는 용어가 어렵고 문서 종류가 다양해 키워드 검색만으로는 필요한 내용을 찾기 어려웠습니다. 법령, BIM/IFC, 점검 데이터처럼 성격이 다른 데이터도 함께 다뤄야 했습니다.',
    solution:
      '문서를 청킹하고 임베딩한 뒤 PGVector에 저장했습니다. FastAPI에서 검색 API를 구성하고, 검색 결과를 Ollama와 LangChain RAG 처리에 넘겼습니다. 질문 유형에 따라 벡터 검색, 법령 검색, SQL 검색 등으로 나누는 구조는 LangGraph로 검토했습니다.',
    outcomes: [
      '도메인 문서 기반 RAG 검색 API 구성',
      '임베딩 생성, PGVector 저장, 검색, 응답 생성 단계 연결',
      'Query Rewrite와 Agent 라우팅이 필요한 지점을 확인',
      '성격이 다른 검색 대상을 나눠 처리하는 구조 정리',
    ],
    tech: [
      'FastAPI',
      'Python',
      'LangChain',
      'LangGraph',
      'Ollama',
      'HuggingFace Embeddings',
      'BAAI/bge-m3',
      'PostgreSQL',
      'PGVector',
      'SQLAlchemy',
      'REST API',
    ],
  },
  {
    title: '스마트플랜트 설비 이미지 전처리 및 메타정보 생성 프레임워크',
    category: '회사 프로젝트',
    domain: 'AI / Computer Vision / Smart Plant',
    tags: ['Backend', 'AI', 'Computer Vision', 'FastAPI', 'Smart Plant'],
    image: plantMainImage,
    images: [plantMainImage, plantLoginImage],
    imageFit: 'contain',
    imagePrivacy: 'blur',
    organization: 'R&D / RD-25-020-C',
    summary:
      '스마트플랜트 제조현장의 3D 가상환경 작업을 위해, 설비 이미지에서 객체 이미지와 메타정보를 만드는 모바일-서버 처리 기능을 구현했습니다.',
    highlights: [
      'FastAPI AI 추론 서버 API 구성',
      'SAM 기반 인터랙티브 객체 분할 구현',
      '관련 논문 1저자 작성',
    ],
    links: [{ label: '논문 PDF 보기', href: paperPdf }],
    background:
      '플랜트 산업 가상 자율제조를 위한 LoD4 수준 온디바이스 AI 기반 제조현장 3차원 모델 자동제작 기술개발 및 실증 과제에서 진행했습니다.',
    role: [
      'FastAPI 기반 AI 추론 서버 API 개발 및 React Native 앱 연동',
      '이미지 업로드, UUID 기반 결과 캐시, 처리 히스토리 관리 구조 구현',
      'SAM 기반 클릭 포인트 객체 분할과 Add / Subtract 선택 기능 구현',
      'Undo / Redo / Reset 기반 세그멘테이션 상태 관리 구현',
      'Rembg 기반 배경제거와 LaMa 기반 인페인팅 기능 연동',
      'OpenCV 기반 설비 이미지 기울기 자동 보정 구현',
      'PaddleOCR 기반 설비 태그 ID 인식 및 메타정보 연계 구조 구현',
      '프로젝트 내용을 바탕으로 스마트플랜트 AI 메타정보 자동생성 프레임워크 논문 1저자 작성',
    ],
    problem:
      '기존 플랜트 가상환경 작업은 도면 수집, 3D 스캐닝, 전문가 수작업에 의존해 초기 비용과 시간이 컸습니다. 실제 현장 이미지는 설비, 구조물, 배관이 함께 있어 관심 설비만 분리하기 어렵고, 처리 결과를 수정하거나 되돌리는 기능도 필요했습니다.',
    solution:
      '모바일에서 촬영한 설비 이미지를 서버로 보내면 SAM 객체 분할, 배경제거, 인페인팅, 기울기 보정, OCR 태그 인식이 순차 처리되도록 구성했습니다. 사용자가 클릭 좌표로 객체를 선택하고 Add / Subtract, Undo / Redo / Reset으로 결과를 조정할 수 있게 상태와 히스토리를 이미지 UUID 기준으로 관리했습니다.',
    outcomes: [
      '이미지 입력, 객체 분할, 배경제거, 인페인팅, 기울기 보정, OCR, 메타정보 생성 단계 구성',
      '클릭 기반 인터랙티브 설비 객체 선택 및 편집 구조 구현',
      '단계별 처리 결과를 수정하고 복원할 수 있는 캐시/히스토리 구조 구성',
      '스마트플랜트 3D 모델 생성에 필요한 이미지 전처리 구조 정리',
      'R&D 구현 내용을 논문 형태로 정리',
    ],
    tech: [
      'FastAPI',
      'Python',
      'REST API',
      'SAM',
      'LaMa',
      'Rembg',
      'PaddleOCR',
      'OpenCV',
      'React Native',
      'Image Cache Management',
      'Segmentation State Management',
      'Result History Management',
    ],
  },
  {
    title: '좌석배치도 공간 객체화 PoC',
    category: '회사 프로젝트',
    domain: 'Computer Vision / Spatial AI',
    tags: ['Backend', 'Computer Vision', 'YOLO', 'OpenCV', 'Spatial AI'],
    image: seatPlanImage,
    images: [seatPlanImage, yoloDetectImage, yoloDetect2Image],
    imagePrivacy: 'blur',
    summary:
      'PDF와 이미지 형태의 좌석배치도에서 좌석과 공간 정보를 찾아 JSON으로 정리한 PoC입니다.',
    highlights: [
      'YOLO 기반 좌석 / 영역 탐지',
      'Polygon 및 중심 좌표(POI) 생성',
      '거리 기반 Pair 로직 구현',
    ],
    role: [
      'PDF → 이미지 변환 및 도면 여백 제거',
      'YOLO 기반 좌석 / 영역 탐지 로직 적용',
      '좌석 중복 제거 및 POI 생성 로직 구현',
      '거리 기반 좌석 Pair 매칭 알고리즘 구현',
      '사다리꼴(Trapezoid) 생성 로직 구현',
      'OpenCV 기반 시각화 및 후처리 구현',
    ],
    problem:
      '좌석배치도는 PDF, 이미지 등 다양한 형태로 관리되어 좌석 정보를 서비스에서 바로 활용하기 어려웠습니다. 단순 객체 검출만으로는 좌석 간 배치 관계나 방향성을 표현하기에도 한계가 있었습니다.',
    solution:
      'YOLO로 좌석과 영역을 탐지하고, OpenCV 후처리로 좌석 Polygon과 중심 좌표를 생성했습니다. 이후 거리 기반 Pairing 로직으로 마주보는 좌석 구조를 분석하고, JSON 형태의 공간 객체 데이터로 변환했습니다.',
    outcomes: [
      '좌석배치도에서 공간 객체 데이터 생성',
      '좌석 위치, Polygon, 중심 좌표 JSON 구조화',
      '좌석 간 배치 관계 및 방향성 표현',
      'BIM / 실내 공간 서비스에서 쓸 수 있는 데이터 형태 검토',
    ],
    tech: ['FastAPI', 'Python', 'YOLO(Ultralytics)', 'OpenCV', 'NumPy', 'PyMuPDF', 'JSON', 'Computer Vision'],
  },
  {
    title: '3D 산단 디지털 플랫폼 유지관리',
    category: '회사 프로젝트',
    domain: 'Backend / Platform Maintenance',
    tags: ['Backend', 'SM / 운영', 'Platform Maintenance'],
    image: smIndustryImage,
    summary:
      '3D 산업단지 디지털 플랫폼을 운영하면서 관리자 기능 수정, 외부 API 검토, 통계 기능, 데이터 이슈 대응을 맡았습니다.',
    highlights: [
      'Spring Boot 관리자 기능 수정',
      'Google Analytics Data API 연동 검토',
      'Apache Proxy 기반 내부망 API 구조 검토',
    ],
    role: [
      'Spring Boot 기반 관리자 시스템 유지보수',
      '관리자 페이지 신규 기능 및 화면 개선',
      'Google Analytics Data API 연동 검토',
      'Apache Proxy 기반 내부망 API 연계 구조 검토',
      'PostgreSQL 데이터 조회 및 운영 데이터 관리',
      'SQL 작성 및 데이터 정리',
      '외부 API 연동 및 장애 원인 분석',
      '운영 환경 배포 지원',
    ],
    problem:
      '운영 환경이 내부망 기반이라 외부 API 접근에 제약이 있었습니다. 관리자 페이지, 통계 기능, 데이터 관리 기능이 함께 운영되어 기능 수정이나 장애 대응 시 영향 범위를 같이 봐야 했습니다.',
    solution:
      '내부망에서 외부 API 사용이 어려운 문제를 해결하기 위해 DMZ 환경의 Apache Proxy 구조를 검토했습니다. 관리자 시스템은 UI를 유지하고 API만 중계하는 방향으로 접근해 변경 범위를 줄였습니다. 운영 중 발생한 기능 수정과 데이터 이슈는 Spring Boot 관리자 시스템과 PostgreSQL을 통해 대응했습니다.',
    outcomes: [
      '내부망 환경에서 Google Analytics를 연동할 수 있는 구조 검토',
      'API와 UI를 나눠 수정 범위를 줄이는 방향 검토',
      '운영 중 발생한 데이터 및 기능 이슈 대응',
      '관리자 시스템의 기능 및 데이터 이슈 대응',
    ],
    tech: ['Spring Boot', 'Java', 'PostgreSQL', 'Apache HTTP Server', 'Google Analytics Data API', 'JavaScript', 'Thymeleaf', 'REST API', 'SQL', 'Git'],
  },
  {
    title: '한화오션 안전혁신과제',
    category: '회사 프로젝트',
    domain: 'Backend / Performance Test',
    tags: ['Backend', '전자정부프레임워크', 'JMeter', 'Performance Test'],
    summary:
      '전자정부프레임워크 기반 B2B 안전관리 서비스 개발에 참여하고, 동영상 시청 상황을 가정한 JMeter 부하테스트 환경을 구성했습니다.',
    highlights: ['전자정부프레임워크 기반 개발', '100명/150명 동시 시청 시나리오', '2분간 동영상 요청 테스트'],
    role: [
      '전자정부프레임워크 기반 서비스 개발',
      '동영상 시청 요청 구조 확인',
      'JMeter Thread Group, HTTP Request, 요청 파라미터 설정',
      '100명 / 150명 사용자가 2분 동안 동시에 동영상을 시청하는 조건의 테스트 시나리오 작성',
      '동시 요청 조건에서 부하테스트 수행',
      '응답 시간, 오류 여부, 요청 처리 상태 확인',
    ],
    problem:
      '동영상 시청 기능은 다수 사용자가 동시에 접근할 수 있어 실제 사용 조건을 가정한 요청 처리 상태와 오류 여부를 확인할 필요가 있었습니다.',
    solution:
      '전자정부프레임워크 기반으로 필요한 기능을 개발하고, JMeter에서 Thread Group과 HTTP Request 설정값을 구성했습니다. 100명, 150명 사용자가 2분 동안 동시에 동영상을 시청하는 조건으로 요청을 발생시켜 응답 시간, 오류 여부, 요청 처리 상태를 확인했습니다.',
    outcomes: [
      '전자정부프레임워크 기반 서비스 개발 참여',
      'JMeter 기반 동영상 시청 부하테스트 환경 구성',
      '100명 / 150명 동시 요청 조건에서 응답 시간과 오류 여부 확인',
      '운영 검토에 쓸 수 있도록 테스트 결과 정리',
    ],
    tech: ['전자정부프레임워크', 'Java', 'JMeter', 'Thread Group', 'HTTP Request', 'Performance Test'],
  },
  {
    title: 'Slack 기반 업무 자동화 봇',
    category: '개인 프로젝트',
    domain: 'Work Automation',
    tags: ['Automation', 'Slack Bot', 'Node.js'],
    image: slackMeetingImage,
    images: [slackMeetingImage, slackVacationImage],
    imagePrivacy: 'blur',
    summary:
      '업무 중 반복 확인하던 회의 일정, 회의실 예약, 휴가자 정보를 Slack에서 확인하도록 만든 자동화 프로젝트입니다.',
    highlights: ['회의 알림 자동화', '휴가자 조회 자동화', '중복 알림 방지 처리'],
    background:
      '회의 시간이 다가올 때 장소와 참석자를 다시 확인하고, 동료의 부재 사유를 별도 시스템이나 대화로 확인해야 하는 일이 반복됐습니다. 이 확인 작업을 Slack 메시지와 조회 기능으로 줄이는 방향으로 구성했습니다.',
    features: [
      '회의 시작 전 Slack 채널에 자동 알림 전송',
      '회의명, 시간, 장소, 참석자 정보 정리',
      '참석자 Slack 멘션 처리',
      '오늘 휴가자 목록 자동 안내',
      '회의실 예약 현황 조회',
      '이미 전송한 회의 알림 중복 방지',
    ],
    problem:
      '회의실 예약, 회의 참석자, 휴가자 정보를 확인하기 위해 여러 시스템이나 사람에게 다시 묻는 흐름이 있었습니다. 작지만 자주 반복되는 확인 작업이 업무 흐름을 끊었습니다.',
    solution:
      'Slack Bolt와 Slack API를 사용해 회의 알림과 휴가자 안내를 Slack 안으로 가져왔습니다. node-cron으로 정해진 시간에 알림을 보내고, JSON 기반 상태값으로 중복 알림을 막았습니다.',
    outcomes: [
      '회의 시작 전 장소와 참석자 확인 시간 감소',
      '휴가자 확인을 위한 불필요한 커뮤니케이션 감소',
      'Slack에서 반복 확인 업무를 처리하는 자동화 기능 구성',
    ],
    tech: ['Node.js', 'JavaScript', 'Slack Bolt', 'Slack API', 'node-cron', 'REST API', 'JSON'],
  },
  {
    title: 'Proxmox 기반 홈서버 및 네트워크 인프라 구축',
    category: '개인 홈랩',
    domain: 'Infra / Network',
    tags: ['Infra', 'Network', 'Home Lab'],
    image: proxmoxServerImage,
    summary:
      '백엔드 서비스가 외부에서 접근되기까지의 과정을 확인하기 위해 Proxmox와 pfSense로 구성한 홈랩입니다.',
    highlights: ['Proxmox VM 구성', 'pfSense 방화벽/NAT 설정', 'DuckDNS 기반 외부 접속 구성'],
    implementations: [
      'Proxmox VE 기반 가상화 환경 구성',
      'pfSense VM을 라우터와 방화벽 역할로 설정',
      '내부망과 외부 접속 경로 분리',
      'NAT 및 포트포워딩 규칙 설정',
      'DuckDNS 기반 DDNS 도메인 연결',
      '외부 접속 테스트 및 네트워크 설정 확인',
    ],
    problem:
      '로컬에서 동작하는 백엔드 서비스를 외부에서 접근하려면 네트워크, 방화벽, 포트포워딩 설정이 필요합니다. 이 과정을 코드 밖의 영역까지 직접 확인할 필요가 있었습니다.',
    solution:
      'Proxmox VE에 VM 환경을 구성하고 pfSense를 라우터/방화벽으로 설정했습니다. NAT, 포트포워딩, DuckDNS를 연결해 외부 접속 경로를 만들고, 접속이 되지 않을 때 방화벽 규칙과 포트 설정을 순서대로 확인했습니다.',
    outcomes: [
      '가상화 환경에서 서버와 네트워크 역할 분리',
      '방화벽, NAT, 포트포워딩 설정 과정 확인',
      '백엔드 서비스 운영에 필요한 네트워크 접근 과정 정리',
    ],
    tech: [
      'Proxmox VE',
      'pfSense',
      'Ubuntu',
      'Linux',
      'SSH',
      'NAT',
      'Port Forwarding',
      'Firewall Rule',
      'DuckDNS',
    ],
  },
  {
    title: '서울 데이트코스 추천 웹 서비스',
    category: '캡스톤 프로젝트',
    domain: 'Web Service / Public API',
    tags: ['Spring Boot', 'React', 'Public API'],
    image: seoulDateCourseImage,
    period: '2024.04 ~ 2024.10',
    contribution: '60%',
    organization: '2024 관광데이터 활용 공모전',
    summary:
      '사용자 취향과 현재 위치를 기준으로 서울 데이트 장소를 추천하고 지도에서 이동 경로를 확인할 수 있게 만든 웹 서비스입니다.',
    highlights: ['Spring Boot API 구성', 'React 지도 화면 구현', '관광 데이터 변환 처리'],
    background:
      '관광 데이터를 목록으로만 보여주기보다 사용자가 실제로 이동할 수 있는 코스로 보여주는 방향으로 기획했습니다. 추천 결과와 경로 안내를 함께 제공하는 웹 서비스로 구성했습니다.',
    role: [
      'Spring Boot 기반 장소 추천 및 데이터 조회 API 작성',
      'JPA 기반 장소 데이터 조회 처리 구성',
      'Spring WebFlux를 사용한 외부 API 호출 연동',
      'React 기반 추천 결과 및 지도 화면 구현',
      '공모전 제공 API와 TMAP API 연동',
      'JSON 데이터에서 장소명, 좌표 등 필요한 값 추출',
      '반응형 화면 및 공용 스타일 정리',
    ],
    problem:
      '제공받은 관광 데이터는 바로 지도 API에 넣기 어려운 구조였습니다. 장소명과 좌표를 추출하고, TMAP API와 대중교통 API가 요구하는 요청 형식에 맞게 변환해야 했습니다.',
    solution:
      '백엔드는 Spring Boot로 구성하고 장소 데이터 조회에는 JPA를 사용했습니다. 외부 API 호출은 Spring WebFlux로 처리했고, React에서는 추천 결과와 지도 경로를 표시했습니다. JSON 데이터는 별도 변환 로직을 만들어 필요한 값만 API 요청 형식에 맞춰 사용했습니다.',
    outcomes: [
      '관광 데이터 기반 장소 추천 API와 화면 구성',
      '지도에서 장소와 이동 경로를 함께 보여주는 UI 구현',
      '외부 API 요청 형식에 맞춘 데이터 변환 처리',
      'Spring Boot와 React를 나눠 개발하는 구조 적용',
    ],
    tech: [
      'Java',
      'Spring Boot',
      'Spring WebFlux',
      'JPA',
      'React',
      'JavaScript',
      'REST API',
      'TMAP API',
      'Public Data API',
      'JSON',
      'Responsive Web',
      'UI/UX',
    ],
  },
];
