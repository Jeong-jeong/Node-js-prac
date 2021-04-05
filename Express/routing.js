

// let router = express.Router();

// router.route('/process/login').post( (req, res)=> {
// 	console.log(`/process/login routing 함수에서 받음.`);
	
// 	let paramId = req.body.id || req.query.id;
// 	let paramPassword = req.body.password || req.query.password;

// 	res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
// 	res.write('<h1>서버에서 로그인 응답</h1>');
// 	res.write(`<div><p>${paramId}</p></div>`);
// 	res.write(`<div><p>${paramPassword}</p></div>`);
// 	res.end();
// });

// app.use('/', router);


let express = require('express');
let http = require('http');
let static = require('serve-static');
let path = require('path');
let bodyParser = require('body-parser');

let app = express(); // express server 객체

app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


let router = express.Router();

router.route('/process/login').post( (req, res)=> {
	console.log(`/process/login routing 함수에서 받음.`);
	
	let paramId = req.body.id || req.query.id;
	let paramPw = req.body.pw || req.query.pw;

	res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>서버에서 로그인 응답</h1>');
	res.write(`<div><p>${paramId}</p></div>`);
	res.write(`<div><p>${paramPw}</p></div>`);
	res.end();
});

app.use('/', router);

app.set('port', process.env.PORT || 3000);
app.use(static(path.join(__dirname, 'public'))); // static 미들웨어 사용하기
// __dirname: app6.js 파일이 실행되는 폴더의 path를 의미함.
// 'public' 폴더 아래 있는 public이란 폴더의 path.



http.createServer(app).listen(app.get('port'), function() {
	console.log(`express로 웹 서버를 실행함 ${app.get('port')}`)
})