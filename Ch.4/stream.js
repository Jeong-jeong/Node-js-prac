let fs = require('fs');

// createReadStream / createWriteStream을 통해 파일을 읽고 쓸 수도 있음.
let infile = fs.createReadStream('./output.txt', {flags: 'r'}); // read 권한을 stream에 줌

// 읽는 과정에서 이벤트가 발생함.

infile.on('data', function(data) {
	console.log(`읽어들인 데이터: ${data}`);
})

infile.on('end', function() {
	console.log('읽기 종료');
})