console.log('argv 속성의 파라미터 수:' + process.argv.length);
// argv: arguments vector = 가변적인 개수의 문자열
console.dir(process.argv)

// process = Object
process.argv.forEach( (item, index) => {
	console.log(index + ':' + item);
});
