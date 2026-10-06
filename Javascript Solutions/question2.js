let units = 150;
let bill;

if (units <= 50) {
  bill = units * 5;
} else if (units <= 100) {
  bill = units * 7;
} else if (units <= 200) {
  bill = units * 10;
} else {
  bill = units * 12;
}

console.log("Units Consumed:", units);
console.log("Electricity Bill: Rs.", bill);
