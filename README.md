# 조윤호 개발자 포트폴리오

3D 웹 화면, 백엔드 API, RAG 검색 실험, 업무 자동화 경험을 정리한 단일 페이지 포트폴리오입니다.

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

현재 GitHub, Email, Blog/Notion, 이력서 다운로드 링크는 `TODO`로 표시되어 있습니다.
