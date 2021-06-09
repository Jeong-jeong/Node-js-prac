const http = require('http');

const server = http.createServer((req, res) => { // 요청에 대한 콜백함수
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.write('<h1>Hello Node!</h1>');
	res.end('<p>Hello Server!</p>');
})
server.listen(8080);

// listening 이벤트 리스너
server.on('listening', () => {
	console.log('8080번 포트에서 대기중!');
});
server.on('error', (err) => {
	console.error(err);
});


	