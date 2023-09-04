# 가벼운 API 구현 연습용 프로젝트

# 넋두리
* 왜 기존 DB 인증 플러그인으로는 접속이 안 될까...

### Cookie 구현 예제
* 진행상황
	* (완료) 브라우저 버튼 클릭 -> GET 요청 -> 서버 응답(쿠키 간다!) -> 브라우저에 저장
	* (진행중) 브라우저에서 GET/POST 요청 with 쿠키 -> 서버 응답(쿠키 받았다!) -> 쿠키에 담긴 정보 활용 -> 브라우저 응답 확인
* Server
	* cors 옵션으로 {origin: [CLIENT URL], credentials: true} 이 들어가야한다.
	* 그냥 app.use(cors()) 만 하면 문자열은 보내지지만 쿠키 세팅이 되질 않는다.
* Client(Browser)
	* axios config 인자에 {withCredentials: true} 가 있어야 한다.