const safetyWatchImage = new URL('../../안전워치스마트검색.png', import.meta.url).href;
const slackMeetingImage = new URL('../../슬랙회의실예약.png', import.meta.url).href;
const slackVacationImage = new URL('../../슬랙휴가자봇.png', import.meta.url).href;
const seoulDateCourseImage = new URL('../../대학교캡스톤_서울에서뭐하고놀지.png', import.meta.url).href;

export const projects = [
  {
    title: 'Safety Watch 스마트검색 RAG 기반 AI 플랫폼',
    category: '회사 프로젝트 / R&D',
    image: safetyWatchImage,
    description:
      '건설·안전 관련 문서를 검색하고 질문에 답하는 스마트검색 API를 만드는 프로젝트에 참여했습니다. 문서 전처리, 벡터 검색, FastAPI API 구성, 로컬 LLM 연동을 주로 다뤘습니다.',
    role: [
      '도메인 문서를 검색에 쓰기 좋게 나누고 청킹 기준을 정리',
      'HuggingFace Embeddings와 BAAI/bge-m3를 사용해 문서 임베딩 처리',
      'PostgreSQL과 PGVector로 벡터 검색 테이블 구성',
      'FastAPI로 스마트검색 API 엔드포인트 작성',
      'Ollama 로컬 LLM을 붙여 RAG 응답 흐름 확인',
      'LangChain과 LangGraph로 검색, 재작성, 응답 생성 흐름 실험',
      '질문 종류에 따라 법령, BIM, SQL, 벡터 검색으로 나누는 Agent 구조 검토',
    ],
    problem:
      '건설·안전 문서는 용어가 어렵고 문서 종류도 달라서 키워드 검색만으로는 원하는 내용을 찾기 어려웠습니다. 법령, BIM/IFC, 점검 데이터처럼 성격이 다른 데이터도 같은 방식으로 처리하기가 애매했습니다.',
    solution:
      '먼저 문서를 벡터 검색할 수 있게 전처리하고 PGVector에 저장했습니다. 사용자의 질문은 바로 검색하지 않고 Query Rewrite를 거쳐 검색 품질을 확인했습니다. 질문 유형에 따라 다른 검색 방식으로 보내는 구조도 LangGraph로 실험했습니다.',
    outcomes: [
      '문서 기반 RAG 검색 API 흐름을 FastAPI로 구성',
      'PGVector를 사용한 의미 기반 검색 구조 구현',
      '로컬 LLM과 검색 결과를 연결해 답변 생성 흐름 확인',
      'Agent 라우팅 구조가 어떤 경우에 필요한지 직접 실험',
    ],
    learnings: [
      'RAG는 모델보다 데이터 정리와 검색 품질이 먼저라는 점을 배웠습니다.',
      '질문을 잘 바꾸는 것만으로도 검색 결과가 달라져 Query Rewrite의 필요성을 느꼈습니다.',
      'Agent 구조는 멋있어 보이지만, 데이터와 역할이 분명할 때만 의미가 있다는 점을 확인했습니다.',
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
    title: 'Slack 기반 업무 자동화 봇',
    category: '개인 사이드 프로젝트 / 업무 자동화',
    image: slackMeetingImage,
    images: [slackMeetingImage, slackVacationImage],
    description:
      '회사에서 반복적으로 확인하던 회의 일정, 회의실 예약, 휴가자 정보를 Slack에서 바로 확인할 수 있게 만든 개인 프로젝트입니다.',
    background:
      '회의 시간이 다가오면 참석자와 장소를 다시 확인해야 했고, 옆자리 동료가 자리에 없을 때 휴가인지 다른 일정인지 물어보는 일이 많았습니다. 이런 작은 확인 작업을 줄이고 싶어서 만들었습니다.',
    features: [
      '회의 시작 전 Slack 채널에 자동 알림 전송',
      '회의명, 시간, 장소, 참석자 정보를 메시지로 정리',
      '참석자를 Slack 멘션으로 표시',
      '오늘 휴가자 목록 자동 안내',
      '회의실 예약 현황 조회',
      '이미 보낸 회의 알림이 다시 전송되지 않도록 중복 체크',
    ],
    outcomes: [
      '회의 전에 장소와 참석자를 다시 찾는 시간이 줄었습니다.',
      '휴가자를 확인하기 위한 불필요한 질문이 줄었습니다.',
      'Slack Bolt와 Slack API를 실제 업무 흐름에 붙여보는 경험을 했습니다.',
    ],
    learnings: [
      '자동화는 큰 기능보다 자주 반복되는 작은 불편함을 줄일 때 체감이 크다는 점을 배웠습니다.',
      '알림 기능은 중복 전송과 예외 상황 처리가 생각보다 중요했습니다.',
    ],
    tech: ['Node.js', 'JavaScript', 'Slack Bolt', 'Slack API', 'node-cron', 'REST API', 'JSON'],
  },
  {
    title: 'Proxmox 기반 홈서버 및 네트워크 인프라 구축',
    category: '개인 홈랩 / 인프라',
    description:
      '백엔드 서비스를 올리는 환경을 직접 이해하고 싶어서 Proxmox VE 기반 홈서버를 구성했습니다. pfSense를 라우터와 방화벽으로 사용하면서 NAT, 포트포워딩, DDNS 연결을 테스트했습니다.',
    implementations: [
      'Proxmox VE 설치 후 VM 기반 실습 환경 구성',
      'pfSense VM을 라우터와 방화벽 역할로 설정',
      '내부망과 외부 접속 흐름 확인',
      'NAT와 포트포워딩 규칙 설정',
      'DuckDNS로 DDNS 도메인 연결',
      '외부 접속이 안 될 때 방화벽, 포트, 라우팅 설정을 순서대로 확인',
    ],
    outcomes: [
      '서버 가상화와 네트워크 기본 구조를 직접 다뤄봤습니다.',
      '백엔드 서비스를 배포할 때 네트워크 설정이 왜 중요한지 이해했습니다.',
      '문제가 생겼을 때 로그와 설정을 하나씩 확인하는 습관을 얻었습니다.',
    ],
    learnings: [
      '서비스 코드를 작성하는 것과 실제로 외부에서 접속되게 만드는 것은 다른 문제였습니다.',
      '방화벽, NAT, 포트포워딩을 직접 만져보면서 운영 환경을 조금 더 현실적으로 보게 됐습니다.',
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
    category: '대학교 캡스톤 프로젝트 / 관광 데이터',
    image: seoulDateCourseImage,
    period: '2024.04 ~ 2024.10',
    contribution: '60%',
    organization: '2024 관광데이터 활용 공모전',
    description:
      'Spring Boot와 React로 만든 캡스톤 프로젝트입니다. 사용자 취향과 현재 위치를 기준으로 서울 데이트 장소를 추천하고, 지도에서 이동 경로를 확인할 수 있게 만들었습니다.',
    background:
      '관광 데이터를 그냥 목록으로 보여주는 것보다, 사용자가 실제로 이동할 수 있는 코스로 보여주면 더 쓸모가 있을 것 같았습니다. 그래서 장소 추천과 경로 안내를 함께 제공하는 웹 서비스를 기획했습니다.',
    role: [
      '관광공사 데이터를 보고 서비스에 사용할 장소 정보 정리',
      '사용자 취향 선택부터 추천 결과 확인까지의 화면 흐름 설계',
      'Spring Boot로 장소 추천과 데이터 조회 API 작성',
      'JPA를 사용해 장소, 사용자 선택값, 추천 결과에 필요한 데이터 처리',
      'Spring WebFlux로 외부 API를 호출하는 방식 실습',
      'React로 추천 결과와 지도 화면 구현',
      '공모전 제공 API와 TMAP API 연동',
      'JSON 데이터에서 장소명, 좌표 등 필요한 값 추출',
      '지도 위에 장소와 경로를 표시하는 기능 구현',
      '모바일에서도 볼 수 있도록 반응형 화면 작성',
      '팀원이 같이 쓸 수 있도록 공용 스타일 정리',
    ],
    problem:
      '제공받은 관광 데이터는 바로 지도 API에 넣기 어려운 구조였습니다. 장소명과 좌표를 뽑아야 했고, TMAP API와 대중교통 API가 요구하는 형식에 맞게 다시 가공해야 했습니다. 외부 API 호출과 내부 데이터 조회 흐름을 어떻게 나눌지도 고민했습니다.',
    solution:
      '백엔드는 Spring Boot로 구성하고, 장소 데이터 조회에는 JPA를 사용했습니다. 외부 API 호출은 Spring WebFlux를 사용해 연동해봤고, 프론트엔드는 React에서 추천 결과와 지도 화면을 보여주도록 만들었습니다. JSON 데이터는 필요한 값만 추출해 API 요청 형식에 맞게 변환했습니다.',
    outcomes: [
      '관광 데이터 기반 장소 추천 화면 구현',
      '지도에서 장소와 이동 경로를 함께 보여주는 UI 작성',
      'Spring Boot와 React를 나눠서 개발하는 구조 경험',
      'JPA로 필요한 데이터를 조회하고 API 응답으로 내려주는 흐름 구현',
      'Spring WebFlux를 사용해 외부 API 호출 방식 실습',
      '외부 API 요청 형식에 맞춰 데이터를 변환하는 경험 확보',
      '반응형 화면과 공용 스타일을 적용해 팀 작업 방식 정리',
    ],
    learnings: [
      '데이터 구조를 초반에 더 잘 정리했으면 반복 작업을 줄일 수 있었을 것 같습니다.',
      'API 연동 전 요청/응답 형식을 팀 안에서 먼저 맞춰두는 과정이 중요하다는 점을 배웠습니다.',
      '다음에는 데이터 전처리 과정을 따로 분리해서 더 관리하기 쉽게 만들고 싶습니다.',
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
