import paperPdf from '../assets/paper-smart-plant-ai-metadata.pdf';
import homeLabDiagram from '../assets/proxmox-homelab-topology.svg';
import botOverview from '../assets/slack-bots-overview.png';
import botLeave from '../assets/slack-bot-leave.png';
import botFortune from '../assets/slack-bot-fortune.png';
import botFortuneSettings from '../assets/slack-bot-fortune-settings.png';
import botMeetingSeat from '../assets/slack-bot-meeting-seat.png';
import botMeetingStart from '../assets/slack-bot-meeting-start.png';
import botB2B from '../assets/slack-bot-b2b.png';
import botRSS from '../assets/slack-bot-rss.png';
import b2bTimelinePreview from '../assets/b2b-schedule-timeline.png';
import b2bFlightSchedule from '../assets/b2b-flight-schedule.png';
import b2bOverviewSchedule from '../assets/b2b-overview-schedule.png';
import b2bOperationsDashboard from '../assets/b2b-operations-dashboard.png';
import mySafetyAppStore from '../assets/mysafety-app-store.png';
import mySafetyPlayStore from '../assets/mysafety-play-store.png';
import seoulHereDiagram from '../assets/seoulhere-service-architecture.svg';
import seoulHereUseCases from '../assets/seoulhere-use-cases-v2.svg';
import seoulHereSqlModel from '../assets/seoulhere-erd.svg';
import seoulHereCapture01 from '../assets/seoulhere-live-01.png';
import seoulHereCapture02 from '../assets/seoulhere-live-02.png';
import seoulHereCapture03 from '../assets/seoulhere-live-03.png';
import seoulHereBoard from '../assets/seoulhere-board.png';
import seoulHereMyPage from '../assets/seoulhere-mypage.png';
import seoulHereFavorites from '../assets/seoulhere-favorites.png';
import seoulHereMyCourses from '../assets/seoulhere-mycourses.png';

export const projects = [
  {
    title: 'Safety Watch 건축물 스마트검색 플랫폼',
    category: '연구과제',
    group: 'ai',
    domain: 'AI Search / Backend',
    period: '2026.01 ~ 2026.07',
    tags: ['Backend', 'AI Search', 'RAG', 'VectorDB'],
    sectionLabels: {
      problem: '질문에 따라 다른 데이터 조회',
      solution: '질문 분류와 검색 흐름',
    },
    summary:
      '건축물 안전정보 질문을 문서, 정형 데이터, BIM 질의로 나눠 처리하는 검색 API를 개발했습니다.',
    background:
      '광역단위 노후 건축물 디지털 안전워치 플랫폼에서 건축물 스마트검색 서비스를 만드는 연구과제입니다.',
    highlights: [
      '문서 질의: 질문 재작성·재질의, PGVector 검색, 리랭킹을 거쳐 LLM 응답',
      '정형 데이터 질의: 자연어 분석, SQL 생성, DB 조회 경로 구성',
      'BIM 질의: 객체·속성 조건 추출 후 관련 데이터 조회 경로 구성',
      'LangGraph Supervisor 패턴으로 문서 RAG·NL2SQL·BIM 질의 라우팅',
    ],
    role: [
      'FastAPI 검색 API와 LangGraph Supervisor 질의 라우팅 구현',
      '문서 전처리·청킹, bge-m3 임베딩과 PGVector 검색 구성',
      '정형 데이터 SQL 조회와 BIM 객체·속성 조회 경로 구현',
    ],
    problem:
      '건축물 관련 질문은 법령·지침 같은 문서, 건축물·점검 이력 같은 정형 데이터, BIM 객체 정보로 대상이 달랐습니다. 질문 유형에 따라 적절한 데이터를 조회하도록 처리 경로를 나눌 필요가 있었고, 사내망 환경이라 외부 LLM API를 사용할 수 없었습니다.',
    solution:
      `건축물 관련 질문을 문서 RAG, NL2SQL, BIM 질의 세 유형으로 나누고 LangGraph Supervisor 패턴으로 해당 경로에 라우팅했습니다.\n\n문서 질의는 질문 재작성과 재질의, BAAI/bge-m3 임베딩, PGVector 검색, 리랭킹을 거쳐 Ollama 로컬 LLM이 답변하도록 구성했습니다. LangChain으로 검색과 응답 흐름을 연결했습니다.\n\n정형 데이터 질의는 자연어 질문의 조건을 SQL로 변환해 DB를 조회하고, BIM 질의는 객체와 속성 정보를 기준으로 관련 데이터를 조회하도록 구현했습니다. 외부 LLM API를 사용할 수 없는 사내망 환경을 고려해 검색과 응답은 로컬에서 처리했습니다.`,
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
    category: '연구과제',
    group: 'ai',
    domain: 'AI / Computer Vision / Smart Plant',
    period: '2025.03.01 ~ 2026.02.28',
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
      '이미지 업로드와 UUID별 처리 결과·작업 이력 관리',
      'SAM 객체 분할과 선택 수정, 배경제거·인페인팅 기능 구현',
      '기울기 보정과 OCR 태그 인식을 메타정보 생성에 연결',
      '프로젝트 내용을 바탕으로 스마트플랜트 AI 메타정보 자동생성 프레임워크 논문 1저자 작성',
    ],
    problem:
      '현장 촬영 이미지에서 필요한 설비를 분리하고, 태그 정보를 메타정보로 연결하는 처리가 필요했습니다. 분할 결과를 확인하고 수정할 수 있도록 모바일 앱과 서버가 함께 동작해야 했습니다.',
    solution:
      '현장마다 설비 종류가 달라 미리 학습 데이터를 준비하는 방식 대신, 클릭한 지점을 기준으로 객체를 분할하는 SAM을 사용했습니다. 한 번에 분리되지 않은 부분은 Add / Subtract와 Undo / Redo로 수정할 수 있게 했습니다. 제거한 배경은 LaMa로 채우고, PaddleOCR로 읽은 설비 태그 ID를 메타정보에 연결했습니다. 이미지 UUID를 기준으로 처리 결과를 구분해 캐시하고 작업 히스토리를 서버에서 관리했습니다.',
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
    ],
  },
  {
    title: '3D 산단 디지털 플랫폼 유지관리',
    category: '회사 프로젝트',
    group: 'backend',
    domain: 'Backend / Platform Maintenance',
    period: '2025.01 ~ 2025.07',
    tags: ['Backend', 'SM / 운영', 'Platform Maintenance'],
    sectionLabels: {
      problem: '운영 환경 API 연동 문제',
      solution: '외부 API 호출 경로 적용',
    },
    summary:
      '경남 창원시 3D 산단 디지털 플랫폼을 유지관리하며 관리자 기능과 통계 조회 기능을 개발했습니다.',
    background:
      '창원시 산업단지 정보를 3D 디지털 트윈으로 확인하는 플랫폼의 유지관리 프로젝트입니다.',
    highlights: [
      'Spring Boot 관리자 기능과 추가 API 개발',
      'JPA 기반 기능 개발 및 PostgreSQL 데이터 조회',
      '관리자 통계 기능에서 GA Data API 연동 경로 적용',
    ],
    role: [
      'Spring Boot 관리자 기능 유지보수 및 추가 API 개발',
      'JPA와 SQL을 이용한 PostgreSQL 데이터 처리',
      'Thymeleaf 통계 화면 및 Google Analytics Data API 연동',
    ],
    problem:
      '관리자 통계 기능에 Google Analytics Data API를 연동했습니다. 개발 서버에서는 정상 호출됐지만 폐쇄망 운영 서버에서는 API 호출이 실패했습니다.',
    solution:
      '애플리케이션 코드와 서버 설정, 외부 API 통신 경로를 나누어 확인했습니다. 폐쇄망의 외부 통신 경로를 확인한 뒤 내부 Spring Boot 서버가 DMZ Apache Proxy를 거쳐 Google API를 호출하도록 수정했습니다.',
    tech: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'SQL', 'REST API', 'Thymeleaf', 'Apache HTTP Server / Proxy', 'Google Analytics Data API'],
  },
  {
    title: '한화오션 안전혁신과제',
    category: '회사 프로젝트',
    group: 'backend',
    domain: 'Backend / Mobile WebView',
    period: '2026.06.15 ~ 2026.12 예정',
    tags: ['Backend', 'Morpheus', 'Spring Legacy', 'MyBatis'],
    summary:
      '교육이력·BMSW·MSDS·마일리지 4개 모듈의 모바일 화면과 Spring 백엔드 기능을 개발했습니다.',
    sectionLabels: {
      role: '주요 개발 업무',
      solution: '주요 구현 사례',
    },
    background:
      '한화오션 현장에서 수기로 처리하던 안전·교육·작업 업무를 모바일 시스템으로 전환하는 과제입니다.',
    highlights: [
      '교육이력 / BMSW / MSDS / 마일리지 4개 모바일 모듈 개발',
      'Spring Framework / MyBatis / Oracle 기반 백엔드 기능 개발',
      'WAS 이중화 환경의 인증코드 조회 문제를 공용 DB 저장 방식으로 해결',
      '교육영상 Range 응답·진도 저장 연계 및 JMeter 시나리오 직접 구성',
    ],
    role: [
      'Morpheus/MSP 기반 하이브리드 웹뷰로 교육이력·BMSW·MSDS·마일리지 4개 모듈 개발',
      'Spring Framework 백엔드 기능과 MyBatis Mapper, Oracle SQL 작성',
    ],
    solutionSections: [
      {
        title: '이중화 환경의 인증코드 조회 문제',
        paragraphs: [
          '마일리지 지급 대상을 확인하기 위해 QR 스캔과 숫자 직접 입력에 같은 7자리 인증코드를 사용했습니다. 처음에는 Spring 서비스의 ConcurrentHashMap에 코드와 사번, 만료시간을 저장하고 5분 동안 사용할 수 있도록 구현했습니다.',
          '운영에서는 코드를 발급한 WAS와 검증 요청을 받은 WAS가 달라지면 조회가 실패했습니다. 인증코드가 서버별 메모리에 따로 저장되어 다른 서버에서는 조회할 수 없었던 것이 원인이었습니다.',
          'Redis 도입이나 로드밸런서 설정 변경이 어려워 기존 공용 DB에 코드와 만료시간, 사용 상태를 저장하도록 변경했습니다. 재발급 시 기존 코드를 무효화하고, 검증 시 유효시간과 사용 여부를 확인하도록 처리해 어느 WAS에서도 같은 코드를 조회할 수 있게 했습니다.',
        ],
      },
      {
        title: '교육영상 응답과 부하테스트 구성',
        paragraphs: [
          '영상 플레이어와 JMeter 모두 처음 사용해 필요한 동작을 찾아가며 구현했습니다. Spring Controller에서 Range 요청에 맞춰 영상 응답 범위를 처리하고, 모바일에서는 시청 중·일시정지·종료 시점에 진도 저장 API를 호출하도록 연결했습니다. 저장된 진도로 이어보기와 수강 완료 후 다시보기도 구분했습니다.',
          '교육영상의 건너뛰기와 배속을 제한하고 브라우저 재생 조건을 확인했습니다. 가로 전체 화면에서는 네이티브 영역과 연동해 상·하단 바를 숨겼습니다.',
          '전달받은 동시 사용자 조건을 바탕으로 JMeter 환경과 요청 시나리오를 직접 구성했습니다. Groovy로 사용자별 Range 범위를 계산하고 다음 요청 위치를 갱신했습니다. 초기 버퍼링을 가정한 첫 요청 전 3초 대기와 반복 요청 간격을 설정한 뒤 응답시간, 오류 여부, Throughput을 확인했습니다.',
        ],
      },
    ],
    tech: ['Java', 'Spring Framework', 'MyBatis', 'Oracle', 'SQL', 'Morpheus/MSP', 'JavaScript', 'video.js', 'JMeter'],
  },
  {
    title: '한화토탈에너지스 MySafety 작업자 안전 지원 모바일 플랫폼',
    category: '회사 프로젝트',
    group: 'backend',
    domain: 'Mobile WebView / API Integration / Store Release',
    period: '2024.09 ~ 2025.03 (인턴 기간부터 참여)',
    screenshots: [
      { label: 'App Store', src: mySafetyAppStore, frameClass: 'aspect-[4/3]' },
      { label: 'Google Play', src: mySafetyPlayStore, frameClass: 'aspect-[4/3]' },
    ],
    compactScreenshots: true,
    tags: ['Mobile', 'API Integration', 'Operations'],
    summary:
      'Apache Cordova 기반 모바일 기능을 개발하고 Android/iOS 앱 배포를 맡았습니다.',
    background:
      '한화토탈에너지스 공장 작업자가 공지사항과 대피소 위치, 작업자 위치 정보를 확인하는 안전 지원 앱입니다.',
    highlights: [
      'Apache Cordova 기반 모바일 웹뷰 기능 개발',
      'REST API 연동 및 작업자 안전 기능 구현',
      'Android / iOS 스토어 배포',
    ],
    role: [
      'Apache Cordova 웹뷰 기능 개발 및 REST API 연동',
      'Background Geolocation과 네이티브 위치 기능 연동',
      'Android/iOS 빌드·인증서 설정과 양쪽 스토어 배포',
      '권한 정책, 로그인·앱 실행 관련 운영 이슈 대응',
    ],
    tech: ['Apache Cordova', 'JavaScript', 'REST API', 'Android', 'iOS', 'Native', 'Background Geolocation', 'Firebase'],
  },
  {
    title: 'Slack 기반 업무 자동화 봇 개발',
    category: '개인 프로젝트',
    group: 'personal',
    domain: 'Slack Automation / Internal Tools',
    tags: ['Automation', 'Slack Bot', 'Node.js'],
    summary:
      '휴가자, 회의, B2B 현장 일정, 기술 글과 오늘의 운세를 Slack으로 알려주는 사내 업무 봇입니다.',
    botOverview,
    botScreenshots: [
      { label: '휴가 알림', src: botLeave },
      { label: '오늘의 운세 · 알림 설정', images: [botFortune, botFortuneSettings] },
      { label: '좌석 연장 · 회의 알림', images: [botMeetingSeat, botMeetingStart] },
      { label: 'B2B 일정 알림', src: botB2B },
      { label: '기술 블로그 RSS', src: botRSS },
    ],
    highlights: [
      '휴가자·회의·현장 체류·RSS 정기 알림',
      'Playwright 기반 회의실 예약 자동화',
      'FastAPI와 Ollama를 연동한 개인화 AI 운세 DM',
      'Slack 명령어로 휴가 정보 확인',
    ],
    background:
      '휴가자와 회의, 현장 체류 일정을 확인할 때마다 그룹웨어와 일정표를 따로 열어봐야 했습니다. 반복해서 확인하는 내용은 Slack으로 받아보고, 회의실 예약과 운세 안내도 처리할 수 있게 봇을 만들었습니다.',
    role: [
      'Node.js와 Slack Bolt 기반 봇 개발 및 운영',
      'Playwright 기반 사내 회의실 예약 시스템 연동',
      'FastAPI 운세 생성 API와 Ollama 로컬 LLM 연동',
      'PostgreSQL 사용자 정보·수신 설정 관리 및 PM2 실행 환경 구성',
    ],
    features: [
      '휴가봇: 매일 오전 9시 휴가자 안내와 Slack 명령어',
      '운세봇: 오늘의 운세 DM과 생년월일·발송 시각 변경, 알림 해지',
      '회의봇: 회의 시작 10분 전 알림과 Playwright 회의실 예약',
      'B2B 일정봇: 주간 일정 및 현장 체류 인원 알림',
      'RSS봇: 매일 오전 9시 GeekNews, 매주 월요일 오전 9시 30분 기술 블로그 새 글 안내',
    ],
    implementations: [
      'Playwright로 회의실 예약 시스템을 연동하고, PM2로 봇 프로세스를 관리',
      'FastAPI·Ollama로 운세를 생성하고 PostgreSQL에 수신 설정 저장',
      '정기 발송 스케줄과 RSS 발송 이력 관리로 중복 알림 방지',
    ],
    outcomes: [
      '휴가·회의·현장 일정과 새 기술 글을 Slack에서 확인',
      '회의실 예약과 개인별 운세 안내를 Slack에서 처리',
    ],
    tech: ['Node.js', 'JavaScript', 'Slack Bolt', 'Slack API', 'Playwright', 'PostgreSQL', 'FastAPI', 'Ollama', 'node-cron', 'RSS Parser', 'PM2'],
  },
  {
    title: 'B2B 상주 인원 일정 관리 타임라인',
    category: '개인 프로젝트',
    group: 'personal',
    galleryCompact: true,
    domain: 'Work Tool / Schedule Management',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    summary:
      '주간 타임라인과 항공·전체 일정·운영 현황 화면에서 거제도 상주 인원의 이동과 체류 일정을 확인하는 도구입니다.',
    screenshots: [
      { label: '주간 이동·체류 타임라인', src: b2bTimelinePreview, frameClass: 'aspect-[16/10]' },
      { label: '항공 일정', src: b2bFlightSchedule, frameClass: 'aspect-[16/10]' },
      { label: '전체 일정·휴가', src: b2bOverviewSchedule, frameClass: 'aspect-[16/10]' },
      { label: '운영 현황', src: b2bOperationsDashboard, frameClass: 'aspect-[16/10]' },
    ],
    highlights: ['인원별 이동·체류 주간 타임라인', '항공·전체 일정·휴가 조회', '운영 현황 화면'],
    background:
      '상주 인원 일정을 확인할 때 메신저와 여러 표를 오가는 일이 반복돼, 이동·체류·휴가를 한곳에서 볼 수 있도록 만들었습니다.',
    features: [
      'React 기반 주간 타임라인, 항공 일정, 전체 일정·휴가, 운영 현황 화면 개발',
      'Node.js·Express API와 PostgreSQL 일정 데이터 연동',
      '그룹웨어 휴가 일정 조회 및 Google Calendar 연동',
    ],
    outcomes: [
      '인원별 이동·체류·휴가 일정을 한 화면에서 확인',
    ],
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Google Calendar API', 'Playwright', 'Codex'],
  },
  {
    title: 'Proxmox 기반 홈서버 및 네트워크 인프라 구축',
    category: '개인 홈랩',
    group: 'personal',
    domain: 'Infra / Network',
    tags: ['Infra', 'Network', 'Home Lab'],
    summary:
      'Proxmox에 가상머신을 구성하고, pfSense와 Nginx Proxy Manager를 이용해 외부에서 내부 서비스에 접속하는 경로를 설정했습니다.',
    diagram: homeLabDiagram,
    highlights: ['Proxmox VM 구성', 'pfSense 방화벽/NAT 설정', 'Nginx Proxy Manager와 DuckDNS 연동'],
    implementations: [
      'Proxmox VE 기반 가상화 환경 구성',
      'pfSense VM을 라우터와 방화벽으로 설정',
      'pfSense VM과 KT 공유기를 연결해 WAN·LAN 경로 구성',
      '내부 LAN과 외부 접속 경로 분리 및 NAT·포트포워딩 설정',
      'DuckDNS 도메인이 공인 IP를 가리키도록 DDNS 설정',
      'Nginx Proxy Manager에서 도메인별 내부 IP·포트 연결',
      'OpenSSL 인증서를 적용해 HTTPS 접속 구성',
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
      'OpenSSL',
    ],
  },
  {
    title: '서울에서 뭐하고 놀지?',
    category: '캡스톤 프로젝트',
    group: 'personal',
    galleryCompact: true,
    domain: 'Web Service / Public API',
    tags: ['Spring Boot', 'React', 'Public API'],
    period: '2024.07.01 ~ 2024.09.30',
    contest: '2024 관광데이터 활용 공모전 출품',
    award: '교내 캡스톤디자인 경진대회 동상',
    galleryIntroImages: [
      { label: '서비스 구성도', src: seoulHereDiagram, alt: '브라우저가 React 빌드 파일을 받아 실행하고, React의 API 요청이 Nginx를 거쳐 Spring Boot REST API로 전달되는 구조. 서버는 AWS PostgreSQL, EC2 파일시스템, 외부 API와 연결됩니다.', frameClass: 'aspect-[16/10]' },
      { label: '데이터베이스 ERD', src: seoulHereSqlModel, alt: 'table.sql 기준 PostgreSQL 테이블의 컬럼과 키 관계를 표시한 ERD', frameClass: 'aspect-[16/10]' },
      { label: '유스케이스', src: seoulHereUseCases, alt: '사용자·관리자와 Kakao OAuth2, 관광공사, TMAP, 서울시 교통 API 연동을 표시한 UML 유스케이스', frameClass: 'aspect-[16/10]' },
    ],
    screenshots: [
      { label: '서울 지역·관심 카테고리 선택', src: seoulHereCapture01, frameClass: 'aspect-[16/10]' },
      { label: '구 선택 지도', src: seoulHereCapture02, frameClass: 'aspect-[16/10]' },
      { label: '지역별 장소 검색', src: seoulHereCapture03, frameClass: 'aspect-[16/10]' },
      { label: '코스 이동 경로', interactive: 'seoul-route-map' },
      { label: '코스 공유 게시판', src: seoulHereBoard, frameClass: 'aspect-[16/10]' },
      { label: '마이페이지 · 프로필과 활동', src: seoulHereMyPage, frameClass: 'aspect-[16/10]' },
      { label: '찜한 장소', src: seoulHereFavorites, frameClass: 'aspect-[16/10]' },
      { label: '내가 저장한 코스', src: seoulHereMyCourses, frameClass: 'aspect-[16/10]' },
    ],
    summary:
      '서울의 구 단위 지역과 관심 카테고리를 기준으로 친구 또는 연인을 위한 데이트 코스를 추천하고, 사용자가 직접 만든 코스를 공유할 수 있게 만든 웹 서비스입니다.',
    highlights: ['구/카테고리 기반 코스 추천', '도보·대중교통 이동 경로 제공', '사용자 코스 공유 및 리뷰'],
    background:
      '대학교 캡스톤으로 처음 만든 웹 프로젝트입니다. 서울에서 데이트 코스를 찾을 때 장소와 이동 경로를 따로 검색해야 하는 불편을 줄이기 위해, 관광공사 데이터를 활용한 추천과 사용자가 직접 만드는 코스 공유 기능을 기획했습니다.',
    role: [
      'Spring Boot와 JPA 기반 장소 추천 및 코스 조회 API 개발',
      'React 추천·지도·코스 저장·공유 화면 개발',
      '관광공사·TMAP·서울시 대중교통 API와 Kakao OAuth2 연동',
      'React 빌드 결과물을 Spring Boot에 포함해 AWS EC2에 배포',
      'Nginx 프록시, AWS PostgreSQL, EC2 파일 저장 경로 구성',
    ],
    problem:
      '사용자는 장소 추천, 이동 경로, 소요 시간, 리뷰를 각각 다른 서비스에서 확인해야 했습니다. 또한 같은 장소라도 방문 순서에 따라 이동 시간과 코스 만족도가 달라질 수 있어, 단순 장소 목록이 아니라 실제 이동 가능한 코스 형태로 보여줄 필요가 있었습니다.',
    solution:
      '백엔드는 Spring Boot와 JPA로 구성하고, 사용자가 선택한 서울의 구와 관심 카테고리를 기준으로 관광지·음식점·문화시설 데이터를 조회하도록 만들었습니다. TMAP API와 서울시 대중교통 API를 연동해 코스별 이동 경로와 시간을 제공하고, React에서는 추천 코스와 지도, 장소 상세, 코스 저장·공유 화면을 개발했습니다.',
    outcomes: [
      '구/카테고리 기반 데이트 코스 추천부터 지도 경로 안내까지 동작하는 웹 서비스 완성',
      '사용자 수동 코스 구성, 저장, 공유, 리뷰 흐름 구현',
      '2024 관광데이터 활용 공모전 출품',
      '교내 캡스톤디자인 경진대회 동상 수상',
    ],
    tech: [
      'Java',
      'Spring Boot',
      'JPA',
      'React',
      'JavaScript',
      'REST API',
      'TMAP API',
      'Kakao OAuth2',
      'Seoul Public Transportation API',
      'Public Data API',
      'AWS EC2',
      'Nginx',
      'PostgreSQL',
    ],
  },
];
