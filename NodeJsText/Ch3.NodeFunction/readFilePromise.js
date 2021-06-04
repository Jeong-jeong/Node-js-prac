const fs = require('fs').promises;

fs.readFile('./reademe.txt')
.then(data => {
	console.log(data);
	console.log(data.toString());
})
.catch(err => {
	console.error(err);
});
