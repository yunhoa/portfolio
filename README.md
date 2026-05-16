# 조윤호 개발자 포트폴리오

백엔드 API를 중심으로 프론트엔드, AI/RAG, 공간 데이터, 운영 자동화, 디지털 트윈 경험을 정리한 단일 페이지 포트폴리오입니다.

## 기술 스택

- React
- Vite
- JavaScript
- Tailwind CSS
- Three.js

## 파일 구조

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── scripts
│   └── build.mjs
├── README.md
└── src
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── Projects.jsx
    │   ├── SceneBackground.jsx
    │   ├── VisualWork.jsx
    │   └── Skills.jsx
    ├── assets
    └── data
        ├── projects.js
        ├── skills.js
        └── visualWorks.js
```

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 터미널에 표시되는 로컬 주소로 접속합니다. 기본값은 보통 `http://localhost:5173`입니다.

## 빌드

```bash
npm run build
```

## 수정 포인트

- 프로젝트 내용: `src/data/projects.js`
- 기술 스택: `src/data/skills.js`
- 화면 작업물: `src/data/visualWorks.js`
- 연락처 링크: `src/components/Contact.jsx`
- 섹션 구성: `src/App.jsx`

## 프로젝트 목록

### Projects

1. Safety Watch 스마트검색 RAG 기반 AI 플랫폼
2. AI 기반 스마트플랜트 설비 이미지 전처리 및 메타정보 자동생성 프레임워크
3. AI 기반 좌석배치도 공간 객체화 PoC
4. 3D 산단 디지털 플랫폼 유지관리
5. Slack 기반 업무 자동화 봇
6. Proxmox 기반 홈서버 및 네트워크 인프라 구축
7. 서울 데이트코스 추천 웹 서비스

### Platforms

1. 디지털 트윈 기반 병원 운영 플랫폼
2. 반도체 제조 디지털 트윈 플랫폼
3. MySafety 작업자 안전 지원 모바일 플랫폼
