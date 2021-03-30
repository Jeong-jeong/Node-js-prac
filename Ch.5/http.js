let http = require('http');
// 서버 기능 담당!
// 서버

let server = http.createServer(); // web server 객체 리턴

// 클라이언트 요청 대기 ('포트번호 , 서버 정상 실행시 호출되는 함수)
let host = '172.30.1.43';
let port = 3000;
server.listen(port, host, 50000, () => {
	console.log(`${port} 웹서버가 실행되었습니다. 
host: ${host} 
최대접속자수 : 50000`)
});


