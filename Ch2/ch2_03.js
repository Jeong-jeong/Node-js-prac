// 파일을 읽을 때 필요한 코드를 기능별로 각각의 파일에 나눔
// 별도의 파일로 분리된 독립 기능 = module

const calc = {};

calc.add = (a, b) => a + b;

console.log('모듈로 분리하기 전 - calc.add: '+ calc.add(10, 10));

