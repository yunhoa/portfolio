import paperPdf from '../assets/paper-smart-plant-ai-metadata.pdf';

export const projects = [
  {
    title: 'Safety Watch 스마트검색 RAG 기반 AI 플랫폼',
    category: '회사 프로젝트',
    group: 'ai',
    domain: 'AI Search / Backend',
    tags: ['Backend', 'AI Search', 'RAG', 'VectorDB'],
    summary:
      '건설·안전 문서를 검색하고 질문에 답하기 위한 RAG 기반 스마트검색 API 작업입니다.',
    highlights: [
      'RAG 검색 파이프라인 전 단계 구현',
      'PGVector 벡터 검색 구축',
      '질문 유형별 검색 라우팅 설계',
    ],
    role: [
      '도메인 문서 전처리 및 청킹 기준 수립',
      'HuggingFace Embeddings와 BAAI/bge-m3 기반 문서 임베딩 처리',
      'PostgreSQL / PGVector 기반 벡터 저장 구조 구축',
      'FastAPI 기반 스마트검색 API 엔드포인트 개발',
      'Ollama 로컬 LLM과 LangChain 기반 RAG 응답 생성 연결',
      'LangGraph 기반 질문 유형별 검색 라우팅 구조 설계',
    ],
    problem:
      '건설·안전 문서는 용어가 어렵고 문서 종류가 다양해 키워드 검색만으로는 필요한 내용을 찾기 어려웠습니다. 법령, BIM/IFC, 점검 데이터처럼 성격이 다른 데이터도 함께 다뤄야 했습니다.',
    solution:
      'RAG를 처음 접하는 상태에서 시작해 문서 청킹, 임베딩, 벡터 저장, 검색, LLM 응답 생성까지 한 단계씩 만들었습니다. 다루는 문서가 대부분 한국어라 임베딩 모델은 한국어를 지원하는 BAAI/bge-m3를 골랐고, 벡터 저장소는 이미 PostgreSQL을 쓰고 있는데 굳이 벡터 DB를 새로 들여 관리 대상을 늘릴 필요가 없다고 판단해 PGVector를 붙였습니다. 사내 문서를 외부 API로 보낼 수는 없는 환경이라 LLM은 Ollama로 로컬에서 돌렸습니다. 만들다 보니 법령 질문과 일반 질문, 정형 데이터 질문을 같은 방식으로 검색하면 답이 흐려질 것 같다는 생각이 들어서, 질문 유형별로 검색 경로를 나누는 라우팅을 LangGraph로 설계했습니다.',
    outcomes: [
      '법령·BIM·점검 문서를 대상으로 실제 질문에 답하는 RAG 검색 API 완성',
      '외부 API 없이 사내망 안에서만 동작하는 검색 구조 구현',
      '하나의 검색으로 뭉개지던 질문들을 유형별 검색 경로로 분리',
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
    group: 'ai',
    domain: 'AI / Computer Vision / Smart Plant',
    tags: ['Backend', 'AI', 'Computer Vision', 'FastAPI', 'Smart Plant'],
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
      '설비 종류가 현장마다 달라서 학습 데이터를 미리 만들어 두는 방식은 어렵겠다고 판단했고, 클릭한 지점 기준으로 바로 분할되는 SAM을 골랐습니다. 현장 사진은 설비와 배관이 붙어 있어 한 번에 깔끔하게 선택되지 않는 경우가 분명 나올 것 같아서, Add / Subtract와 Undo / Redo로 고칠 수 있게 만들었습니다. 객체를 지운 자리는 LaMa 인페인팅으로 메꾸고, 설비 태그 ID는 PaddleOCR로 읽어 메타정보와 연결했습니다. 모바일 앱이 같은 이미지를 수정하면서 여러 번 주고받는 구조라 요청이 겹치면 상태가 꼬일 수 있겠다 싶어서, 처리 결과를 이미지 UUID 기준으로 캐시하고 히스토리를 서버에서 관리했습니다.',
    outcomes: [
      '촬영한 설비 사진 한 장에서 객체 분리, 배경 제거, 태그 인식, 메타정보 생성까지 이어지는 처리 흐름 완성',
      '전문가 수작업에 의존하던 3D 가상환경 사전 작업을 모바일 촬영 기반으로 대체하는 구조 구현',
      '구현 내용을 정리해 1저자 논문으로 발표',
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
    title: '3D 산단 디지털 플랫폼 유지관리',
    category: '회사 프로젝트',
    group: 'backend',
    domain: 'Backend / Platform Maintenance',
    tags: ['Backend', 'SM / 운영', 'Platform Maintenance'],
    summary:
      '3D 산업단지 디지털 플랫폼을 운영하면서 관리자 기능 수정, 외부 API 연동, 통계 기능, 데이터 이슈 대응을 맡았습니다.',
    highlights: [
      'Spring Boot 관리자 기능 수정',
      '폐쇄망 Google Analytics 연동 구조 설계',
      'Apache Proxy 기반 API 중계 구조 설계',
    ],
    role: [
      'Spring Boot 기반 관리자 시스템 유지보수',
      '관리자 페이지 신규 기능 및 화면 개선',
      'Google Analytics Data API 연동 구조 설계',
      'Apache Proxy 기반 내부망 API 중계 구조 설계',
      'PostgreSQL 데이터 조회 및 운영 데이터 관리',
      'SQL 작성 및 데이터 정리',
      '외부 API 연동 및 장애 원인 분석',
      '운영 환경 배포 지원',
    ],
    problem:
      '운영 환경이 폐쇄망이라 외부 API를 바로 붙일 수 없었습니다. 관리자 페이지, 통계, 데이터 관리가 한 시스템에 묶여 있어 뭘 고치든 영향 범위를 같이 봐야 하는 상황이었습니다.',
    solution:
      '처음에는 폐쇄망 방화벽에서 Google Analytics 쪽 IP만 열어주면 될 줄 알았는데, 구글이 클라우드 기반이라 응답 IP가 고정이 아니라 여러 대역으로 계속 바뀌었습니다. IP를 하나하나 열어주는 방식으로는 풀 수 없어서, DMZ에 Apache Proxy를 두고 GA 데이터는 DMZ에서 받아온 뒤 폐쇄망 안으로 전달하는 구조로 잡았습니다. 관리자 화면까지 손대면 검증해야 할 범위가 너무 커져서, UI는 그대로 두고 API 경로만 바꾸는 쪽으로 변경 폭을 줄였습니다. 운영 중 들어오는 기능 수정과 데이터 이슈는 Spring Boot 코드와 PostgreSQL 데이터를 직접 확인해 원인부터 찾고 처리했습니다.',
    outcomes: [
      '고정 IP가 없는 구글 클라우드 특성을 DMZ Proxy 중계로 우회해 폐쇄망 GA 연동 구조 설계',
      'UI 변경 없이 API 경로만 바꾸는 방식으로 수정 영향 범위 최소화',
      '운영 중 발생한 데이터·기능 이슈를 원인 분석부터 배포까지 처리',
    ],
    tech: ['Spring Boot', 'Java', 'PostgreSQL', 'Apache HTTP Server', 'Google Analytics Data API', 'JavaScript', 'Thymeleaf', 'REST API', 'SQL', 'Git'],
  },
  {
    title: '한화오션 안전혁신과제',
    category: '회사 프로젝트',
    group: 'backend',
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
      '단순히 요청을 반복해서 보내는 테스트로는 실제 시청 상황과 다른 결과가 나올 것 같아서, 100명·150명이 2분간 동시에 시청하는 시나리오를 JMeter Thread Group으로 구성했습니다. 요청 파라미터도 실제 시청 요청과 동일하게 맞춘 뒤, 조건별로 응답 시간과 오류 발생 여부를 비교했습니다.',
    outcomes: [
      '100명 / 150명 동시 시청 조건에서 응답 시간과 오류 발생 여부 측정',
      '측정 결과를 운영 판단에 쓸 수 있는 형태로 정리해 공유',
    ],
    tech: ['전자정부프레임워크', 'Java', 'JMeter', 'Thread Group', 'HTTP Request', 'Performance Test'],
  },
  {
    title: 'Slack 기반 업무 자동화 봇',
    category: '개인 프로젝트',
    group: 'personal',
    domain: 'Work Automation',
    tags: ['Automation', 'Slack Bot', 'Node.js'],
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
      '별도 툴을 새로 만들면 결국 아무도 안 열어볼 것 같아서, 다들 이미 하루 종일 켜두는 Slack 안으로 정보를 가져오는 쪽을 택했습니다. Slack Bolt로 봇을 만들고 node-cron으로 회의 시작 전에 알림을 보냈습니다. 서버가 재시작되면 같은 회의에 알림이 또 나갈 수 있겠다 싶어서, 전송 이력을 JSON 상태값으로 남겨 중복을 막았습니다.',
    outcomes: [
      '회의 전에 장소와 참석자를 다시 물어보는 일이 없어짐',
      '휴가자 확인 때문에 오가던 메시지가 줄어듦',
    ],
    tech: ['Node.js', 'JavaScript', 'Slack Bolt', 'Slack API', 'node-cron', 'REST API', 'JSON'],
  },
  {
    title: 'B2B 상주 인원 일정 관리 타임라인',
    category: '개인 프로젝트',
    group: 'personal',
    domain: 'Work Tool / Schedule Management',
    tags: ['React', 'Timeline UI', 'Work Automation'],
    summary:
      '거제도 상주 인원의 이동, 체류, 휴가, 서울 근무 일정을 한 화면에서 확인하기 위해 만든 일정 관리 화면입니다.',
    highlights: ['주간 체류 일정 타임라인', '인원별 이동/체류 상태 표시', '날짜 범위 조회와 상태 필터'],
    background:
      '거제도 상주 업무 중 이번 주에 누가 내려가고 올라오는지, 누가 현장에 체류 중인지, 누가 서울 근무인지 확인하는 일이 반복됐습니다. 구두 확인이나 메신저 확인만으로는 전체 일정을 한눈에 보기 어려웠습니다.',
    role: [
      '인원별 이동, 체류, 휴가, 서울 근무 상태를 구분하는 화면 구성',
      '조회 기간 기준의 주간 타임라인 UI 구현',
      '일자별 현장 이동, 현장 체류, 서울 근무 인원 요약 영역 구성',
      '상태별 색상과 라벨을 사용한 일정 표시',
      '현장 상주 인원 확인을 위한 필터 및 카드형 요약 구성',
    ],
    problem:
      '상주 인원이 여러 명이고 이동 일정이 겹치다 보니, 이번 주 현장 체류 인원과 이동 예정자를 빠르게 확인하기 어려웠습니다. 일정이 바뀔 때마다 전체 인원 상태를 다시 확인해야 했습니다.',
    solution:
      '표나 목록으로 정리해봤는데 날짜가 겹치는 일정은 한눈에 들어오지 않아서, 인원별 일정을 주간 타임라인 형태로 바꿨습니다. 현장 이동, 체류, 서울 근무, 휴가는 색상과 라벨로 구분했고, 매번 타임라인을 훑기 전에 상황부터 파악할 수 있게 상단에 이동 건수·체류 인원·서울 복귀 같은 요약을 먼저 배치했습니다.',
    outcomes: [
      '누가 언제 내려가고 올라오는지 화면 하나로 확인하게 됨',
      '일정이 바뀔 때마다 전체 인원 상태를 다시 묻던 흐름이 사라짐',
    ],
    tech: ['React', 'JavaScript', 'Timeline UI', 'State Management', 'Responsive UI'],
  },
  {
    title: 'Proxmox 기반 홈서버 및 네트워크 인프라 구축',
    category: '개인 홈랩',
    group: 'personal',
    domain: 'Infra / Network',
    tags: ['Infra', 'Network', 'Home Lab'],
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
      '클라우드를 쓰면 네트워크, 방화벽, 포트포워딩이 전부 추상화되어 있어서, 요청이 서버에 닿기까지 실제로 무슨 일이 일어나는지 알기 어려웠습니다. 이 구간을 직접 만져보고 싶었습니다.',
    solution:
      '직접 부딪혀보는 게 제일 빠르겠다 싶어서 집에 서버를 두고 Proxmox VE로 VM을 나눈 뒤, pfSense를 라우터 겸 방화벽으로 세웠습니다. 가정 인터넷이라 고정 IP가 없어서 DuckDNS로 도메인을 연결했고, NAT와 포트포워딩 규칙을 직접 잡았습니다. 외부에서 접속이 안 될 때마다 방화벽 규칙 → NAT → 포트 순서로 원인을 좁혀가며 해결했습니다.',
    outcomes: [
      '외부 도메인으로 홈서버 서비스에 접속되는 상태까지 전 구간 직접 구성',
      '접속이 안 될 때 방화벽 → NAT → 포트 순서로 원인을 좁히는 방법을 몸으로 익힘',
      '배포된 서비스에 요청이 도착하기까지의 경로를 직접 구성해보며 이해',
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
    group: 'personal',
    domain: 'Web Service / Public API',
    tags: ['Spring Boot', 'React', 'Public API'],
    period: '2024.04 ~ 2024.10',
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
      '백엔드는 Spring Boot, 장소 데이터 조회는 JPA로 구성했습니다. 코스 하나를 추천하려면 외부 API를 여러 번 호출해야 하는데, 블로킹 방식으로 하면 외부 응답을 기다리는 동안 스레드가 묶여서 사용자가 몰렸을 때 응답이 밀릴 수도 있겠다고 생각했습니다. 그래서 외부 API 호출은 Spring WebFlux 비동기 논블로킹으로 처리했습니다. 제공받은 관광 데이터는 그대로 쓸 수 없는 구조라 변환 로직을 만들어 장소명과 좌표만 뽑아 TMAP API 요청 형식에 맞췄고, React에서 추천 결과와 이동 경로를 지도에 표시했습니다.',
    outcomes: [
      '취향과 위치 기반 추천부터 지도 경로 안내까지 동작하는 웹 서비스 완성',
      '2024 관광데이터 활용 공모전 출품',
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
