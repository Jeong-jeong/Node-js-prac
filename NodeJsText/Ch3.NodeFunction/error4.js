process.on('uncaughtException', (err) => { // 프로세스 객체에 'uncaughtException' 이벤트 리스너를 달았음.
	console.error('예기치 못한 에러', err);
});

setInterval(() => {
	throw new Error('서버를 고장내주마!'); // 에러가 발생해 멈춰야 하지만, 이벤트리스너로 멈추지 않음.
}, 1000);

setTimeout(() => {
	console.log('실행됨');
}, 2000);