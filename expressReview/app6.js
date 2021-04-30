const express = require('express');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
	console.log('첫번째 미들웨어 호출됨.');

	let userAgent = req.header('User-Agent');
	let paramName = req.query;

	res.send(`${paramName} ${userAgent}`);
});

const server = http.createServer(app).listen(app.get('port'), () => {
	console.log(`express로 웹 서버 실행함 ${app.get('port')}`)
})