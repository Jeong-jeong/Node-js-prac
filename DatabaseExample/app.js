/* eslint-disable */

// Express 기본 모듈 불러오기
const express = require('express');
const http = require('http');
const path = require('path');

// Express 미들웨어 불러오기
const static = require('serve-static');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

// 에러 핸들러 모듈 사용
const expressErrorHandler = require('express-error-handler');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(expressSession({
	secret: 'my key',
	resave: true,
	saveUninitialized: true
}));

const router = express.Router();
//  Route 들어갈 부분
app.use('/', router);

// 404 에러 페이지 처리
let errorHandler = expressErrorHandler({
	static: {
		'404': './public/404.html'
	}
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );

// Express 서버 시작
const server = http.createServer(app).listen(app.get('port'), () => {
	console.log(`express로 웹 서버 실행: ${app.get('port')}`);
});