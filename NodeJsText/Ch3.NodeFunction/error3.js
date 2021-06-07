// 에러 처리
// promise의 에러는 catch하지 않아도 알아서 처리됨.

const fs = require('fs').promises;

setInterval(() => {
	fs.unlink('./aadbd.js')
}, 1000);