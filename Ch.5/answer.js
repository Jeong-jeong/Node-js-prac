let http = require('http');

let server = http.createServer();

let host = '172.30.1.43';
let port = 3000;
server.listen(port, host, 50000, () => {
	console.log(`웹서버 실행됨`)
});

server.on('connection', (socket) => { // connection 이벤트 발생시 함수 실행
	console.log(`클라이언트 socket이 접속함.`);
});``

server.on('request', (req, res)=> { // request 이벤트 발생 시 req, res 파라미터로 받음.
	// req = 요청 객체, res = 응답 객체
	console.log(`client 요청이 들어옴`)

	// 응답 보내기
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8' }); // http 헤더 정보를 client 쪽으로 보냄
	// 200은 정상이란 뜻
	res.write('<h1>웹 서버로부터 받은 응답</h1>');
	res.end(); // end 메서드를 통해 전달
});

