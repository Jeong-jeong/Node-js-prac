let person = {
	name: 'Jiyoung',
	age: 20
};

// console.log('객체입니다. %j', person);

//  dir : 객체의 프로퍼티를 다 확인 가능
console.dir(person);

console.time('duration_time');
// 여기부터
let result = 0;
for (let i = 0; i < 1000; i++) {
	result += i;
}
// 여기까지 걸린 시간 체크
console.timeEnd('duration_time');

console.log( 'file_name: %s', __filename ); // 파일 이름 확인
console.log( 'path: %s', __dirname ); // 폴더위치 확인




