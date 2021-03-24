# 🐥 병아리부터 시작하는 node.js 바로 알기
reference: [Do it! Node.js 프로그래밍 by 정재곤](https://edu.goorm.io/lecture/12534/저자-직강-do-it-node-js-프로그래밍)<br>

### `JS의 객체와 함수` -21.03.23(화)

✔️ JS는 **동적타이핑(dynamic type language)** 언어.<br>
+ 값에 따라 변수 type이 달라짐.

✔️ Object
+ 점표기법과 괄호표기법
  + 점표기법 : 유효한 변수 식별자일 경우 (공백X, 숫자시작X, $ or _ 제외한 특수 문자X)<br>
  + 괄호표기법 : 모든 표현식의 평가 결과를 property 키로 사용가능❕<br>
	👉🏻 대괄호표기법은 런타임에 평가되기 때문에 사용자 입력에 따라 갑 변경 가능❕<br>

✔️ Function
+ 함수 선언식과 함수 표현식

✔️ Array
+ for 반복문과 forEach
+ 배열의 내장함수 (push, pop, unshift, shift)
+ delete와 splice, slice

✔️ Call-Back function
+ 함수의 인자로 함수를 사용하는 것
+ 콜백함수는 클로저임
	+ 클로저: 외부함수의 실행이 종료되어도, 외부함수의 범위에 접근할 수 있는 내부함수

### `프로토 타입 객체` -21.03.24(수)

✔️ Prototype
+ 객체의 원형 = 프로토타입 (class 역할)
+ 프로토타입을 만들고 new 연산자를 통해 새 객체를 만들 수 있음.
+ 즉 함수를 붕어빵 틀을 만들기 위한 용도로 함수를 사용하는 것! 🤪
