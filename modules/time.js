var os = require('os');
var uptime = os.uptime();

function convertTime(time) {
	var hours = Math.floor(time / 3600),
		time = time % 3600,
		minutes = Math.floor(time / 60),
		seconds = time % 60;
		return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';
}
exports.print = convertTime(uptime);
