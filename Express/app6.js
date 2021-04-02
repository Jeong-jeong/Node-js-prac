let express = require('express');
let http = require('http');
let static = require('serve-static');
let path = require('path');
let bodyParser = require('body-parser');

let app = express(); // express server 객체

app.set('port', process.env.PORT || 3000);
app.use(static(path.join(__dirname, 'public'))); // static 미들웨어 사용하기
// __dirname: app6.js 파일이 실행되는 폴더의 path를 의미함.
// 'public' 폴더 아래 있는 public이란 폴더의 path.

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	console.log('첫번째 미들웨어 호출!');

	let paramId = req.body.id || req.query.id; // post 방식

	res.send(`<p>서버에서 응답 👉🏻 paramId: ${paramId}</p>`)
})

http.createServer(app).listen(app.get('port'), function() {
	console.log(`express로 웹 서버를 실행함 ${app.get('port')}`)
})