let studentGrade = prompt("Enter your marks:");

if (studentGrade > 100 || studentGrade < 0) {
  console.log("Invalid Marks");
}
if (studentGrade >= 79 && studentGrade <= 100) {
  console.log("You scored A ");
} else if (studentGrade >= 60 && studentGrade < 79) {
  console.log("You Scored B");
} else if (studentGrade >= 49 && studentGrade <= 59) {
  console.log("You Scored C");
} else if (studentGrade >= 40 && studentGrade < 49) {
  console.log("You Scored D");
} else if (studentGrade >= 0 && studentGrade < 40) {
  console.log("You Scored E");
} else {
  console.log("ERROR!");
}
