import paperPdf from '../assets/paper-smart-plant-ai-metadata.pdf';

export const projects = [
  {
    title: 'Safety Watch 스마트검색 RAG 기반 AI 플랫폼',
    category: '회사 프로젝트',
    group: 'ai',
    domain: 'AI Search / Backend',
    tags: ['Backend', 'AI Search', 'RAG', 'VectorDB'],
    summary:
      '건설·안전 관련 사내 문서를 검색하고 질문에 답하는 RAG 기반 스마트검색 API를 만드는 프로젝트입니다.',
    highlights: [
      'FastAPI 기반 검색 API 구현',
      'PostgreSQL / PGVector 벡터 검색 적용',
      '질문 유형별 검색 라우팅 PoC',
    ],
    role: [
      '도메인 문서 전처리 및 청킹 기준 구성',
      'HuggingFace Embeddings와 BAAI/bge-m3로 문서 임베딩 처리',
      'PostgreSQL PGVector 기반 벡터 저장 구조 구현',
      'FastAPI 기반 검색 API 엔드포인트 개발',
      'Ollama 로컬 LLM과 LangChain을 연결한 RAG 응답 처리',
      '질문 유형별 검색 경로 분리를 위한 LangGraph 기반 라우팅 구조 PoC',
    ],
    problem:
      '법령, BIM/IFC 도면 정보, 점검 데이터처럼 성격이 다른 문서를 함께 다뤄야 했고, 키워드 검색만으로는 원하는 내용을 찾기 어려웠습니다. 사내 문서를 다루는 만큼 외부 API로 내용을 보낼 수 없다는 제약도 있었습니다.',
    solution:
      'RAG를 처음 다뤄보는 상태에서 문서 청킹, 임베딩, 벡터 저장, 검색, LLM 응답까지 단계별로 붙여 나갔습니다. 문서 대부분이 한국어라 임베딩 모델은 BAAI/bge-m3를 썼고, 벡터 저장소는 이미 쓰고 있던 PostgreSQL에 PGVector를 얹어 새 DB를 늘리지 않았습니다. 사내망 밖으로 문서를 보낼 수 없어서 LLM은 Ollama로 로컬에서 돌렸습니다. 법령 질문과 일반 질문을 같은 방식으로 검색하면 결과가 섞일 수 있어, 질문 유형별로 검색 경로를 나누는 라우팅은 LangGraph로 PoC 수준까지 검토했습니다.',
    outcomes: [
      '법령·BIM·점검 문서를 대상으로 질문에 답하는 RAG 검색 API 구현',
      '외부 API 없이 사내망 안에서만 동작하는 검색 구조 적용',
      '질문 유형별 검색 경로 분리를 위한 라우팅 PoC 진행',
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
      '기존 방식은 도면 수집, 3D 스캐닝, 전문가 수작업에 의존해 초기 비용과 시간이 많이 들었습니다. 실제 현장 이미지는 설비, 구조물, 배관이 함께 찍혀 있어 관심 설비만 분리하기 어려웠고, 처리 결과를 수정하거나 되돌리는 기능도 필요했습니다.',
    solution:
      '현장마다 설비 종류가 달라서 학습 데이터를 미리 만들어 두는 방식은 맞지 않았고, 클릭한 지점 기준으로 바로 분할되는 SAM을 사용했습니다. 현장 사진은 설비와 배관이 붙어 있어 한 번에 깔끔하게 분리되지 않는 경우가 많아서 Add / Subtract와 Undo / Redo로 고칠 수 있게 만들었습니다. 지운 자리는 LaMa 인페인팅으로 채우고, 설비 태그 ID는 PaddleOCR로 읽어 메타정보와 연결했습니다. 모바일 앱에서 같은 이미지를 여러 번 주고받으며 수정하는 구조라 요청이 겹치면 상태가 꼬일 수 있어서, 처리 결과를 이미지 UUID 기준으로 캐시하고 히스토리를 서버에서 관리했습니다.',
    outcomes: [
      '촬영한 설비 사진에서 객체 분리, 배경 제거, 태그 인식, 메타정보 생성까지 이어지는 처리 흐름 구현',
      '모바일 촬영 이미지를 3D 모델링 사전 작업에 활용할 수 있는 형태로 만드는 처리 흐름 완성',
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
      '3D 산업단지 디지털 플랫폼을 운영하면서 관리자 기능, 추가 API, 통계 조회 화면, 외부 API 연동 이슈를 맡았습니다.',
    highlights: [
      'Spring Boot 관리자 API와 Thymeleaf 화면 개발',
      '폐쇄망에서 DMZ Apache Proxy로 GA Data API 연동 경로 적용',
      '운영환경 외부 API 호출 실패 원인 확인',
    ],
    role: [
      'Spring Boot 기반 관리자 시스템 유지보수',
      '현업 요구사항 기반 추가 API 개발',
      'Thymeleaf 기반 통계 조회 화면 개발',
      '폐쇄망에서 Google Analytics Data API를 호출할 수 있도록 DMZ Apache Proxy 연동 경로 적용',
      'PostgreSQL 데이터 조회 및 운영 데이터 관리',
      'SQL 작성 및 데이터 정리',
      '외부 API 연동 및 장애 원인 확인',
      '운영 환경 배포 지원',
    ],
    problem:
      '현업에서 플랫폼 이용 통계를 화면에서 보고 싶다는 요구가 있었습니다. 개발 환경에서는 Google Analytics Data API가 정상 호출됐지만, 운영 환경은 폐쇄망이라 외부 API를 바로 호출할 수 없었습니다.',
    solution:
      'Spring Boot에서 통계 조회 API를 만들고 Thymeleaf 화면에서 확인할 수 있게 구성했습니다. 운영 반영 과정에서 외부 API 호출이 실패해 애플리케이션 코드만 보지 않고 폐쇄망, 방화벽, DMZ 구간까지 나누어 확인했습니다. Google API 호출 대상을 고정 IP로 관리하기 어려워 DMZ에 Apache Proxy를 두고, 내부 Spring Boot 서버가 해당 Proxy를 통해 Google Analytics Data API를 호출하도록 구성했습니다.',
    outcomes: [
      'Google Analytics Data API 기반 통계 조회 API와 화면 개발',
      '폐쇄망 운영 환경에서 DMZ Proxy를 통한 GA 데이터 조회 경로 적용',
      '운영 중 발생한 데이터·기능 이슈를 원인 확인부터 배포까지 처리',
    ],
    tech: ['Spring Boot', 'Java', 'PostgreSQL', 'Apache HTTP Server', 'Google Analytics Data API', 'JavaScript', 'Thymeleaf', 'REST API', 'SQL', 'Git'],
  },
  {
    title: '한화오션 안전혁신과제',
    category: '회사 프로젝트',
    group: 'backend',
    domain: 'Backend / Mobile WebView',
    tags: ['Backend', 'Morpheus/MSP', 'Spring Legacy', 'Range', 'JMeter'],
    summary:
      '2026년 6월부터 한화오션 안전혁신과제에 투입되어 모바일 웹뷰와 Spring 레거시 백엔드를 함께 개발하고, 동영상 Range 처리와 JMeter 부하테스트를 구성했습니다.',
    highlights: [
      'Spring Legacy / MyBatis 기반 백엔드 기능 개발',
      'Morpheus/MSP 모바일 웹뷰와 백엔드 연계',
      'Range 기반 영상 응답과 JMeter 부하테스트',
    ],
    role: [
      'Spring Framework 기반 레거시 시스템의 백엔드 기능 개발과 MyBatis 연동',
      'MyBatis 연동 및 SQL 작성',
      'Morpheus/MSP 기반 하이브리드 웹뷰 기능 개발',
      '동영상 업로드/재생 기능 개발',
      'Spring Controller 기반 영상 Range 처리 구현',
      'JMeter 기반 동영상 스트리밍 부하테스트 환경 및 시나리오 구성',
      '동시 사용자 50명 / 100명 / 150명 조건에서 응답시간, 오류 여부, Throughput(TPS) 확인',
    ],
    problem:
      '동영상 업로드/재생 기능은 화면에서 재생되는 것만으로 끝내기 어려웠습니다. 실제 브라우저 재생 정책, 영상 응답에 필요한 HTTP 헤더, Range 요청에 따른 응답 범위, mp4 파일 크기와 서버 부하까지 함께 확인해야 했습니다.',
    solution:
      'Morpheus/MSP 기반 모바일 웹뷰 화면과 Spring Framework 기반 백엔드 기능을 함께 개발했습니다. Spring Controller에서 Range 요청에 따라 영상 데이터 응답 범위를 조절했고, 실제 영상 시청 흐름을 가정한 JMeter 테스트 환경과 시나리오를 직접 구성했습니다. 초기 버퍼링과 반복적인 Range 요청을 반영한 뒤 동시 사용자 50명·100명·150명 조건에서 응답시간, 오류 여부, Throughput(TPS)을 확인했습니다.',
    outcomes: [
      'Morpheus/MSP 기반 모바일 웹뷰와 Spring 백엔드 기능 개발',
      'Spring Controller 기반 영상 Range 처리 구현',
      '동시 사용자 50명 / 100명 / 150명 조건에서 응답시간, 오류 여부, Throughput(TPS) 확인',
    ],
    tech: ['Java', 'Spring Framework', 'MyBatis', 'SQL', 'Morpheus', 'MSP', 'JavaScript', 'JMeter'],
  },
  {
    title: 'MySafety 작업자 안전 지원 모바일 플랫폼',
    category: '회사 프로젝트',
    group: 'backend',
    domain: 'Mobile WebView / API Integration / Store Release',
    tags: ['Mobile', 'API Integration', 'Operations'],
    summary:
      '약 5,000~10,000명 규모로 사용되는 작업자 안전 지원 모바일 앱의 기능 개발과 Android/iOS 배포를 맡았습니다.',
    highlights: [
      'Apache Cordova 기반 모바일 웹뷰 기능 개발',
      'REST API 연동 및 작업자 안전 기능 구현',
      'Android / iOS 스토어 배포',
    ],
    role: [
      'Apache Cordova 기반 모바일 웹뷰 기능 개발',
      'REST API 연동 및 화면 기능 구현',
      'Android/iOS 기능 개발 및 배포',
      'Background Geolocation 기반 위치 수집 기능 연동',
      'Firebase 연동 및 모바일 운영 이슈 대응',
    ],
    problem:
      '산업 현장에서 사용하는 모바일 앱이라 Android와 iOS 환경 모두에서 기능이 동작해야 했고, 위치 수집과 API 연동이 실제 단말 환경에서 안정적으로 동작하는지 확인해야 했습니다.',
    solution:
      'Cordova 기반으로 모바일 웹뷰 기능을 개발하고, 필요한 데이터는 REST API로 연동했습니다. Android와 iOS 각각의 빌드와 배포 과정을 진행했고, Background Geolocation과 권한 관련 동작은 실제 단말 환경에서 확인하며 대응했습니다.',
    outcomes: [
      '작업자 안전 지원 모바일 앱 주요 기능 개발',
      '약 5,000~10,000명 규모 사용자 대상 앱 배포',
      'Android와 iOS 스토어 배포 진행',
    ],
    tech: ['Apache Cordova', 'JavaScript', 'REST API', 'Android', 'iOS', 'Background Geolocation', 'Firebase'],
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
      '회의실 예약, 참석자, 휴가자 정보를 확인하려면 여러 시스템이나 사람에게 다시 물어봐야 했습니다.',
    solution:
      '별도 툴을 새로 만들면 결국 아무도 안 열어볼 것 같아서, 다들 이미 하루 종일 켜두는 Slack 안으로 정보를 가져오는 쪽을 택했습니다. Slack Bolt로 봇을 만들고 node-cron으로 회의 시작 전에 알림을 보냈습니다. 서버가 재시작되면 같은 회의에 알림이 또 나갈 수 있어서, 전송 이력을 JSON 상태값으로 남겨 중복을 막았습니다.',
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
    tags: ['React', 'Timeline UI', 'Codex'],
    summary:
      '거제도 상주 인원의 이동, 체류, 휴가, 서울 근무 일정을 한 화면에서 확인하기 위해 만든 일정 관리 화면입니다.',
    highlights: ['주간 체류 일정 타임라인', '인원별 이동/체류 상태 표시', '날짜 범위 조회와 상태 필터'],
    background:
      '한화오션 프로젝트로 거제도 현장에 상주하면서 이번 주에 누가 내려가고 올라오는지, 누가 현장에 체류 중인지, 누가 서울 근무인지 확인하는 일이 반복됐습니다. 메신저로 물어보거나 표를 따로 확인하는 방식으로는 전체 일정을 한눈에 보기 어려워 직접 타임라인 형태로 만들어봤습니다.',
    features: [
      '인원별 이동, 체류, 휴가, 서울 근무 상태를 구분하는 화면 구성',
      '조회 기간 기준의 주간 타임라인 UI 구현',
      '일자별 현장 이동, 현장 체류, 서울 근무 인원 요약 영역 구성',
      '상태별 색상과 라벨을 사용한 일정 표시',
      '현장 상주 인원 확인을 위한 필터 및 카드형 요약 구성',
    ],
    outcomes: [
      '누가 언제 내려가고 올라오는지 화면 하나로 확인하게 됨',
      '일정이 바뀔 때마다 전체 인원 상태를 다시 묻던 흐름이 사라짐',
    ],
    tech: ['React', 'JavaScript', 'Timeline UI', 'State Management', 'Responsive UI', 'Codex'],
  },
  {
    title: 'Proxmox 기반 홈서버 및 네트워크 인프라 구축',
    category: '개인 홈랩',
    group: 'personal',
    domain: 'Infra / Network',
    tags: ['Infra', 'Network', 'Home Lab'],
    summary:
      'Proxmox 기반 홈서버에서 내부 LAN 서비스와 외부 접속 경로를 직접 구성해본 홈랩입니다.',
    highlights: ['Proxmox VM 구성', 'pfSense 방화벽/NAT 설정', 'Nginx Proxy Manager와 DuckDNS 연동'],
    implementations: [
      'Proxmox VE 기반 가상화 환경 구성',
      'pfSense VM을 라우터와 방화벽 역할로 설정',
      '내부 LAN 서비스와 외부 접속 경로 분리',
      'NAT 및 포트포워딩 규칙 설정',
      'Nginx Proxy Manager 기반 내부 서비스 Reverse Proxy 구성',
      'DuckDNS 기반 DDNS 도메인 연결',
      'DuckDNS 도메인에서 Nginx Proxy Manager를 거쳐 내부 LAN 서비스로 연결되는 흐름 구성',
      '외부 접속 테스트 및 네트워크 설정 확인',
    ],
    problem:
      '서버를 배포할 때 DNS, 방화벽, NAT, Proxy, 내부 서비스가 어떤 순서로 연결되는지 직접 확인해보고 싶었습니다. 클라우드에서는 설정값으로 지나가는 부분이 많아서, 요청이 외부 도메인에서 내부 LAN 서비스까지 들어오는 흐름을 직접 구성해봤습니다.',
    solution:
      'Proxmox VE 위에 VM을 구성하고 pfSense를 라우터와 방화벽 역할로 세웠습니다. 내부 LAN에 있는 서비스는 Nginx Proxy Manager로 묶고, 외부에서는 DuckDNS 도메인으로 접근하도록 구성했습니다. 요청은 DuckDNS 도메인 → 공유기/방화벽 → NAT/포트포워딩 → Nginx Proxy Manager → 내부 LAN 서비스 순서로 흐르도록 만들었습니다.',
    outcomes: [
      '외부 도메인에서 내부 LAN 서비스까지 접속되는 흐름을 직접 구성',
      '방화벽, NAT, 포트포워딩, Reverse Proxy, DDNS가 연결되는 구조 확인',
    ],
    tech: [
      'Proxmox VE',
      'pfSense',
      'Nginx Proxy Manager',
      'Ubuntu',
      'Linux',
      'SSH',
      'NAT',
      'Port Forwarding',
      'Firewall Rule',
      'Reverse Proxy',
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
      '백엔드는 Spring Boot, 장소 데이터 조회는 JPA로 구성했습니다. 코스 하나를 추천하려면 외부 API를 여러 번 호출해야 해서, 블로킹 방식으로 처리하면 응답을 기다리는 동안 스레드가 묶여 사용자가 몰렸을 때 불리할 것 같아 Spring WebFlux로 비동기 논블로킹 처리했습니다. 제공받은 관광 데이터는 그대로 쓸 수 없는 구조라 변환 로직을 만들어 장소명과 좌표만 뽑아 TMAP API 요청 형식에 맞췄고, React에서 추천 결과와 이동 경로를 지도에 표시했습니다.',
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
