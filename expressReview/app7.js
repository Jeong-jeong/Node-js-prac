const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	console.log('첫번째 미들웨어 호출됨.');

	let paramName = req.body.name || req.query.name;

	res.send(`<h1>서버에서 응답: ${paramName}</h1>`);
});

const server = http.createServer(app).listen(app.get('port'), () => {
	console.log(`express로 웹 서버 실행함 ${app.get('port')}`)
})