// 콜백 함수 이해하기
// ✔️ 콜백함수: 어떤 특정한 시점이 되면 이 함수를 실행함 = call back
// 함수의 인자로 함수를 쓰는 것
// 대부분의 콜백함수는 익명함수로 사용


function add (a, b, ck) { 
	let result = a + b; 
	ck(result);
}

add (10, 10, function (result) { 
	console.log(result);
});

function add2 (a, b, callback) {
	let result = a + b;
	callback(result);

	let count = 0;
	let history = () => `${a} + ${b} += ${result}`;
		count += 1;
	return history;
}

let add_history = add2 (20, 20, function(result) {
	console.log(result);
})

// 함수를 콜백으로 함수의 인자처럼 사용할 경우, 함수 끝에 ()을 붙일 필요가 없다
// 👉🏻 이는 언제든 원하는 시점에 실행시킬 수 있다는 말❕



