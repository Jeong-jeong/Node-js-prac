console.log('require가 최상단에 위치하지 않아도 됨');

module.exports = 'find me';

require('./var');

console.log('require.cache', require.cache);
console.log('require.main', require.main);
console.log(require.main === module);
console.log(require.main.filename);