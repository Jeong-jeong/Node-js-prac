const express = require('express');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
	console.log('첫번째 미들웨어 호출됨.');

	res.redirect('http://google.com');
});

const server = http.createServer(app).listen(app.get('port'), () => {
	console.log(`express로 웹 서버 실행함 ${app.get('port')}`)
})