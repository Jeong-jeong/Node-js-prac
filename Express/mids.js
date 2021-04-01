let express = require('express');
let http = require('http');

let app = express(); // express server 객체

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
	console.log('첫번째 미들웨어 호출!');

	// 1번째 미들웨어에선 응답을 안보내고, 유저 확인만 하고 싶음
	req.user = 'mike'; // req 객체에 user 키를 추가함

	next(); // 첫번째 미들웨어를 떠남

});

app.use(function(req, res, next) {
	console.log('두번째 미들웨어 호출!');
	// 첫번째 미들웨어를 거쳐서 정보가 넘어왔기 때문에 req 객체에 user가 추가되어 있음.


	res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
	res.end(`<h1>서버에서 응답한 결과 : ${req.user}</h1>`);
});

let server = http.createServer(app).listen(app.get('port'), function() {
	console.log(`express로 웹 서버를 실행함: ${app.get('port')}`);
});