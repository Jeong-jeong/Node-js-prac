// 우리가 직접 event emitter를 상속해서 이벤트를 만들어보자.
let EventEmitter = require('events').EventEmitter; // event라는 모듈에 이벤트이미터라는 객체가 들어있음.
let util = require('util'); // util 모듈을 사용하면 프로토타입 객체를 쉽게 상속하게 만들어줌.

let Calc = function () {
	this.on('stop', function () { // stop 이벤트를 받았을 때 함수 실행!
		console.log(`Calc에 stop 이벤트 전달됨.`);
	});
};

util.inherits(Calc, EventEmitter); // 뒤 파라미터를 부모로 보고 상속해서 Calc가 만들어짐.
// = Calc 프로토타입에 EventEmitter를 상속한 것.

Calc.prototype.add = () => a + b; // 더하기 함수를 Calc 프로토타입에 추가

module.exports = Calc; // Calc 프로토타입을 module.exports에 할당
