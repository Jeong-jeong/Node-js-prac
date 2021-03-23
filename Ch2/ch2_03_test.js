// 직접 만든 모듈은 상대경로로 넣어줘야 함.
// require() 함수를 쓰면 exports라는 전역객체를 return 받음.
// 따라서 exports 안에 add라는 속성도 사용 가능함.
let calc = require('./calc');
console.log('모듈로 분리한 후 - calc.add : ' + calc.add(20, 20) )

// ⭐️ 결론!! 별도의 파일로 분리된 모듈은 require 함수를 통해 불러올 수 있다.