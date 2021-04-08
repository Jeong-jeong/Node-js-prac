


let express = require('express');
let http = require('http');
let static = require('serve-static');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

let app = express(); // express server 객체

app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser()); // cookieParser 미들웨어 등록


let router = express.Router(); //⭐️ 여기부터

router.route('/process/setUserCookie').get((req, res) => {
	console.log('/process/setUserCookie 라우팅 함수 호출됨')

	res.cookie('user', { // 웹 브라우저에 이 내용을 저장해주세요
		id: 'mike',
		name: '마이크',
		authorized: true,
	});
	res.redirect('/process/showCookie'); // 다른 path로 옮김
});

router.route('/process/showCookie').get( (req, res) => {
	console.log('/process/showCookie 라우팅 함수 호출됨')

	res.send(req.cookies); // res객체 안의 내용이 req 객체 cookies 안에 들어가있음.
} ); // 설정된 쿠키 정보를 봄

router.route('/process/login/:name').post( (req, res)=> {
	console.log(`/process/login/:name routing 함수에서 받음.`);

	
	let paramId = req.body.id || req.query.id;
	let paramPw = req.body.pw || req.query.pw;

	res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>서버에서 로그인 응답</h1>');
	res.write(`<div><p>${paramId}</p></div>`);
	res.write(`<div><p>${paramPw}</p></div>`);
	res.end();
});

app.use('/', router); //⭐ 여기까지 router 등록

app.all('*', (req, res) => { // router 등록한거 외에 이 함수를 보여주겠다!
	res.status(404).send('<h1>요청하신 페이지는 없습니다 ^_^</h1>')
})

app.set('port', process.env.PORT || 3000);
app.use(static(path.join(__dirname, 'public'))); // static 미들웨어 사용하기
// __dirname: app6.js 파일이 실행되는 폴더의 path를 의미함.
// 'public' 폴더 아래 있는 public이란 폴더의 path.



http.createServer(app).listen(app.get('port'), function() {
	console.log(`express로 웹 서버를 실행함 ${app.get('port')}`)
})