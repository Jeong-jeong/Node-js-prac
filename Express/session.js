// 세션 정보가 있으면 상품 페이지로, 없으면 로그인 유도
// 로그인 성공하면 상품 페이지로 다시 넘겨줌.
// 로그아웃을 하면 세션의 user 정보를 없애서 다시 상품페이지로 들어가면 로그인 페이지로 유도




let express = require('express');
let http = require('http');
let static = require('serve-static');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let expressSession = require('express-session');

let app = express(); // express server 객체

app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieParser()); // cookieParser 미들웨어 등록
app.use(expressSession({ // expressSession 미들웨어 등록
	// session은 서버에 저장이 되는데 파일 / radis라는 메모리 DB에 저장가능.
	// 저장할 파일을 미리 ? 정보는 나중? / 파일 아예 안만들고 정보 생길 때 같이 만듦? 옵션 설정
	secret: 'my key',
	resave: true,
	saveUninitialized: true,

})); // express



let router = express.Router(); //⭐️ 여기부터

router.route('/process/product').get( (req, res) => {
	console.log('/process/product 라우팅 함수 호출됨.');

	if (req.session.user) { // 로그인이 됐으면
		res.redirect('/public/product.html') // 상품 페이지로 이동해라
	} else { // 로그인이 안됐으면
		res.redirect('/public/login2.html'); // 로그인 페이지로 이동해라
	}
});

// 로그인 path에선 session 정보를 넘겨줘야 함.
router.route('/process/login').post( (req, res) => {
	// post 방식으로 로그인이 요청됐을 때 콜백 함수를 실행해라.
	console.log('/process/login 라우팅 함수 호출됨'); 

	// paramId는 post 방식으로 받는다면 req 객체 안에 body.id에 들어있을 것임.
	let paramId = req.body.id || req.query.id;
	let paramPw = req.body.pw || req.body.pw; 
	console.log(`요청 파라미터: ${paramId}, ${paramPw}`)

	if (req.session.user) {
		console.log('로그인 되어 있음');
		res.redirect('/public/product.html')
	} else {
		req.session.user = { // 로그인 안됐을 경우 세션 정보를 넣어줌
			id: paramId,
			name: '졍쓰',
			authorized: true,	
		};

		res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'})
		res.write('<h1>로그인 성공</h1>');
		res.write(`<p>Id: ${paramId}</p>`);
		res.write(`<br></br><a href='/process/product'>상품 페이지로 이동하기</a>`);
		res.end();
	}
});

router.route('/process/logout').get( (req, res) => {
	console.log('/process/logout 라우팅 함수 호출됨')

	if (req.session.user) {
		console.log('로그아웃 하자');

		req.session.destroy( (err) => {
			if (err) { // 에러가 있다면
				console.log('sesstion 삭제 시 에러발생')
				return;
			}

			console.log('세션 삭제 완료'); // 에러없이 무사히 작동
			res.redirect('/public/login2.html')
		}); // session 안의 정보를 삭제
	} else {
		console.log('로그인 되어있지 않음.');
		res.redirect('/public/login2.html')
	}
});


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