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

const router = express.Router();

router.route('/process/login').post((req, res) => {
	console.log('/process/login 라우팅 함수에서 받음.');

	let paramId = req.body.id || req.query.id;
	let paramPassword = req.body.password || req.query.password;

	res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
	res.write('<h3>서버에서 응답</h3>');
	res.write(`<div><p>${paramId}</p></div>`);
	res.write(`<div><p>${paramPassword}</p></div>`);
	res.end();
});

app.all('*', (req, res) => {
	res.status(404).send('<h1>요청하신 페이지를 찾을 수 없습니다 ㅜㅅㅜ</h1>')
})
  
app.use('/', router);

const server = http.createServer(app).listen(app.get('port'), () => {
	console.log(`express로 웹 서버 실행!: ${app.get('port')}`)
})