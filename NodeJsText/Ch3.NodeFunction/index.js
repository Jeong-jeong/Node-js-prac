const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
	return (str.length % 2) ? odd : even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));