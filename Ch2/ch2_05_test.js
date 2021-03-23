// path 내장 모듈 사용
let path = require('path');

let dirs = [ 'Users', 'Mars', 'docs' ];

let dirStr = dirs.join();
console.log(dirStr);

let dirStr2 = dirs.join(path.sep);
// path 모듈에 join 함수 사용 가능
console.log(dirStr2);


