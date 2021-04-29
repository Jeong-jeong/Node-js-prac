const express = require('express');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3000); // port 설정

const server = http.createServer(app).listen(app.get('port'), () => {
	console.log(`express로 웹 서버 실행함: ${app.get('port')}`)
});
