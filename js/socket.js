document.getElementById("socket-connect").addEventListener("touchstart", function(event){
  var socket = io.connect("http://52.17.52.217:3000");

  var roomID = prompt("Enter room number");
  if (roomID != null) {
    // Create new room and log roomID
    socket.emit('subscribe', roomID);
    socket.on('subscription', function (data) {
        roomId = data.roomId;
        console.log('roomId set to : ' + data.roomId);
    });

    socket.on('pm', function (data) {
      console.log("Receieved new camera");
      console.log(data.message);
      VIEW3D.camera = data.message;
    });
  }


})
