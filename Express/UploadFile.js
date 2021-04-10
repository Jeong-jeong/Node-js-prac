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
let multer = require('multer'); 
let fs = require('fs');
let cors = require('cors'); // 다중서버접속
// 페이지 전체를 변경하는게 아닌 일부만 변경할 때 ajax 사용.


let app = express(); // express server 객체

app.use('/public', static(path.join(__dirname, 'public')));
// __dirname: 현재 폴더
// 'public' 폴더 아래 있는 public이란 폴더의 path.

app.use('/uploads', static(path.join(__dirname, 'uploads')));
// uploads된 폴더가 있으면 이 폴더쪽으로 저장됨.

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

app.use(cors()); 

// 파일 업로드 설정
let storage = multer. diskStorage({
	destination: function(req, file, callback) {
		callback(null, 'uploads'); 
		// 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
	},
	filename: function(req, file, callback) {
		// 콜백함수를 통해 전송된 파일 이름 설정
		// callback(null, file.originalname + Date.now()) // upload된 파일은 고유한 정보를 이용해 별도의 파일로 만듦.

		let extension = path.extname(file.originalname); // 확장자만 빼낼 수 있음.
		let basename = path.basename(file.originalname, extension); // 확장자만 뺀 나머지 리턴
		callback(null, basename + Date.now() + extension);

	}
});

let upload = multer({ // multer 기본 설정
	storage,
	limits : {
		files: 10, // 한번에 업로드할 수 있는 최대 사이즈
		fileSize: 1024 * 1024 * 1024 // 한번에 업로드할 수 있는 최대 사이즈
	}
});




let router = express.Router(); //⭐️ 여기부터

router.route('/process/photo').post( upload.array('photo', 1), (req, res)=> { // 배열 형태로 받고 싶으면 Post 첫번째 파라미터로 넣어주면됨.
	console.log('/process/photo 라우팅 함수 호출됨.');

	let files = req.files;
	console.log('==== 업로드된 파일 ====');
	if (files.length > 0) console.dir(files[0]);
	else console.log('파일이 없습니다.');

	let originalname, filename, mimetype, size;

	if (Array.isArray(files)) {
		for (let item of files) {
			originalname = item.originalname;
			filename = item.fieldname;
			mimetype = item.mimetype;
			size = item.size;
		}
	}

	res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
	res.write('<h1>파일 업로드 성공!</h1>');
	res.write(`<p>원본파일 : ${originalname}</p>`);
	res.write(`<p>저장파일 : ${filename}</p>`);
	res.send();
})

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




http.createServer(app).listen(app.get('port'), function() {
	console.log(`express로 웹 서버를 실행함 ${app.get('port')}`)
})