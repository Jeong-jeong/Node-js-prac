let express = require('express');
let http = require('http');

let app = express(); // express server 객체

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
	console.log(`첫번째 미들웨어 호출!`)
	
	let userAgent = req.header('User-Agent'); // req 객체에 header 메서드 실행
	req.name = 'Jiyoung';
	let paraName = req.query.name;

	res.send(`<p>서버에서 응답: User-Agent => ${userAgent}</p>
	<p>ParaName => ${paraName}</p>`);
})

http.createServer(app).listen(app.get('port'), function() {
	console.log(`express로 웹 서버를 실행함 ${app.get('port')}`)
})