// process = 전역객체, 이벤트 emitter를 이미 상속. 👉🏻 따라서 emit 메소드 호출 가능
process.on('exit', () => console.log('exit 이벤트 발생') ); // 이벤트를 받기 위한 메소드
// exit라는 이벤트에 함수를 등록만 해 놓음. 호출할 때 실행될 것임.
// exit라는 이벤트는 이미 정의되어 있음.

setTimeout(function() {
	console.log('2초 후에 실행되었음.');

	process.exit(); // 2초 후에 exit함수 호출.
}, 2000 );

console.log('2초 후에 실행될 것임.');


// 우리가 이벤트를 정의해보자!
process.on('tick', (count) => console.log(`tick 이벤트 발생: ${count}`) );

setTimeout( () => {
	console.log(`2초 후 실행됨.`);

	process.emit('tick', '2'); // tick 이벤트 보냄.
}, 2000 );
