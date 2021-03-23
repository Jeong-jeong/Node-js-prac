// JS의 객체와 함수 이해하기
// 동적타이핑(dynamic type language): 값에 따라 변수 타입이 달라지는 것. 

let name; // 변수 선언

name = 'John' // 초기화

console.log(`name: ${name}`);

// object
let person = {}

person['name'] = '와오'; // 대괄호 표기법

person.age = 30; // 점 표기법

console.log(person);

// function
function sayHi() { // 함수 선언식
	console.log('Hi');
}
sayHi();

let sayHello = function () { // 함수 표현식
	console.log('Hello');
};
sayHello();

let girlGroup = {};

girlGroup.name = 'I-dle';
girlGroup.add = (a, b) =>  a + b; // 객체 속 함수 = 메서드

console.log(`더하기: ${girlGroup.add(20, 20)}`)
console.log(girlGroup);

