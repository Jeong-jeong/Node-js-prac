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

👾 파일을 읽어 출력해보기
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
+ 미둘웨어, 라우터 기능에 집중하기.
+ express는 http 모듈을 무조건 씀.
+ express 모듈로 반환된 객체를 함수로 실행해 변수에 담으면 express server 객체가 됨.
	+ **.set()로 포트 설정하기**
	+ .set('port', process.env.PORT || 3000)
	+ http.createServer() 인자로 port 설정한 변수를 담으면 express 서버가 만들어짐.
	+ **.get()로 포트 정보 가져오기**
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
	+ http://localhost:3000/users ? name = mike  = ? 뒤에 키와 값은 요청 parameter
		+ & 로 연결
		+ 👉🏻 주소창에 요청 parameter가 바로 보이는 방식: get
		+ req.query. => get 방식으로 전송한 파라미터 확인
		+ req.body. => post 방식으로 전송한 파라미터 확인



+ **router**
	+ 요청 path에 따라 다른 함수가 실행되도록 만듦. 
	+ ex) / path > A 함수, /users > B 함수
















