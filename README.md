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








