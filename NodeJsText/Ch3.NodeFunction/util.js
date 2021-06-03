const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
	console.log(x + y);
}, 'dontUseMe는 deprecated됨!');
dontUseMe(1, 2);

const ramdomBytesPromise = util.promisify(crypto.randomBytes);
ramdomBytesPromise(64)
.then((buf) => {
	console.log(buf.toString('base64'));
})
.catch((err) => {
	console.error(err);
});