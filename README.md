# 🐥 병아리부터 시작하는 node.js 바로 알기
reference: [Do it! Node.js 프로그래밍 by 정재곤](https://edu.goorm.io/lecture/12534/저자-직강-do-it-node-js-프로그래밍)<br>

### `JS의 객체와 함수` -21.03.23(화)

✔️ JS는 **동적타이핑(dynamic type language)** 언어.<br>
+ 값에 따라 변수 type이 달라짐.

**✔️ Object**
+ 점표기법과 괄호표기법
  + 점표기법 : 유효한 변수 식별자일 경우 (공백X, 숫자시작X, $ or _ 제외한 특수 문자X)<br>
  + 괄호표기법 : 모든 표현식의 평가 결과를 property 키로 사용가능❕<br>
	👉🏻 대괄호표기법은 런타임에 평가되기 때문에 사용자 입력에 따라 갑 변경 가능❕<br>

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




























