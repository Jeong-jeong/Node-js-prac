// let names = ['John', 'Any', 'Tom'];

let users = [ // 배열에 객체 넣기
	{name: 'John', age: 20},
	{name: 'Any', age: 15},
	{name: 'Tom', age: 37},
]

users.push({name: 'Jenny', age: 21})

console.log(`사용자 수: ${users.length}`)
console.log(`첫번째 사용자 이름: ${users[0].name}`)

let oper = (a, b) => a + b;

users.push(oper);

console.dir(users);