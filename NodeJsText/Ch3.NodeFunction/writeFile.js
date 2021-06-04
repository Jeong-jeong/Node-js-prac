const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글 쓰기 가능!')
.then(() => {
	return fs.readFile('./writeme.txt');
})
.then(data => {
	console.log(data.toString());
})
.catch(err => {
	console.error(err)
});