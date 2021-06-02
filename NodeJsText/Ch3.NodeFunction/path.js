const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); // 경로 구분자. 윈도: \, POSIX: /
console.log('path.delimiter', path.delimiter); // 환경변수 구분자, 윈도: ;, POSIX: :
console.log('path.dirname()', path.dirname(string));  
console.log('path.extname()', path.extname(string)); // 확장자
console.log('path.basename()', path.basename(string));