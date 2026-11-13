// FUNCTION 1: Calculate average
function calculateAverage(mark1, mark2, mark3) {
  let total = mark1 + mark2 + mark3;
  let average = total / 3;
  return average;
}

// FUNCTION 2: Calculate grade
function calculateGrade(average) {
  if (average >= 80 && average <= 100) {
    return "A";
  } else if (average >= 70) {
    return "B";
  } else if (average >= 60) {
    return "C";
  } else if (average >= 50) {
    return "D";
  } else {
    return "E";
  }
}

// MAIN PROGRAM
let studentName = prompt("Enter student's full name:");
let courseName = prompt("Enter course name:");

if (studentName === "" || studentName === null || courseName === "" || courseName === null) {
  alert("Error! Name and Course cannot be empty.");
} else {
  let mark1 = Number(prompt("Enter marks for Subject 1:"));
  let mark2 = Number(prompt("Enter marks for Subject 2:"));
  let mark3 = Number(prompt("Enter marks for Subject 3:"));

  if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3)) {
    alert("Error! Please enter numbers only for marks.");
  } else if (mark1 < 0 || mark1 > 100 || mark2 < 0 || mark2 > 100 || mark3 < 0 || mark3 > 100) {
    alert("Error! Marks must be between 0 and 100.");
  } else {
    let average = calculateAverage(mark1, mark2, mark3);
    let grade = calculateGrade(average);

    console.log("Student Name: " + studentName);
    console.log("Course: " + courseName);
    console.log("Average Marks: " + average);
    console.log("Grade: " + grade);

    alert("Hello " + studentName + "! Your Average is " + average + " and your Grade is " + grade);
  }
}