let carSpeed = prompt("Car Speed:");
let speedLimit = 70;
let kmPerS = 5;

if (carSpeed <= speedLimit) {
  alert("OK!");
} else {
  const demeritPoints = (carSpeed - speedLimit) / kmPerS;
  if (demeritPoints > 12) {
    alert("License suspended");
  } else {
    alert("Points" + demeritPoints);
  }
}
