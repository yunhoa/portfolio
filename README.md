# 조윤호 개발자 포트폴리오

Java/Spring 기반 백엔드, API 연동, 운영 시스템 유지보수, 동영상 Range 처리와 JMeter 부하테스트 경험을 중심으로 정리한 포트폴리오입니다.

배포 URL: https://yunhoa.github.io/portfolio/

## 기술 스택

- React 19
- Vite 5
- JavaScript
- Tailwind CSS

## 실행 방법

```bash
npm install
npm run dev
```

기본 로컬 주소는 `http://localhost:5173`입니다.

## 빌드

```bash
npm run build
```

빌드 결과물은 `dist/`에 생성됩니다.

PowerShell 실행 정책 때문에 `npm.ps1`이 막히면 아래처럼 실행합니다.

```powershell
npm.cmd run build
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 실행되고 GitHub Pages로 배포됩니다.

```text
main push
-> .github/workflows/deploy.yml
-> npm ci
-> npm run build
-> GitHub Pages deploy
```

## 주요 수정 파일

- `src/components/Hero.jsx`: 첫 화면 문구, 기본 정보, 경력 한 줄
- `src/components/About.jsx`: 개발 방식 소개
- `src/components/Projects.jsx`: 프로젝트 정렬 및 상세 표시 방식
- `src/components/Contact.jsx`: 연락 섹션 문구
- `src/data/projects.js`: 프로젝트 내용
- `src/data/skills.js`: 기술 및 경험 요약
- `src/data/visualWorks.js`: 3D/시각화 프로젝트 데이터

## 현재 포트폴리오 방향

이번 개편에서는 단순히 사용 기술을 많이 나열하기보다 아래 흐름이 보이도록 정리했습니다.

- SI 프로젝트에서 다양한 시스템을 빠르게 이해하고 기능을 개발한 경험
- Spring 백엔드, MyBatis/SQL, REST API, 운영 시스템 유지보수 경험
- 한화오션 안전혁신과제의 모바일 웹뷰, Spring 레거시 백엔드, 동영상 Range 처리, JMeter 부하테스트
- 3D 산단 디지털 플랫폼의 추가 API, 통계 화면, 폐쇄망 Google Analytics Data API 연동
- MySafety 모바일 앱의 Android/iOS 기능 개발 및 스토어 배포
- 개인 프로젝트는 문제 해결 포인트보다 만든 이유와 구현한 기능 중심으로 정리

## 문서

로컬 작업 기록과 지원서 문서는 `wiki/` 아래에 보관합니다.

`wiki/`는 `.gitignore`에 포함되어 있어 public 저장소와 GitHub Pages에는 배포하지 않습니다.
