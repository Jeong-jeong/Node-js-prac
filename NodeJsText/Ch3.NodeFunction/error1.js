// 에러 처리.
// 에러가 발생할 것 같은 부분을 try/catch문으로 감싸기.

setInterval(() => {
	console.log('시작');
	try {
		throw new Error('서버를 고장내주마!'); // 에러 강제 발생
	} catch (err) {
		console.error(err);
	}
}, 1000); // 프로세스가 멈추는지 체크.

// 에러가 발생하지만, try / catch로 잡을 수 있음.



