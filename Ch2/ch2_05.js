// 내장 모듈
let os = require('os'); // cpu, network interface 같은 것들 확인 가능

console.log(`hostname: ${os.hostname()}`);
console.log(`memory: ${os.freemem()}`)

