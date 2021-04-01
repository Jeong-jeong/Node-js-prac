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
	

	// res.send(`<h1>서버에서 응답한 결과 : ${req.user}</h1>`);
	let person = {
		name: '소녀시대',
		age: 20,
	}

	let personStr = JSON.stringify(person); //문자열로 변환
	res.send(personStr);
});

let server = http.createServer(app).listen(app.get('port'), function() {
	console.log(`express로 웹 서버를 실행함: ${app.get('port')}`);
});