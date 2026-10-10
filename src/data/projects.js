import paperPdf from '../assets/paper-smart-plant-ai-metadata.pdf';
import homeLabDiagram from '../assets/proxmox-homelab-topology.svg';
import botOverview from '../assets/slack-bots-overview.png';
import botLeave from '../assets/slack-bot-leave.png';
import botFortune from '../assets/slack-bot-fortune.png';
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
import seoulHereDiagram from '../assets/seoulhere-aws-topology.svg';
import seoulHereUseCases from '../assets/seoulhere-use-cases-clean.svg';
import seoulHereDataModel from '../assets/seoulhere-data-model-clean.svg';
import seoulHereCapture01 from '../assets/seoulhere-live-01.png';
import seoulHereCapture02 from '../assets/seoulhere-live-02.png';
import seoulHereCapture03 from '../assets/seoulhere-live-03.png';
import seoulHereCapture04 from '../assets/seoulhere-live-04.png';

export const projects = [
  {
    title: 'Safety Watch 스마트검색 RAG 기반 AI 플랫폼',
    category: '회사 프로젝트',
    group: 'ai',
    domain: 'AI Search / Backend',
    period: '2026.01 ~ 2026.07',
    tags: ['Backend', 'AI Search', 'RAG', 'VectorDB'],
    sectionLabels: {
      problem: '질의 유형별 처리 경로',
      solution: '질의 분류와 검색 흐름 구현',
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
      '도메인 문서 전처리 및 청킹 기준 구성',
      'HuggingFace Embeddings와 BAAI/bge-m3로 문서 임베딩 처리',
      'PostgreSQL PGVector 기반 벡터 저장 구조 구현',
      'FastAPI 기반 검색 API 엔드포인트 개발',
      'LangChain으로 질문 재작성·재질의, 검색, 리랭킹, 로컬 LLM 응답 흐름 구성',
      'LangGraph Supervisor 패턴으로 문서 RAG·NL2SQL·BIM 질의 경로 라우팅',
    ],
    problem:
      '건축물 관련 질문은 법령·지침 같은 문서, 건축물·점검 이력 같은 정형 데이터, BIM 객체 정보로 대상이 달랐습니다. 질문 유형에 따라 적절한 데이터를 조회하도록 처리 경로를 나눌 필요가 있었고, 사내망 환경이라 외부 LLM API를 사용할 수 없었습니다.',
    solution:
      `건축물 관련 질문을 문서 RAG, NL2SQL, BIM 질의 세 유형으로 나누고 LangGraph Supervisor 패턴으로 해당 경로에 라우팅했습니다.\n\n문서 질의는 질문 재작성과 재질의, BAAI/bge-m3 임베딩, PGVector 검색, 리랭킹을 거쳐 Ollama 로컬 LLM이 답변하도록 구성했습니다. LangChain으로 검색과 응답 흐름을 연결했습니다.\n\n정형 데이터 질의는 자연어 질문의 조건을 SQL로 변환해 DB를 조회하고, BIM 질의는 객체와 속성 정보를 기준으로 관련 데이터를 조회하도록 구현했습니다. 외부 LLM API를 사용할 수 없는 사내망 환경을 고려해 검색과 응답은 로컬에서 처리했습니다.`,
    outcomes: [
      '사내망에서 동작하는 문서 RAG 검색 API 구현',
      'LangGraph Supervisor 패턴을 이용한 문서 RAG·NL2SQL·BIM 질의 라우팅 구현',
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
      '촬영한 설비 사진에서 객체 분리, 배경 제거, 태그 인식, 메타정보 생성까지 처리하는 기능 구현',
      '모바일에서 촬영한 이미지를 3D 모델링 사전 작업에 활용하도록 연결',
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
      'Spring Boot 기반 관리자 시스템 유지보수',
      'JPA 기반 기능 개발',
      '현업 요구사항 기반 추가 API 개발',
      'Thymeleaf 기반 통계 조회 화면 개발',
      'PostgreSQL 데이터 조회 및 운영 데이터 관리',
      'SQL 작성 및 데이터 정리',
      'Google Analytics Data API 연동',
      '외부 API 연동 및 장애 원인 확인',
      '운영 환경 배포 지원',
    ],
    problem:
      '관리자 통계 기능에 Google Analytics Data API를 연동했습니다. 개발 서버에서는 정상 호출됐지만 폐쇄망 운영 서버에서는 API 호출이 실패했습니다.',
    solution:
      'Spring Boot에서 통계 조회 API를 만들고 Thymeleaf 화면에서 확인할 수 있게 구성했습니다. 운영 반영 과정에서 외부 API 호출이 실패해 애플리케이션 코드, 폐쇄망 서버, 방화벽, DMZ 구간을 나누어 확인했습니다. DMZ Apache Proxy를 통해 외부 API 호출 경로를 구성했고, 폐쇄망 운영 서버에서도 Google Analytics 통계 데이터를 조회할 수 있도록 수정했습니다.',
    outcomes: [
      '관리자 통계 조회 API와 Thymeleaf 화면 개발',
      '폐쇄망 운영 환경에서 DMZ Proxy를 통한 Google Analytics 데이터 조회 경로 적용',
      '기존 관리자 화면 구조를 크게 변경하지 않고 외부 API 연동 문제 해결',
      '운영 중 발생한 데이터·기능 이슈를 원인 확인부터 배포까지 처리',
    ],
    tech: ['Spring Boot', 'Java', 'JPA', 'PostgreSQL', 'Apache HTTP Server', 'Google Analytics Data API', 'JavaScript', 'Thymeleaf', 'REST API', 'SQL', 'Git'],
  },
  {
    title: '한화오션 안전혁신과제',
    category: '회사 프로젝트',
    group: 'backend',
    domain: 'Backend / Mobile WebView',
    period: '2026.06.15 ~ 2026.12 예정',
    tags: ['Backend', 'Morpheus', 'Spring Legacy', 'MyBatis'],
    summary:
      'Morpheus/MSP 모바일 웹뷰와 Spring 백엔드로 안전·교육·작업 기능을 개발했습니다.',
    sectionLabels: {
      role: '주요 개발 업무',
      solution: '교육 동영상·MSDS QR 구현',
    },
    background:
      '한화오션 현장에서 수기로 처리하던 안전·교육·작업 업무를 모바일 시스템으로 전환하는 과제입니다.',
    highlights: [
      '교육이력 / BMSW / MSDS / 마일리지 4개 모바일 모듈 개발',
      'Spring Framework / MyBatis / Oracle 기반 백엔드 기능 개발',
      '교육 동영상 플레이어 구현 및 JMeter 부하테스트',
      '기본 카메라로 MSDS QR을 열 수 있도록 로그인 없는 URL 경로 구성',
    ],
    role: [
      'Morpheus/MSP 기반 하이브리드 웹뷰로 교육이력·BMSW·MSDS·마일리지 4개 모듈 개발',
      'Spring Framework 백엔드 기능과 MyBatis Mapper, Oracle SQL 작성',
      '공지·문의·자료·증빙, BMSW 의견·위험요인, MSDS 조회, 마일리지 신청 기능 구현',
      '모듈 간 화면 작성 규칙 정리',
    ],
    solution:
      `교육 동영상 플레이어는 처음 맡은 기능이라 브라우저 정책과 HTTP 헤더, Range 응답 방식을 확인하며 구현했습니다. 건너뛰기와 배속을 제한하고 화면을 벗어나면 재생을 중단하도록 처리했습니다. 가로 전체 화면에서는 네이티브 영역과 연동해 상·하단 바를 숨겼습니다. Spring Controller에서 Range 요청에 맞춰 영상 응답 범위를 처리하고, 실제 시청 흐름을 반영한 JMeter 시나리오로 50명·100명·150명 조건의 응답시간, 오류 여부, 처리량을 확인했습니다.\n\nMSDS QR은 앱 설치나 로그인이 필요한 딥링크 대신 기본 카메라에서 열 수 있는 URL로 구성했습니다. 해당 .do 경로만 Spring Security에서 비로그인 접근을 허용하고, Morpheus 백엔드의 JSP 화면으로 연결했습니다.`,
    outcomes: [
      '한화오션 협력사와 임직원이 수기로 처리하던 안전·교육·작업 업무를 모바일 앱으로 전환하고 관련 4개 모듈을 구현',
    ],
    tech: ['Java', 'Spring Framework', 'MyBatis', 'Oracle', 'SQL', 'Morpheus', 'JavaScript', 'JMeter'],
  },
  {
    title: 'MySafety 작업자 안전 지원 모바일 플랫폼',
    category: '회사 프로젝트',
    group: 'backend',
    domain: 'Mobile WebView / API Integration / Store Release',
    period: '2024.09 ~ 2025.03 (인턴 기간부터 참여)',
    screenshots: [
      { label: 'App Store', src: mySafetyAppStore, frameClass: 'aspect-[4/3]' },
      { label: 'Google Play', src: mySafetyPlayStore, frameClass: 'aspect-[4/3]' },
    ],
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
      'Apache Cordova 기반 모바일 웹뷰 기능 개발',
      'REST API 연동 및 화면 기능 구현',
      'WebView에서 처리하기 어려운 위치 기능을 네이티브 영역과 연동',
      'Android/iOS 기능 개발 및 스토어 배포',
      '인증서 및 배포 설정 구성',
      'Background Geolocation 기반 위치 수집 기능 연동',
      '스토어 정책에 맞춘 로그인 및 앱 실행 흐름 수정',
      'Firebase 연동 및 모바일 운영 이슈 대응',
    ],
    problem:
      '백그라운드 위치 수집은 WebView만으로 처리하기 어려웠고, Android/iOS의 권한 정책에 맞춘 네이티브 기능 연동이 필요했습니다.',
    solution:
      'Cordova 기반으로 WebView 화면을 개발하고 REST API를 연동했습니다. 위치 수집은 Background Geolocation과 네이티브 영역을 연결해 처리했으며, Android/iOS 빌드와 스토어 배포 과정에서 인증서, 권한, 로그인 흐름, 앱 실행 이슈를 실제 단말 기준으로 확인하며 대응했습니다.',
    outcomes: [
      '작업자 안전 지원 모바일 앱 주요 기능 개발',
      '약 5,000~10,000명 규모 사용자 대상 앱 배포',
      'Android와 iOS 스토어 배포 진행',
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
      { label: '오늘의 운세', src: botFortune },
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
      '운세봇: 사용자별 오늘의 운세 생성 및 Slack DM',
      '회의봇: 회의 시작 10분 전 알림과 Playwright 회의실 예약',
      'B2B 일정봇: 주간 일정 및 현장 체류 인원 알림',
      'RSS봇: 매일 오전 9시 GeekNews, 매주 월요일 오전 9시 30분 기술 블로그 새 글 안내',
    ],
    implementations: [
      '운세 생성: FastAPI에서 Ollama 로컬 LLM을 호출해 Slack 봇과 연동',
      '개인화 설정: PostgreSQL에 사용자별 생년월일, 수신 여부, 동의 설정 저장',
      '운세 발송: 결과 캐싱 및 한국 시간 기준 발송 스케줄 구성',
      'RSS 발송: 새 글 이력을 관리해 중복 전송 방지',
      '봇 운영: PM2로 프로세스 관리 및 상시 실행',
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
    domain: 'Work Tool / Schedule Management',
    tags: ['React', 'Timeline UI', 'Codex'],
    summary:
      '거제도 상주 인원의 이동, 체류, 휴가, 서울 근무 일정을 한 화면에서 확인하기 위해 만든 일정 관리 화면입니다.',
    screenshots: [
      { label: '주간 이동·체류 타임라인', src: b2bTimelinePreview, frameClass: 'aspect-[16/10]' },
      { label: '항공 일정', src: b2bFlightSchedule, frameClass: 'aspect-[16/10]' },
      { label: '전체 일정·휴가', src: b2bOverviewSchedule, frameClass: 'aspect-[16/10]' },
      { label: '운영 현황', src: b2bOperationsDashboard, frameClass: 'aspect-[16/10]' },
    ],
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
    diagram: homeLabDiagram,
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
    title: '서울에서 뭐하고 놀지?',
    category: '캡스톤 프로젝트',
    group: 'personal',
    domain: 'Web Service / Public API',
    tags: ['Spring Boot', 'React', 'Public API'],
    period: '2024.07.01 ~ 2024.09.30',
    contest: '2024 관광데이터 활용 공모전 출품',
    diagram: seoulHereDiagram,
    diagramAlt: '사용자 요청이 Nginx를 거쳐 Spring Boot로 전달되고, 내장 React 화면과 API가 AWS DB 및 EC2 파일 저장소를 사용하는 구조',
    screenshots: [
      { label: '서울 지역·관심 카테고리 선택', src: seoulHereCapture01, frameClass: 'aspect-[16/10]' },
      { label: '구 선택 지도', src: seoulHereCapture02, frameClass: 'aspect-[16/10]' },
      { label: '지역별 장소 검색', src: seoulHereCapture03, frameClass: 'aspect-[16/10]' },
      { label: '코스 이동 경로', src: seoulHereCapture04, frameClass: 'aspect-[16/10]' },
    ],
    referenceImages: [
      { label: '유스케이스', src: seoulHereUseCases, alt: '사용자·관리자·관광 API 기능 유스케이스' },
      { label: '테이블 관계', src: seoulHereDataModel, alt: '회원, 코스, 장소, 리뷰와 관련 테이블 관계도' },
    ],
    summary:
      '서울의 구 단위 지역과 관심 카테고리를 기준으로 친구 또는 연인을 위한 데이트 코스를 추천하고, 사용자가 직접 만든 코스를 공유할 수 있게 만든 웹 서비스입니다.',
    highlights: ['구/카테고리 기반 코스 추천', '도보·대중교통 이동 경로 제공', '사용자 코스 공유 및 리뷰'],
    background:
      '대학교 캡스톤으로 처음 만든 웹 프로젝트입니다. 서울에서 데이트 코스를 찾을 때 장소와 이동 경로를 따로 검색해야 하는 불편을 줄이기 위해, 관광공사 데이터를 활용한 추천과 사용자가 직접 만드는 코스 공유 기능을 기획했습니다.',
    role: [
      'Spring Boot 기반 장소 추천 및 코스 조회 API 작성',
      'JPA 기반 장소 데이터 조회 처리 구성',
      'Spring WebFlux를 사용한 외부 API 호출 연동',
      'React 기반 추천 결과, 코스 상세, 지도 화면 구현',
      '한국관광공사 국문관광정보 서비스 API와 TMAP API 연동',
      '서울시 대중교통 API 연동',
      'Kakao OAuth2 기반 소셜 로그인 연동',
      'JSON 데이터에서 장소명, 좌표 등 필요한 값 추출',
      '반응형 화면 및 공용 스타일 정리',
      'React 빌드 결과물을 Spring Boot에 포함해 함께 배포',
      'AWS EC2에서 Nginx Reverse Proxy를 구성해 context path 요청을 Spring Boot로 전달',
      'AWS DB 연동 및 EC2 서버 파일시스템을 이용한 파일 저장',
    ],
    problem:
      '사용자는 장소 추천, 이동 경로, 소요 시간, 리뷰를 각각 다른 서비스에서 확인해야 했습니다. 또한 같은 장소라도 방문 순서에 따라 이동 시간과 코스 만족도가 달라질 수 있어, 단순 장소 목록이 아니라 실제 이동 가능한 코스 형태로 보여줄 필요가 있었습니다.',
    solution:
      '백엔드는 Spring Boot와 JPA로 구성하고, 사용자가 선택한 서울의 구와 관심 카테고리를 기준으로 관광지, 음식점, 문화시설 데이터를 조회하도록 만들었습니다. 코스 이동 경로는 TMAP API와 서울시 대중교통 API를 연동해 도보와 대중교통 기준으로 확인할 수 있게 했고, 외부 API 호출이 여러 번 발생하는 구간은 Spring WebFlux로 처리했습니다. React에서는 추천 코스, 지도 경로, 장소 상세 정보, 사용자가 만든 코스 저장·공유 화면을 구성했습니다.',
    outcomes: [
      '구/카테고리 기반 데이트 코스 추천부터 지도 경로 안내까지 동작하는 웹 서비스 완성',
      '사용자 수동 코스 구성, 저장, 공유, 리뷰 흐름 구현',
      '2024 관광데이터 활용 공모전 출품',
      '교내 캡스톤디자인 경진대회 동상 수상',
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
      'Kakao OAuth2',
      'Seoul Public Transportation API',
      'Public Data API',
      'JSON',
      'Responsive Web',
      'UI/UX',
      'AWS EC2',
      'Nginx',
      'AWS DB',
    ],
  },
];
