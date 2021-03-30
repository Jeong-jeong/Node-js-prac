let http = require('http');
let fs = require('fs'); // filesystem 모듈
const { file } = require('nconf');

let server = http.createServer();

let host = '172.30.1.43';
let port = 3000;
server.listen(port, host, 50000, () => {
	console.log(`웹서버 실행됨`)
});

server.on('connection', (socket) => { // connection 이벤트 발생시 함수 실행
	console.log(`클라이언트 socket이 접속함.`);
});

server.on('request', (req, res)=> { // request 이벤트 발생 시 req, res 파라미터로 받음.
	// req = 요청 객체, res = 응답 객체
	console.log(`client 요청이 들어옴`)

	// 파일을 '읽어서' 보내기
	let fileName = 'thunder.jpg';
	fs.readFile(fileName, (err, data) => { // err객체와 data(파일의 내용)이 파라미터로 전달
		res.writeHead(200, {'Content-Type': 'image/jpg' }); // 마인 타입
		// 200은 정상이란 뜻
		res.write(data); // body 부분
		res.end();
	}); //비동기 방식

});

