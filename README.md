# 🐥 병아리부터 시작하는 node.js 바로 알기
reference: [Do it! Node.js 프로그래밍 by 정재곤](https://edu.goorm.io/lecture/12534/저자-직강-do-it-node-js-프로그래밍), [Node.js 교과서 by 제로초](https://book.naver.com/bookdb/book_detail.nhn?bid=16418778)<br>

## <Do it! Node.js 프로그래밍>
### `JS의 객체와 함수` -21.03.23(화)

✔️ JS는 **동적타이핑(dynamic type language)** 언어.<br>
+ 값에 따라 변수 type이 달라짐.

**✔️ Object**
+ 점표기법과 괄호표기법
  + 점표기법 : 유효한 변수 식별자일 경우 (공백X, 숫자시작X, $ or _ 제외한 특수 문자X)<br>
  + 괄호표기법 : 모든 표현식의 평가 결과를 property 키로 사용가능❕<br>
	👉🏻 대괄호표기법은 런타임에 평가되기 때문에 사용자 입력에 따라 값 변경 가능❕<br>

**✔️ Function**
+ 함수 선언식과 함수 표현식

**✔️ Array**
+ for 반복문과 forEach
+ 배열의 내장함수 (push, pop, unshift, shift)
+ delete와 splice, slice

**✔️ Call-Back function**
+ 함수의 인자로 함수를 사용하는 것
+ 콜백함수는 클로저임
	+ 클로저: 외부함수의 실행이 종료되어도, 외부함수의 범위에 접근할 수 있는 내부함수

### `프로토 타입 객체` -21.03.24(수)

**✔️ Prototype**
+ 객체의 원형 = 프로토타입 (class 역할)
+ 프로토타입을 만들고 new 연산자를 통해 새 객체를 만들 수 있음.
+ 즉 함수를 붕어빵 틀을 만들기 위한 용도로 함수를 사용하는 것! 🤪

### `노드의 기본 기능 알아보기` -21.03.25(목)

👾 주소 문자열 분리

+ 형식: https:// (IP) / 요청 path ? 요청 parameter (이름 = 값)
	+ 요청 parameter 사이사이는 & 로 연결됨.
	+ 이중 검색어는 query = **값**

✔️ **url 모듈**을 require로 불러와 변수에 할당.(객체형태)
+ 객체.parse('주소') 실행하면 문자열을 객체로 리턴해줌.
+ format('변환된 객체')는 원래 문자열로 변환.

✔️ **querystring 모듈**을 require로 불러와 변수에 할당.(객체형태)
+ parse('이미 한번 parse된 주소')를 넣으면 다시 parse해줌.

👾 이벤트
+ 노드의 객체는 EventEmitter를 상속받아 객체의 on(), emit() 메소드를 사용 가능.
+ UI 적 이벤트 아님.

**✔️ EventEmitter**
+ A 모듈에서 B 모듈로 데이터를 전달하고 싶을 때 사용.
+ emit()
	+ 이벤트를 보냄
+ on()
	+ 이벤트를 받음

### `노드의 기본 기능 알아보기2` -21.03.29(월)

👾 파일을 읽어 출력해보기<br>
**✔️ fs 모듈**을 require로 불러와 변수에 할당.
+ fs.readFileSync() : file을 다 읽을 때까지 대기 (동기식)
+ fs.readFile() : file을 다 읽을 때까지 대기하지 않고, 다 읽으면 콜백함수 실행 (비동기식)

👾 파일을 만들고 쓰기
+ fs.writeFile('경로', '내용', 콜백함수) 를 통해 파일 쓰기 가능

👾 파일을 직접 열고 닫으면서 읽거나 쓰기
+ open(path, flags, [, mode][, callback])
	+ mode: w, r 로 읽거나 쓰기 권한 부여
+ read (fd, buffer, offset(index), length, position [, callback])
	+ fd: 콜백 함수 파라미터로 전달받은 fd
+ write (fd, buffer, offset, length, position [, callback])
+ close (fd [, callback])

**✔️ Buffer**
+ 데이터를 다른 곳으로 전송할 때 일시적으로 보관하는 메모리 영역

**✔️ stream**
+ 연속된 byte를 받아들이는 통로, 데이터를 쓸 통로

👾 로그 파일 남기기
+ winston 외장 모듈 사용

### `간단한 웹 서버 만들기` -21.03.30(화)
**✔️ http & express**
+ 노드에 기본으로 들어있는 http 모듈을 사용해 웹 서버를 객체로 만듦.
+ 추가로 필요한 것들이 너무 많아 express 사용.

**✔️ server**
+ 클라이언트 요청을 대기하고 있다가 요청을 받아 필요한 응답을 함.
	+ server 객체.listen('포트번호', 서버 실행시 호출되는 함수)
	+ listen() = 서버를 실행하여 대기.
+ 클라이언트와 데이터를 주고 받을 때 port를 사용.
+ server 객체는 eventemitter를 이미 상속해서 emit, on () 사용 가능.


👾 맥에서 ip 확인 방법
+ ipconfig getifaddr en0

**✔️ event**
+ connection = 클라이언트가 접속했을 때 이벤트
	+ connection 이벤트 발행시 내부적으로 socket이 만들어짐.
	+ 클라이언트 socket에서 .address 메서드 등을 통해 ip도 받아오기 가능.
+ request = 클라이언트가 요청 보낼 때 이벤트
	+ 파라미터로 req, res를 받음.
	+ res.writeHead() 응답으로 보낼 헤더를 만듦.
	+ res.write() 로 html 응답 body 데이터 만듦.
	+ res.end() 로 전송
+ 이미지 파일을 읽어서 보내기
	+ fs 모듈을 받아오기
	+ 1번째 파라미터로 파일 이름
	+ 2번째 파라미터로 함수를 전달받아 err객체와 이미지 데이터를 받음.
	+ 다음과정은 위와 같음
+ 마인타입 : 파일을 어떤 형식으로 받아서 보여줄건지 지정하는 것.

👾 다른 웹서버 데이터를 가져와 필요한 곳에 사용 7ㅏ능!
+ http 모듈에 get 메서드가 있음.

### `express로 웹 서버 만들기` -21.04.01(목)
**✔️ express**
+ 미들웨어, 라우터 기능에 집중하기.
+ express는 http 모듈을 무조건 씀.
+ express 모듈로 반환된 객체를 함수로 실행해 변수에 담으면 express server 객체가 됨.
	+ **set()**로 포트 설정하기
	+ .set('port', process.env.PORT || 3000)
	+ http.createServer() 인자로 port 설정한 변수를 담으면 express 서버가 만들어짐.
	+ **get()**로 포트 정보 가져오기
	+ .get('port')

👾 클라이언트가 요청을 보낼 때 응답 받기
+ **미들웨어**
	+ 클라이언트 요청을 중간에 가로채서 받음.
	+ 여러개로 등록 가능 => use() 사용
		+ 1번째 인자로 요청 path를 넣을 수도 있음 => '/' 등등
		+ 인자로 req, res, next를 받음. => use(function (req, res, next) {})
	+ next()로 다음 미들웨어가 받음
	+ writeHead(), end() 할 필요없이 **res.send()** 로 처리가능
		+ send () 인자로 객체를 받으면 JSON 포맷으로 render되지만 우리가 명시적으로 문자열로 변환하는게 오류 확률이 적다!🔥
	+ **res.redirect()**
		+ 우리가 만든 웹 서버 안에 다른 요청 path로 연결시킬 수 있다!!! => 로그인 유도 기능 등등

+ **요청 path와 요청 parameter**
	+ http://localhost:3000 = ip와 port 번호
	+ http://localhost:3000/users = 특정 경로 = 요청 path
	+ http://localhost:3000/users?name=mike  = ? 뒤에 키와 값은 요청 parameter
		+ & 로 연결
		+ 👉🏻 주소창에 요청 parameter가 바로 보이는 방식: get
		+ req.query. => get 방식으로 전송한 파라미터 확인
		+ req.body. => post 방식으로 전송한 파라미터 확인



+ **router**
	+ 요청 path에 따라 다른 함수가 실행되도록 만듦. 
	+ ex) / path > A 함수, /users > B 함수


### `미들웨어 사용하기` -21.04.02(금)
👾 미들웨어<br>
우리가 일일이 만들지 않고, 남들이 만들어놓은 미들웨어들을 사용해보자<br>
+ **static 미들웨어**
	+ require('serve-static')
	+ 특정 폴더를 오픈하고 싶을 경우
	+ 웹 브라우저나 클라이언트가 웹 서버의 파일들을 아무거나 가져가면 안되기 때문에<br>
	특정한 폴더만 열어주는 역할을 한다.
		+ path.join()으로 경로 설정
		+ path는 외장모듈이라 require 해줘야 함.
		+ 1번째 인자 👉🏻__dirname: 현재 파일이 실행되는 폴더의 path를 의미.
		+ 2번째 인자 👉🏻 '폴더 이름' : 노출을 허용할 폴더명
		+ 현재 폴더의 상대경로를 정확히 표현하고 싶다면 use()의 1번째 인자로 경로를 넣어줌.
			+ app.use('폴더경로', static(path.join(__dirname, '폴더이름'')))
+ **body parser**
	+ post 방식 요청을 받을 때는 bodyParser 외장 모듈을 사용해야 함. 설치 필요
	+ app.use(bodyParser.urlencoded({extended: false}))
	+ app.use(bodyParser.json());
	+ post 방식은 header에 바로 정보를 주는게 아니라 바디안에 넣기 때문에 bodyParser가 필요한 것.
	+ req.body.name || req.query.name 👉🏻 post 방식이 아니면 get 방식으로 받아라
+ **postman**
	+ post 방식으로 요청할 때 사용하는 테스트 툴


### `요청 라우팅하기` -21.04.05(월)
👾 Router<br>
각각의 요청 path 별로 다른 처리를 할 수 있게 함.<br>
+ let router = express.Router() 
+ app.use('/', router) 미들웨어로 등록
+ 위 두 코드 사이에 router 사용
	+ router.route(요청 path).post(function (req, res) {})<br>
	👉🏻  미들웨어처럼 모든 걸 받는게 아니라 요청 path로 들어온 req만 받음
+ **url parameter**
	+ 요청 path에 parameter를 넣는 형식
	+ let paramName = req.params.name; 👉🏻 req 안에 params라는 객체 안에 들어감
	+ 방법:
		+ 요청시: action="/process/login/mike"
		+ 응답시: router.route('/process/login/:name').post( (req, res)=> {
👾 오류 텍스트 보여주기
+ app.all('*', (req, res) => {
	res.status(404).send(화면에 표시할 내용)
})
	+ all() : 모든 요청에 대해 콜백 함수를 처리하겠다~
	+ status(404) : 문서를 찾을 수 없음
	+ status(200) : 정상

+ **express-error-hander** 미들웨어로 오류 페이지 보내기
+ let errHandler = require('express-error-hander');
+ let eH = errHandler({
	static: {
		'404': './public/404.html'
	}
});
+ app.use(errHadler.httpError(404));
+ app.use(eH);


### `쿠키와 세션 관리하기` -21.04.08(목)
👾 쿠키와 세션<br>
**✔️쿠키**<br>
+ 클라이언트 웹 브라우저에 저장되는 정보.
+ 사용방법:
	+ cookie-parser 미들웨어 사용
	+ let cookieParser = require('cookie-parser');
	+ cookie-parser 설정: app.use(cookieParser());
	+ res 객체의 cookie() 👉🏻 웹 브라우저에 이 내용을 저장해줘!
		+ ex) res.cookie(user, {내용}) 👉🏻 개발자도구 application Cookies 부분에 user 키 값으로 저장되어 있음!
	+ req 객체의 cookies로 설정된 쿠키 정보 확인
	+ redirect() : 다른 path로 옮김

**✔️세션**<br>
+ 웹 서버에 저장되는 정보
+ 로그인, 로그아웃 등을 위해 사용.
+ 세션은 쿠키를 같이 사용하기 때문에 cookie-parser가 필요.
	+ Cookies로 들어가보면 connect.sid로 세션이 만들어짐.
+ let expressSession = require('express-session');

+ 로그인하면 세션이 만들어지고, 로그아웃하면 세션이 삭제되도록 만들어보자!
	+ 개요: 세션 정보가 있으면 상품 페이지로, 없으면 로그인 유도
	+ 로그인 성공하면 상품 페이지로 다시 넘겨줌.
	+ 로그아웃을 하면 세션의 user 정보를 없애서 다시 상품페이지로 들어가면 로그인 페이지로 유도
		+ req 객체의 session으로 설정된 세션 정보 확인
		+ if (req.session.user) {redirect(path)} 👉🏻 다른 곳으로 유도
		+ 로그아웃시 req.session.destroy() 로 세션 정보 삭제
🔥 사실 로그인, 로그아웃 검증은 **passport**가 알아서 해줌. (나중에 배움)<br>


### `파일 업로드 기능 만들기` -21.04.10(토)
👾 파일 업로드
+ 파일 업로드시 **POST** 방식으로 요청해야 함
	+ body-parser 미들웨어 사용 필요 
	+ fs, cors 모듈도 사용

+ 파일 업로드용 미들웨어
	+ <code>let multer = require('multer')</code>
	+ <code>let fs = require('fs')</code>

+ 클라이언트에서 ajax로 요청 시 CORS(다중 서버 접속) 지원
	+ <code>let cors = require('cors')</code>
	+ 서버쪽에서 어떤 정보를 option으로 주면 브라우저가 그렇게 접속한 것을 허용~.
	+ ex) 다른 ip를 가진 곳에서 웹 서버에 접속해 정보를 가져가겠다 할 때 cors 사용.

+ 파일을 업로드 하면 어디에 저장되게 할 것임?
	+ diskStorage({}) 엔진
		+ post로 전송된 파일의 저장경로와 파일명 등을 처리.

+ html 파일에 form 속성으로 <code>enctype='multipart/form-data'</code> 필요.
	+ 파일을 업로드할 때 multipart 데이터 형식으로 보내기 때문.

+ multer에 의해 파일이 업로드되면 req.files 객체안에 들어감.


### ⭐️ `웹서버 관련 요약` - 21.04.10(토)
👾 웹 서버
+ 웹 서버가 웹 브라우저로부터 요청(req)을 받아 응답(res)을 줌.
+ express로 처리.

👾 응답 처리 방법
+ 1. 미들웨어 👉🏻 모든 요청 처리
+ 2. 라우터 👉🏻 요청 path에 따라 분기
+ 3. 클라이언트가 보내온 데이터를 요청 파라미터로 받아서 처리

👾 쿠키, 세션
+ 로그인 등의 정보를 저장. 상태 유지

👾 파일 업로드


## <Node.js 교과서 개정 2판>
### ⭐️ `프런트앤드 자바스크립트` - 21.05.20(목)
👾 AJAX
+ 페이지 이동없이 서버에 요청을 보내고 응답을 받는 기술.
+ AJAX 요청 방법: axios 라이브러리 사용 예정
	+ axios.get, post => 내부에 new Promise가 들어있어<br>
then, catch, async, await 사용 가능.
	+ axios.post는 두번째 인수로 데이터를 넣어 보냄!.

👾 FormData
+ <code>const formData = new FormData()</code>
+ append 메서드로 키 -값 형식의 데이터 저장.
+ has, get, getAll, delete, set

👾 AJAX 요청시 주소에 한글이 있는 경우
+ <code>encodeURIComponent</code> 사용
	+ 한글 주소 부분만 해당 메서드로 감싸기
	+ 받는 쪽에선 <code>decodeURIComponent()</code>로 복구

👾 data attribute & dataset
+ 서버에서 보내준 데이터를 보관하고 싶을 때 사용
	+ html 태그 속성: data-
	+ dataset으로 확인

### ⭐️ `노드 기능` - 21.05.28(금)
👾 노드의 콘솔 기능 REPL (Read, Eval, Print, Loop)
+ 노드의 콘솔은 코드를 읽고, 해석하고, 결과를 출력하고, 종료할 때 까지 반복한다.
+ 콘솔에서 REPL로 들어가는 명령어 <code>node</code>

👾 모듈로 만들기
+ 모듈: 특정한 기능을 하는 함수, 변수들의 집합
	+ 모듈로 만들어두면 여러 프로그램에 해당 모듈을 재사용 가능.
	+ 방법: <code>module.exports</code>에 담기
		+ 객체 뿐만 아니라 함수, 변수도 대입 가능.

+ ES2015 모듈 스타일
	+ 방법: <code>import</code>, <code>export default</code>
	+ 파일 확장자를 js로 하며 ES2015 모듈 사용 방법 :
		+ package.json에 <code>type: 'module'</code> 속성 넣기.

👾 노드 내장 객체
+ global 객체(전역객체) = 브라우저의 window 객체
	+ 생략 가능 ex) global.require 👉🏻 require, global.console 👉🏻 console
	+ window를 사용하지 않는 이유 : DOM이나 BOM이 없으므로
	+ global 속성에 값을 넣어 파일 간 공유 가능. (권장하지 않음)
	
+ global.console
	+ <code>console.time & console.timeEnd</code>
		+ console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 실행시간 측정
	+ <code>console.table(배열)</code>
		+ 배열 요소로 객체 리터럴을 넣으면 객체 속성들이 '테이블 형식'으로 표현됨.
	+ <code>console.dir(객체, 옵션)</code>
		+ 객체를 콘솔에 표시할 때 사용.
		+ 옵션 colors: true로 하면 콘솔에 색이 추가되어 보기 편해짐.
		+ 옵션 depth: 객체를 몇 단계까지 보여줄지 결정. 기본값 > 2
	+ <code>console.trace(레이블)</code>
		+ 에러 위치 추적. 보통 알려주기 때문에 잘 사용하지 않음.
	+ ⭐️ __filename, __dirname
		+ 현재 파일의 경로나 파일명을 알기 위해 사용.
		+ <code>console.log(__filename)</code>
			+ 실행시 현재 파일 경로의 파일명까지 나옴.
		+ <code>console.log(__dirname)</code>
			+ 실행시 현재 파일 경로까지 나옴.
	+ module, exports, require
		+ 🧐 exports
			+ 모듈을 만들 때 module.exports 말고도 그냥 exports 객체로도 만들 수 있음.
			+ module.exports와 exports는 같은 객체를 참조함.
				+ <code>console.log(module.exports === exports)</code>
			+ ❌ 단 객체만 사용할 수 있음.
		+ 🧐 require
			+ require === 함수, 함수 === 객체, 따라서 require === 객체
			+ <code>require.cache</code>
				+ 한번 require한 파일은 require.cache에 다 저장됨.
			+ <code>require.main</code>
				+ 노드 실행 시 첫 모듈을 가리킴.
				+ 현재 파일이 첫 모듈인지 아는 방법: <code>require.main === module</code>
	+ node에서의 this
		+ 최상위 스코프에 존재하는 <code>this === module.exports(exports 객체)</code>
		+ 함수 선언부 내부의 <code>this === global 객체</code>
	+ process
		+ 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있음.
			+ 🧐 process.env
			+ 시스템 환경변수
			+ 서비스의 중요한 키를 저장하는 공간으로도 사용됨. ex) 비밀번호 등
				+ <code>process.env.SECRET_ID</code>
				+ <code>process.env.SECRET_CODE</code>
			+ 🧐 process.nextTick(콜백)
			+ microtask = process.nextTick , Promise
				+ 이벤트루프가 다른 콜백함수보다 nextTick의 콜백 함수를 우선처리하도록 함.
				+ promise 또한 다른 콜백보다 우선시됨.
			+ 🧐 process.exit(코드)
				+ 실행 중인 노드 프로세스 종료. 수동으로 노드를 멈추게 하기 위해 사용.


### ⭐️ `노드 기능 - 노드 내장 모듈` - 21.06.02(수)
+ os 모듈
	+ 운영체제 정보
	+ 주로 컴퓨터 내부 자원에 빈번하게 접근하는 경우 사용.
	+ 운영체제 별로 다른 서비스를 제공하고 싶을 때.
+ path 모듈
	+ 폴더, 파일 경로를 쉽게 조작
	+ 운영체제 별로 경로 구분자가 다르기 때문에 사용
	+ 파일 경로에서 파일명/ 확장자만 따로 떼어주는 기능도 있음.
+ url 모듈
	+ 인터넷 주소 쉽게 조작
	+ <code>url.parse(주소)</code> : 주소분해
	+ <code>url.format(객체)</code> : 분해된 주소 조립
	+ <code>searchParams</code>
		+ new URL로 myURL이라는 주소 객체를 만들면 그 안에 searchParams 객체가 있음.
		+ search 부분을 조작하는 다양한 메서드 지원.
+ querystring 모듈
	+ WHATWG 방식의 url 대신 기존 노드의 url을 사용시 search 부분 조작 모듈
	+ <code>querystring.parse(query)</code> : url의 query 부분을 JS 객체로 분해
	+ <code>querystring.stringify(객체)</code> 분해된 query 객체를 문자열로 다시 조립

### ⭐️ `노드 기능 - 노드 내장 모듈` - 21.06.03(목)
+ crypto
	+ 암호화 관련 모듈
	+ 복호화
		+ 암호화된 문자열을 원래대로 되돌리는 것.
	+ 단방향 암호화
		+ 복호화할 수 없는 암호화 방식
		+ 주로 💕해시 기법💕 사용
			+ 문자열을 고정된 길이의 다른 문자열로 바꾸는 방식.
			+ <code>createHash(알고리즘)</code>: 사용할 해시 알고리즘
				+ sha 512 주로 사용
			+ <code>update(문자열)</code>: 변환할 문자열
			+ <code>digest(인코딩)</code>: 인코딩할 알고리즘.
				+ 변환된 문자열 반환.(base64, hex)
				+ base64 : 결과 문자열이 가장 짧음.
		+ 충돌
			+ 다르게 입력된 문자열이 같은 문자열로 반환되는 현상.
			+ 해킹용 컴퓨터가 이를 알아내 해킹.
		+ 💕<code>pbkdf2 알고리즘</code>💕
			+ 기존 문자열 + salt 문자열 * 반복(대략 10만 번)
			+ <code>randomBytes()</code>: 64바이트 길이의 문자열 생성. = salt
				+ randomBytes이므로 실행시마다 결과값 달라짐.
			+ <code>pbkdf2(비밀번호, salt, 반복횟수, 출력바이트, 해시알고리즘)</code>
	+ 양방향 암호화
		+ 복호화 가능, key 필요
		+ <code>createCipheriv(알고리즘, 키, iv)</code>
		+ <code>cipher.update(문자열, 인코딩, 출력 인코딩)</code>
			+ 보통 문자열은 utf8 인코딩
			+ 출력 인코딩은 base64 많이 사용
		+ <code>cipher.final(출력 인코딩)</code> : 암호화 완료
		+ 복호화는 위 과정에 de만 넣으면 됨.

+ util module
	+ 각종 편의 기능을 모아둔 모듈
	+ <code>util.deprecate</code>: 함수가 deprecated 됐음을 알려줌.
		+ 첫번째 인수로 함수를, 두번째 인수로 경고 메세지 넣기.
	+ <code>util.promisify</code> 콜백 패턴을 프로미스 패턴으로 변경
		
+ worker_threads
	+ 노드에서 멀티 스레드 방식으로 작업

+ child_porcess
	+ 노드에서 다른 프로그램을 실행하거라 명령을 수행하고자 할 때 사용.
	+ <code>require('child_process').exec</code>
	+ <code>const process = exec(명령어)</code>
	+ <code>stdout</code> 표준출력(성공)
	+ <code>stderr</code> 표준에러(에러)


### ⭐️ `노드 기능 - 파일 시스템 접근하기` - 21.06.04(금)
+ 👾 fs 모듈
	+ 파일 시스템에 접근하는 모듈 (파일(폴더) 생성, 삭제, 읽기, 쓰기)
	+ 읽기: <code>fs.readFile(경로, 콜백함수)</code>
		+ readFile의 결과물은 Buffer 형식으로 제공되므로 toString으로 변환.
		+ 보통은 프로미스 형식으로 바꿈.
			+ <code>const fs = require('fs').promises</code>
	+ Sync 메서드
		+ 동기방식. 이전 작업 완료 후 다음 작업 진행
		+ ex) <code>fs.readFileSync</code>
	+ 파일을 읽거나 쓰는 두가지 방식
		+ 💕 Buffer: 노드가 파일을 읽을 때 메모리에 파일 크기만큼의 공간을 마련하고, 파일데이터(buffer)를 메모리에 저장후 조작가능하게 함.
			+ <code>Buffer.from(문자열)</code> : 문자열을 버퍼로 변환
			+ <code>Buffer.alloc(바이트)</code> : 빈버퍼 생성
			+ 버퍼의 단점!!
				+ (메모리문제) 파일이 여러개일 수록 메모리에 그만큼의 버퍼를 만들어야 함.
		+ 💕 Stream
			+ 버퍼의 크기를 작게 해 여러번 나눠 보내는 방식
				+ 파일 읽기: <code>createReadStream</code>
				+ 파일 쓰기: <code>createWriteStream</code>
				+ 나눠진 조각: chunk
				+ 스트림끼리 연결하는 것: 파이핑하다
				+ 동영상 같은 큰 파일 전송시 스트림을 사용함.


### ⭐️ `노드 기능 - 기타 fs 메서드 알아보기` - 21.06.05(토)
+ 👾 fs 모듈 - 생성
	+ <code>fs.access(경로, 옵션, 콜백)</code>
		+ 폴더 / 파일에 접근 가능한 지 체크.
		+ 옵션
			+ <code>F_OK</code>: 파일 존재 여부
			+ <code>R_OK</code>: 읽기 권한 여부
			+ <code>W_OK</code>: 쓰기 권한 여부
			+ 파일 / 폴더 권한이 업다면 에러 발생 : 'ENOENT'
	+ <code>fs.mkdir(경로, 콜백)</code>
		+ 폴더 만드는 메서드.
		+ 이미 폴더가 있다면 에러 발생하므로 access 메서드로 우선 확인.
	+ <code>fs.open(경로, 옵션, 콜백)</code>
		+ 파일의 아이디(fd 변수)를 가져오는 메서드.
		+ 파일이 없다면 경로에 파일 생성 후 그 아이디를 가져옴.
		+ 가져온 아이디로 <code>fs.read</code>, <code>fs.write</code>로 읽거나 쓸 수 있음.
		+ 두번째 인수로 w(쓰기), r(읽기), a(추가) 설정.
	+ <code>fs.rename(경로, 옵션, 콜백)</code>
		+ 파일 이름 바꾸는 메서드.

+ 👾 fs 모듈 - 삭제
+ <code>fs.readdir(경로, 콜백)</code>
	+ 폴더 안의 내용물 확인. 
+ <code>fs.unlink(경로, 콜백)</code>
	+ 파일 삭제.
	+ 파일이 없다면 에러 발생
+ <code>fs.rmdir(경로, 콜백)</code>
	+ 폴더 삭제.
	+ 폴더 안에 파일이 있다면 에러 발생하므로, 먼저 내부 파일을 모두 지워야 함.
	
+	<code></code>
+ 👾 fs 모듈 - 복사
	+	<code>fs.copyFile(복사할 파일, 복사될 경로, 콜백)</code>

+ 👾 fs 모듈 - 변경 사항 감시
	+	<code></code>


### ⭐️ `노드 기능 - 기타 fs 메서드 알아보기` - 21.06.06(일)
+ 👾 스레드풀
	+ 미리 생성해 놓은 스레드를 모아둔 묶음.
	+ 작업을 동시에 처리.
	+ 스레드풀 개수 제한: 터미널에 <code>UV_THREADPOOL_SIZE = 숫자</code> 입력.

+ 👾 event
	+	<code>on(이벤트명, 콜백)</code>
		+ 이벤트명과 발생 시 콜백 연결. (이벤트 리스닝)
	+	<code>addListener(이벤트명, 콜백)</code> 
		+ on과 동일
	+	<code>emit(이벤트명)</code>
		+ 이벤트 호출
	+	<code>once(이벤트명, 콜백)</code>
		+ 한 번만 실행되는 이벤트.
	+	<code>removeAllListeners(이벤트명)</code>
		+ 이벤트에 연결된 모든 이벤트 리스너 제거
	+	<code>removeListener(이벤트명, 리스너)</code>
		+ 이벤트에 연결된 리스너를 하나씩 제거
	+	<code>off(이벤트명, 콜백)</code>
		+ <code>removeListener</code>와 동일
	+	<code>listenerCount(이벤트명)</code>
		+ 현재 리스너가 몇 개 연결됐는지 확인.
	+	<code></code>
		+ 



### ⭐️ `노드 기능 - 예외 처리하기` - 21.06.07(월)
+ 노드의 메인 스레드는 한 개이므로 예외 처리를 잘 해야 한다.
	+ 예외: 처리하지 못한 에러
	+ 예외 처리: 에러 로그가 기록되더라도 작업이 멈추지 않고 진행되도록 처리.

+ 👾 <code>try / catch</code> 사용
	+ 에러가 발생할 것 같은 부분에 사용하면 작업이 멈추지 않음.
	+ throw를 하는 경우, 반드시 try/ catch문을 사용해야 함.
		+ 안그럼 노드 프로세스가 멈춤.

+ 👾 노드 내장 모듈의 에러
	+ 노드 내장 모듈의 에러는 실행 중인 프로세스를 멈추지 않음.
	+ 에러 로그를 기록해두고 나중에 원인 찾기.

+ 👾 Promise의 에러
	+ 프로미스의 에러는 catch하지 않아도 알아서 처리되나, 노드 버전에 따라 다를 수 있어 <code>catch</code>를 붙이는 걸 권장.

+ 👾 <code>on('uncaughtException', 콜백)</code>
	+ uncaughtException 이벤트 리스너 덕분에 에러가 발생해도 멈추지 않음.
	+ try / catch로 처리하지 않았지만 멈추지 않음.
	+ ❌ 이 이벤트는 최후의 수단으로 사용하기.
		+ 노드가 이 이벤트 발생 후 다음 동작이 제대로 동작하는지 보증하기 않음!!
	+ 단순 에러 기록 용도로 사용.
	+ 에러 기록 후 <code>process.exit()</code>로 프로세스 종료하기.



### ⭐️ `http 모듈로 서버 만들기` - 21.06.09(수)
+ 클라이언트: 요청(request)을 보냄
+ 서버: 요청을 읽고 처리 후, 응답(response).
	+ 따라서 서버는 요청을 받는 부분, 응답을 받는 부분도 있어야 함.
	+ 그걸 이벤트리스너로 등록함!!
	+ 이해된당!!!!

+ 👾 http 모듈
	+ <code>createServer((req, res) => )</code>
	+ 요청이 들어올 때마다 콜백함수가 실행되므로, 응답을 적으면 됨.
		+ res 객체
		+ <code>res.writeHead(상태코드, 응답 정보)</code>: 응답에 대한 헤더 정보 기록
		+ <code>res.write</code>: 클라이언트로 보낼 바디 데이터
		+ <code>res.end</code>: 응답 종료
			+ 인수가 있다면 그 데이터를 보내고 종료.
	+ <code>.listen(포트번호, 콜백)</code>
		+ 포트에서 요청이 오기를 대기함
		+ 'listening' 이벤트 리스너 형태도 가능.

+ localhost & port
	+ localhost(127.0.01): 현재 컴퓨터의 내부 주소
	+ 배포 시에는 80(HTTP), 443(HTTPS) 포트를 사용하기.
	+ 리눅스, 맥에선 1024번 이하 포트 연결 시 관리자 권한 필요.
		+ ex) sudo node server1...

+ 포트 충돌
	+ Error: listen EADDRINUSE ::: 포트번호

+ 	http 상태코드
	+ 2**: 성공
		+ 200: 성공, 201: 작성됨
	+ 3**: 리다이렉션 (다른 페이지로 이동)
		+ 301: 영구이동, 302: 임시이동, 304: 수정되지 않음 (캐시 사용)
	+ 4**: 요청 오류
		+ 400: 잘못된 요청, 401: 권한 없음, 403: 금지됨, 404: 찾을 수 없음
	+ 5**: 서버 오류
		+ 500: 내부 서버 오류, 502: 불량 게이트웨이, 503: 서비스를 이용할 수 없음.
		


### ⭐️ `http 모듈로 서버 만들기 - REST * 라우팅` - 21.06.10(목)
+ 👾 REST (REpresentational State Transfer)
	+ 주소를 정하는 규칙
	+ 자원: 서버가 행할 수 있는 모든 것.
	+ HTTP 요청 메서드(GET, POST, PUT, PATCH, DELETE, OPTIONS)
		+ GET: 서버 자원을 가져올 때
		+ POST: 서버에 자원을 새로 등록할 때 / 애매할 때
		+ PUT: 서버 자원을 아예 치환할 때
		+ PATCH: 서버 자원을 일부 수정할 때
		+ DELETE: 서버 자원을 삭제할 때
	+ RESTful한 웹 서버
		+ REST 방식대로 서버 주소를 체계적으로 정리했음을 의미.

+ HTTP 프로토콜
	+ 언어에 상관없이 모든 서버와 클라이언트 간의 약속
	




	





































