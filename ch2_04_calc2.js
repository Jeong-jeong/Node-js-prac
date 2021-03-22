const calc = {};

calc.add = (a, b) => a + b;
// calc라는 객체를 만들고, 더하기 함수를 속성(프로퍼티) add로 추가

module.exports = calc;
// module.exports에 할당한 calc라는 객체가 
// require()로 불러와 그 옆 변수에 할당