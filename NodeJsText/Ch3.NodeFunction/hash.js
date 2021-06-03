const crypto = require('crypto');

// '비밀번호' 를 해시 기법 사용해 변경.

console.log(
	'base64:', 
	crypto.createHash('sha512')
	.update('비밀번호')
	.digest('base64'));

console.log(
	'hex:', 
	crypto.createHash('sha512')
	.update('비밀번호')
	.digest('hex'));