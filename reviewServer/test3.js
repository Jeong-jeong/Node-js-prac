let http = require('http');
let fs = require('fs');

let server = http.createServer();

let port = 3000;
let host = '192.168.43.2';

server.listen(port, host, '50000', () => {
	console.log(`웹서버 실행 at ${port}, from ${host}`);
});

server.on('connection', (socket) => {
	console.log(`클라이언트 socket 접속`);
});

server.on('request', (req, res) => {
	console.log(`클라이언트에서 요청을 보냄`);

	let filename = 'universe.jpeg';
	fs.readFile(filename, (err, data) => {
	res.writeHead(200, {'Content-Type': 'image/jpeg'}); // 응답할 때 클라이언트로 헤더 정보 전송
	res.write(data);
	res.end();
	});

	
})