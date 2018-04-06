var os = require('os');
var uptime = os.uptime();

function convertTime() {
	console.log(uptime + ' - wynik samego os,uptime()')
	var hours = Math.floor(uptime / 3600),
		uptime = uptime % 3600,
		minutes = Math.floor(uptime / 60),
		seconds = uptime % 60;
		return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';
}
exports.print = convertTime;
