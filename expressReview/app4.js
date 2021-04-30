const express = require('express');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
	console.log('첫번째 미들웨어 호출!');

	req.user = 'Jiyoung';

	next();
})

app.use((req, res, next) => {
	console.log('두번째 미들웨어 호출!');

	//res.send(`<h1>server에서 response: ${req.user}</h1>`)
	
	let person = {name: 'Jiyoung', age: 20};
	//res.send(person);
	let personStr = JSON.stringify(person);
	res.send(personStr);
})

const server = http.createServer(app).listen(app.get('port'), () => {
	console.log(`express 웹 서버 실행함 :${app.get('port')}`)
})