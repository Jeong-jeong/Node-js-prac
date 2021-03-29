let winston = require('winston');

let winstonDaily = require('winston-daily-rotate-file');  // 하루에 하나씩 파일이 만들어짐

let moment = require('moment');  // 현재 시간에서 년도만 빼고 날짜 사용

function timeStampFormat() {
	return moment().format(`YYYY-MM-DD HH:mm:ss.SSS ZZ`) // 현재 시간을 모멘트로 확인하고 포맷으로 일정 형태로 만드는 것.
}

// 로거 객체를 가지고 로그를 찍을 수 있도록 할 것임.
// 너무 어렵다,...
let logger = new (winston.Logger)({ // 윈스톤 모듈을 만든 분이 이런 형태를 원하심
	transports: [
		new (winstonDaily)({ // 파일로 출력
			name: 'info-file',
			filename:  './log/server',
			datePattern: '_yyyy-MM-dd.log',
			colorize: false,
			maxsize: 50000000, // 50mb
			maxFiles: 1000,
			level: 'info',
			showLevel: true,
			json: false,
			timestamp: timeStampFormat
		}),
		new (winston.transports.Console) ({ // 콘솔로 출력
			name: 'debug-console',
			colorize: true,
			level: 'debug',
			showLevel: true,
			json: false,
			timestamp: timeStampFormat,
		})
	]
});
// logger라는 객체가 생성됨.

logger.debug('디버깅 메시지');
logger.error('에러 메세지');
// 파일로 저장될 수 있음.

// 실행하려면 외장 모듈 설치해야 함.