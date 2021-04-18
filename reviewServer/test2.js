let http = require('http');

let server = http.createServer();

let host = '192.168.43.2';
let port = 3000;

server.listen(port, host, '50000', () => {
	console.log(`웹 서버 실행 : at ${port}, from ${host}`)
})

server.on('connection', (socket) => { // 클라이언트가 연결됐을 때
	console.log(`client socket이 접속했음.`)
});

server.on('request', (req, res) => { // 클라이언트에서 요청했을 때
	console.log('client 요청이 들어옴.');
	// console.dir(req); // 어떤 요청을 보냈는지 확인

	res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'}); // 응답할 때 클라이언트로 헤더 정보 전송
	res.write('<h1>웹 서버에서 보낸 응답</h1>');
	res.end();
});

