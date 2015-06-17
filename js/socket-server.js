// Connect to server
var socket = io.connect("http://52.17.52.217:3000");

// Create new room and log roomID
socket.emit('subscribe', '');
socket.on('subscription', function (data) {
    roomId = data.roomId;
    console.log('roomId set to : ' + data.roomId);
});
