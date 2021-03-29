let fs = require('fs'); // file sysyem 모듈

// writeFile() = 비동기식 (대부분 사용), writeFileSync() 동기식 (가끔)
fs.writeFile('./output.txt', 'Hello.', function (err) {
	if(err) {
		console.log(`error 발생 ${err}`);
		return; // 에러 발생시 다음으로 넘어가지 않게 함
	}
	console.log(`output.txt 파일에 데이터 쓰기 완료!`) // 에러 발생 안하면 출력
} );
