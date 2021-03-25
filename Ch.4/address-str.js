const { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } = require('constants');
let url = require('url')// url 모듈애서 불러온 객체를 url 이란 동일 이름 변수에 할당

let urlStr = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=구름에듀';
// 👉🏻 분석: {
// 	ip: 'search.naver.com',
// 	requestPath: 'search.naver',
// 	requestParameter: ['where=nexearch', 
// 						'sm=top_hty', 
// 						'fbm=1', 
// 						'ie=utf8', 
// 						'query=구름에듀'],
// } 
let curUrl = url.parse(urlStr); // url 객체 안에 있는 parse() 메서드를 통해 객체로 만들어 return.

console.log(`query: ${curUrl.query}`);
// where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=구름에듀

let curStr = url.format(curUrl);
console.log(curStr);

let querystring = require('querystring');
let params = querystring.parse(curUrl.query);
console.log(params);
