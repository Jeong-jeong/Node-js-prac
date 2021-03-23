let users = [
	{name: '소녀시대', age: 20},
	{name: '걸스데이', age: 22},
	{name: '티아라', age: 21},
]

for (let i = 0; i< users.length; i++) { // 전통적
	console.log(`배열 원소 ${i}: ${users[i].name}`)
}

users.forEach( (user, index) => // 성능면에서 우수
				console.log(`배열 원소 ${index}: ${user.name}`)
)

// 배열의 내장 함수
users.pop(); // 맨 뒤 추출
console.log(users); 
users.unshift({name: 'Someone', age: 22}); // 맨 앞 추가
console.log(users);
users.shift(); // 맨 앞 추출
console.log(users);

// delete
delete users[1];
console.log(users); // length는 그대로여서 삭제된 곳은 empty.

// splice (기존 배열 변경)
users.push({name: '티아라', age: 21}); // [1]: 소녀시대, [2]: empty, [3]: 티아라
 users.splice( 1, 1 ); // 1번째 인덱스부터 1개 삭제
console.log(users);

// slice (기존 배열 변경 ❌)
let users2 = users.slice( 0, 1 );
console.log(users);
console.log(users2);

