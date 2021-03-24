let person1 = {name: '소시', age: 20};
let person2 = {name: '걸스', age: 21};
// 이렇게 안 만들고 붕어빵 틀을 먼저 만들겠다!

function Person (name, age) {
	// 붕어빵 틀 안에 name, age라는 속성이 정의가 됨.
	this.name = name; // 속성에 parameter로 받은 값을 할당
	this.age = age;
}

// Person 함수로 사용도 가능하고
// 붕어빵 틀로써도 사용 가능!

Person.prototype.walk = function(speed) { // Person이란 객체엔 name, age, walk()가 있음
	console.log(`${speed}km 속도로 걸어갑니다.`)
}

console.log(Person);
// Person이란 객체로 봤을 때 prototype이란 속성이 들어있음.

let person3 = new Person ('소녀시대', 20); // new 키워드를 통해 붕어빵 틀 안에 붕어빵 생성!
let person4 = new Person ('걸스데이', 21); // person4라는 객체 생성.

person3.walk(10);



