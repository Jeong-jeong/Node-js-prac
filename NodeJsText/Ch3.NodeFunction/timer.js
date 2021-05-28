// global 내장 객체 setTimeout, setInterval, setImmediate
// 타이머 함수들은 모두 아이디를 반환하므로, clear를 활용해 타이머 취소!
const timeout = setTimeout(() => {
	console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
	console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
	console.log('실행되지 않아욘');
}, 3000);

setTimeout(() => {
	clearTimeout(timeout2); // 실행안됨
	clearInterval(interval); // 2번 실행되고 끝
}, 2500);

const immediate = setImmediate(() => {
	console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
	console.log('실행되지 않아욘');
})

clearImmediate(immediate2);

// expect: immediate > interval(1) > timeout(1.5) > inteval(2)