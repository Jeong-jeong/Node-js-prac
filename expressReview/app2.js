const express = require('express');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
	console.log('첫번째 미들웨어 호출됨.');

	res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
	res.end('<h1>server에서 응답한 결과임.</h1>');
});

const server = http.createServer(app).listen(app.get('port'), () => {
	console.log(`express로 웹 서버 실행함 ${app.get('port')}`)
})