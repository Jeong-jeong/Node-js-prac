let Calc = require('./calc');
//  계산기 틀(프로토타입)

let calc1 = new Calc(); 
calc1.emit('stop');

console.log(`Calc에 stop 이벤트 전달함`);
