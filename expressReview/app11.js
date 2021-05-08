const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');




const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());

const router = express.Router();

router.route('/process/setUserCookie').get((req, res) => {
	console.log('/process/setUserCookie 라우팅 함수 호출됨.')

	res.cookie('user', {
		id: 'mike',
		name: '소녀시대',
		authorized: true
	});

	res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get((req, res) => {
	console.log('/process/showCookie 라우팅 함수 소출됨.');

	res.send(req.cookies);
});
  
app.use('/', router);

app.all('*', (req, res) => {
	res.status(404).send('<h1>요청하신 페이지를 찾을 수 없습니다 ㅜㅅㅜ</h1>')
})


const server = http.createServer(app).listen(app.get('port'), () => {
	console.log(`express로 웹 서버 실행!: ${app.get('port')}`)
})