setImmediate(() => {
	console.log('immediate');
});

process.nextTick(() => {
	console.log('nextTick');
});

setTimeout(() => {
	console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));

// expect: nextTick > setImmediate > promise > timeout 라 예상했지만 틀림.
// promise도 nextTick과 같이 다른 콜백보다 우선 실행됨.
// actual expect: nextTick > promise > timeout > setImmediate
	// 왜 timeout이 immediate보다 먼저 실행되는지 추측 :
	// 콜스택에 콜백들이 없으니 이벤트루프가 timeout을 바로 콜스택으로 보내 실행시킨 듯.
	

