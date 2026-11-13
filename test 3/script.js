//Print numbers from 1 to 20
console.log("Numbers 1 to 20:");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//Print only even numbers between 1 and 20
console.log("Even numbers:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Print only odd numbers between 1 and 20
console.log("Odd numbers:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Calculate sum of numbers from 1 to 20
let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum = sum + i;
}
console.log("Sum of 1 to 20 is: " + sum); // Should be 210

// Print numbers from 20 down to 1
console.log("Numbers 20 down to 1:");
for (let i = 20; i >= 1; i--) {
  console.log(i);
}