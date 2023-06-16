let studentGrade = prompt("Enter your grade:");

if (studentGrade > 100 || studentGrade < 0) {
  alert("Invalid Marks");
}
if (studentGrade > 79) {
  alert("You scored A ");
} else if (studentGrade >= 60 && studentGrade <= 79) {
  alert("You Scored B");
} else if (studentGrade >= 49 && studentGrade <= 59) {
  alert("You Scored C");
} else if (studentGrade >= 40 && studentGrade < 49) {
  alert("You Scored D");
} else if (studentGrade < 40) {
  alert("You Scored E");
}
