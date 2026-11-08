const fs = require('node:fs');
const path = require('node:path');
const out = path.resolve(__dirname, '../src/assets');
const esc = s => String(s).replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const text = (x,y,s,cls='body',anchor='start') => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${esc(s)}</text>`;
const rect = (x,y,w,h,fill='#fff') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${fill}" stroke="#a9bcb6" stroke-width="1.7"/>`;
const edge = (d,dashed=false,both=false) => `<path d="${d}" fill="none" stroke="#648279" stroke-width="2.2" ${dashed?'stroke-dasharray="8 6"':''} marker-end="url(#arrow)" ${both?'marker-start="url(#start)"':''}/>`;
function box(x,y,w,h,title,lines=[],fill='#f4f7f6') {
  return rect(x,y,w,h,fill)+text(x+20,y+36,title,'heading')+lines.map((s,i)=>text(x+20,y+71+i*29,s)).join('');
}
function table(x,y,w,name,rows) {
  const h=58+rows.length*29;
  return rect(x,y,w,h)+`<path d="M${x} ${y+54}H${x+w}" stroke="#a9bcb6"/>`+text(x+18,y+35,name,'table')+
    rows.map(([key,col,type],i)=>text(x+16,y+80+i*29,key,'key')+text(x+62,y+80+i*29,col,'field')+text(x+w-16,y+80+i*29,type,'type','end')).join('');
}
function svg(title,subtitle,content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(subtitle)}</desc><defs><style>
text{font-family:'Malgun Gothic','Apple SD Gothic Neo',sans-serif;fill:#293b38;letter-spacing:0}.title{font-size:30px;font-weight:700}.heading{font-size:23px;font-weight:700}.body{font-size:21px}.small{font-size:18px;fill:#657873}.table{font:700 23px Consolas,monospace}.field{font:20px Consolas,monospace}.type{font:17px Consolas,monospace;fill:#697c77}.key{font:700 16px Consolas,monospace;fill:#3f7667}
</style><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto"><path d="M1 1L9 5L1 9" fill="none" stroke="#648279" stroke-width="1.5"/></marker><marker id="start" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="9" markerHeight="9" orient="auto"><path d="M9 1L1 5L9 9" fill="none" stroke="#648279" stroke-width="1.5"/></marker></defs><rect width="1600" height="1000" fill="#fff"/>${text(48,58,title,'title')}${text(48,96,subtitle,'small')}${content}</svg>`;
}

const architecture =
  box(50,170,350,440,'사용자 브라우저',[], '#fbfcfb')+
  box(75,255,300,290,'React · Vite',['타임라인 · 항공 일정','전체 일정 · 운영 현황','App.jsx / components','api.js → fetch 호출','화면 상태: React Hooks'])+
  box(590,170,440,590,'Node.js · Express',[], '#fbfcfb')+
  box(620,240,380,160,'REST API',['/api/state · /api/overview','인원·일정 조회 및 저장','외부 데이터 조회 · 상태 점검'])+
  box(620,470,380,140,'동기화 모듈',['sync.js · groupware.js · gcal.js','기동 시 / 매일 06:00 / 수동'])+
  box(620,650,380,80,'DB 접근: pg / 트랜잭션',[])+
  box(1190,170,360,240,'외부 연동',['그룹웨어: 휴가·개인 업무','Google Calendar API','항공·기상 API','HTTP / 브라우저 자동화'])+
  box(1190,510,360,250,'PostgreSQL',['members · segments','gw_vacations','calendar_events · sync_meta','기타 업무·운영 테이블'])+
  box(590,820,440,110,'정적 호스팅',['Vite 빌드 결과: HTML · JS · CSS'])+
  box(435,350,120,130,'/api',['Reverse','Proxy'])+
  edge('M400 420H435')+edge('M555 420H590')+
  text(472,325,'API 요청','small','middle')+
  edge('M1030 315H1190',false,true)+text(1110,290,'외부 조회','small','middle')+
  edge('M1030 625H1190',false,true)+text(1110,601,'pg / SQL','small','middle')+
  edge('M590 875H225V610',false,true)+text(255,850,'화면 요청 / 빌드 파일 응답','small')+
  text(48,975,'기본 배포 구성: 정적 호스팅 + 동일 도메인의 /api 리버스 프록시 · 개발 시 API 주소 분리 가능','small');

const erd =
  table(60,190,410,'members',[['PK','id','text'],['','name','text NN'],['','role','text']])+
  table(650,150,450,'segments',[['PK','id','text'],['REF','user_id','text NN'],['','type','text NN'],['','title','text'],['','start_at','text NN'],['','end_at','text NN'],['','from_loc','text'],['','to_loc','text'],['','location','text'],['','detail','text']])+
  edge('M470 270H650',true)+text(490,244,'1','small')+text(604,244,'0..N','small')+text(500,307,'id = user_id','small')+
  text(1160,192,'일정 조회 인덱스','heading')+text(1160,235,'segments(user_id)','field')+text(1160,271,'segments(start_at)','field')+
  text(60,555,'외부 일정 미러 / 동기화 상태','heading')+
  table(60,590,450,'gw_vacations',[['PK','id','text'],['','name','text NN'],['','start_date','text NN'],['','end_date','text NN'],['','vtype','text'],['','detail','text'],['','synced_at','timestamptz']])+
  table(570,590,460,'calendar_events',[['PK','id','text'],['','calendar_name','text'],['','summary','text'],['','location','text'],['','start_at','text NN'],['','end_at','text'],['','all_day','boolean'],['','synced_at','timestamptz']])+
  table(1090,590,450,'sync_meta',[['PK','source','text'],['','synced_at','timestamptz'],['','ok','boolean'],['','message','text']])+
  text(60,925,'PK 기본 키 · NN NOT NULL · REF 코드상 참조 · 점선은 논리 관계이며 DB FK 제약은 없음','small')+
  text(60,960,'범위: 일정·동기화 핵심 5개 테이블 · 외부 일정은 독립 미러이며 members와의 FK 관계 없음','small');

const sync =
  box(130,135,500,100,'수동 동기화',['POST /api/sync'])+
  box(970,135,500,100,'자동 동기화',['서버 기동 시 · 매일 06:00 KST'])+
  edge('M380 235V265H800V300')+'<path d="M1220 235V265H800" fill="none" stroke="#648279" stroke-width="2.2"/>'+
  box(590,300,420,110,'guardedSync → syncAll',['진행 중이면 같은 Promise 재사용'])+
  edge('M800 410V450H405V490')+
  box(145,490,520,110,'① syncVacations / 그룹웨어',['fetchVacations → 휴가 목록 수집'])+
  box(935,490,520,110,'② syncCalendar / 캘린더',['fetchCalendarEvents → 이벤트 수집'])+
  edge('M405 600V670')+edge('M1195 600V670')+
  box(145,670,520,120,'withTransaction',['기존 휴가 미러 DELETE → INSERT','성공 시 COMMIT / 실패 시 ROLLBACK'])+
  box(935,670,520,120,'withTransaction',['기존 이벤트 미러 DELETE → INSERT','성공 시 COMMIT / 실패 시 ROLLBACK'])+
  edge('M405 790V850')+edge('M1195 790V850')+
  box(145,850,520,95,'gw_vacations',['sync_meta: vacations 상태 기록'])+
  box(935,850,520,95,'calendar_events',['sync_meta: calendar 상태 기록'])+
  edge('M665 900H800V545H935')+
  text(820,647,'① 시도 후','small')+text(820,678,'② 실행','small')+
  text(48,982,'소스별 try/catch · 휴가 동기화 실패에도 캘린더 시도 · GET /api/overview에서 미러와 상태 함께 조회','small');

for (const [name,title,subtitle,body] of [
  ['b2b-service-architecture.svg','B2B 상주 일정 관리 · 서비스 구성','React 프론트 / Express API / PostgreSQL / 외부 연동',architecture],
  ['b2b-schedule-erd.svg','B2B 상주 일정 관리 · 일정 데이터 ERD','server/schema.sql 및 조회·저장 코드 기준',erd],
  ['b2b-sync-flow.svg','B2B 상주 일정 관리 · 외부 일정 동기화','수동 요청과 정기 실행 → 외부 수집 → DB 미러 교체 → 상태 기록',sync],
]) fs.writeFileSync(path.join(out,name),svg(title,subtitle,body));
console.log('Generated 3 B2B diagrams');
