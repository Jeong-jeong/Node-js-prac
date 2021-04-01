let express = require('express');
let http = require('http');

let app = express(); // express모듈의 객체를 함수로 실행.
// app가 express 서버 객체가 됨.

app.set('port', process.env.PORT || 3000); // 웹서버가 실행될 때 포트를 어디로 할거임?
// port라는 시스템 환경변수 말고 그냥 환경변수 PORT 정보가 있으면 그걸로 실행 아니면 3000

let server = http.createServer(app).listen(app.get('port'), function() {
	console.log(`express로 웹 서버 실행: ${app.get('port')}`)
});

