document.getElementById("backward").addEventListener("touchstart", function(event){
  event.preventDefault();
  event.stopPropagation();
  VIEW3D.controls.backwardMovement = true;
})
document.getElementById("backward").addEventListener("touchend", function(event){
  VIEW3D.controls.backwardMovement = false;
})
document.getElementById("forward").addEventListener("touchstart", function(event){
  event.preventDefault();
  event.stopPropagation();
  VIEW3D.controls.forwardMovement = true;
})
document.getElementById("forward").addEventListener("touchend", function(event){
  VIEW3D.controls.forwardMovement = false;
})
