let output = '안녕!';

let buffer1 = new Buffer(10); // 길이가 10인 객체

let len = buffer1.write(output, 'utf-8');

console.log(`버퍼에 쓰인 문자열의 길이 : ${len}`);
console.log(`첫번째 버퍼에 쓰인 문자열 : ${buffer1.toString()}`);

console.log(`버퍼 객체 여부 ${Buffer.isBuffer(buffer1)}`);

let byteLen = Buffer.byteLength(buffer1);
console.log(byteLen);

let str1 = buffer1.toString('utf-8', 0, 7);
console.log(`str1 : ${str1}`);

// buffer는 내부에 데이터가 들어가는 일종의 상자!
// buffer를 문자열로 만들 경우
let buffer2 = Buffer.from('Hello', 'utf-8');
console.log(`두번째 버퍼의 길이: ${Buffer.byteLength(buffer2)}`);

let str2 = buffer2.toString('utf-8', 0, Buffer.byteLength(buffer2));
console.log(`str2: ${str2}`)