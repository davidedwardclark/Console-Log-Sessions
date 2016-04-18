var net = require('net');
var irc = {};

irc.socket = new net.Socket();
irc.socket.on('connect', function () {
	console.log('Connecting...');
	setTimeout(function() {
		irc.raw('NICK DavidECbot');
		irc.raw('USER DavidEC 0 * :DavidECs bot');
	}, 1000);
});
irc.socket.connect(6667, 'irc.freenode.net');
irc.socket.setEncoding('utf8');
irc.socket.setNoDelay();
irc.socket.on('data', function(result) {
	console.log(result)
	var stringSplit = result.split(' ');
	if (stringSplit[0] === 'PING') {
		irc.raw('PONG ' + stringSplit[1]);
	}
});

irc.raw = function (data) {
	irc.socket.write(data + '\n', 'utf8', function () {
		console.log('SENT -', data);
	});
};
