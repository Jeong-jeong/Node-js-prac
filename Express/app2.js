let express = require('express');
let http = require('http');

let app = express(); // express server 객체

app.set('port', process.env.PORT || 3000);

// 미들웨어 등록
app.use(function(req, res, next) { // 
	console.log(`1번째 미들웨어 호출`);

	// 응답을 바로 보내보자
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'}); // header 정보 넣기
	res.end('<h1>server에서 응답한 결과!</h1>'); // 전송
});

let server = http.createServer(app).listen(app.get('port'), function() {
	console.log(`express로 웹 서버를 실행함: ${app.get('port')}`);
});

