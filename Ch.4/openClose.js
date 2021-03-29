let fs = require('fs');

fs.open('./output.txt', 'w', function(err, fd) { // 오픈하고 w 권한 줌
	// 정상적으로 오픈하면 콜백함수 실행!
	if (err) {
		console.log('파일 오픈 시 에러 발생');
		console.dir(err);
		return;
	}
	// 정상 작동 시
	let buf = new Buffer('Hi\n');
	fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
		if (err) {
			console.log('파일 쓰기 시 에러 발생');
			console.dir(err);
			return;
		}
		console.log('파일 쓰기 완료!')

		fs.close(fd, function() {
			// 정상적으로 close 됐을 때 콜백 함수 실행
			console.log('파일 닫기 완료');
		})
	}); // buf라는 곳에 데이터를 전달하게 되어있음.

});