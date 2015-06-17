// Connect to server
var socket = io.connect("http://localhost:3000");
var roomId = null;
var sendPosition = false;

// Create new room and log roomId
socket.emit('subscribe', '');
socket.on('subscription', function (data) {
    roomId = data.roomId;
    console.log('roomId set to : ' + data.roomId);
});

// Listen for cameras
socket.on('camera', function (data) {

  VIEW3D.camera.position.set(
    data.message.position.x,
    data.message.position.y,
    data.message.position.z
  );

  VIEW3D.camera.setRotationFromQuaternion(
    new THREE.Quaternion(
      data.message.quaternion._x,
      data.message.quaternion._y,
      data.message.quaternion._z,
      data.message.quaternion._w
    )
  );

});

document.getElementById("socket-connect").addEventListener("touchstart", function(event){

  // Leave default room
  roomToLeave = roomId;

  // Join another room
  roomId = prompt("Enter room number");
  if (roomId) {
    console.log("Leaving room " + roomToLeave);
    socket.emit('leave room', {room: roomToLeave});
    // Join new room and log roomId
    socket.emit('subscribe', roomId);
    socket.on('subscription', function (data) {
        roomId = data.roomId;
        sendPosition = true;
        console.log('roomId set to : ' + data.roomId);
    });
  }

});
