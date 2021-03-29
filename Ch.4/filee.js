let fs = require('fs'); // file sysyem 모듈

let data = fs.readFileSync('./package.json', 'utf-8');
// package.json의 파일 전체 내용을 읽어 출력.


let data2 = fs.readFile('./package.json', 'utf8', (err, dataa) => {
	console.log('1')
}); //비동기 방식



