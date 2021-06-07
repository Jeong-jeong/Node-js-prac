// 에러 처리
// 노드 자체에서 에러 잡기

const fs = require('fs');

setInterval(() => {
	fs.unlink('./abcdefg.js', (err) => { // 파일 삭제
		if (err) {
			console.error(err);
		}
	});
}, 1000);

