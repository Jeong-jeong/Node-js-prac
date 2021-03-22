// module.exports에 할당한 calc라는 객체가 
// require()로 불러와 그 옆 변수에 할당
// exports(객체 안에 함수만 가져올 때) VS module.exports (객체 통채로 가져올 때)
let calc2 = require('./ch2_04_calc2');

console.log(`모듈로 분리한 후 - calc2.add: ${calc2.add(20, 20)}`) // 40

// 다른 사람에 의해 제공되는 모듈: 상대경로 쓸 필요 없음
let nconf = require('nconf'); // 시스템 환경 변수 모듈
nconf.env(); 
let nconfOs = nconf.get('OS');
console.log(`OS 환경변수 값: ${nconfOs}`);