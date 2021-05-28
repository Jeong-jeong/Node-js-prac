// var.js를 참조하는 func.js 파일
const { odd, even } = require('./var');

function checkOddEven (n) {
	return (n % 2) ? odd : even;
}

module.exports = checkOddEven;
// 다시 모듈로 만듦.