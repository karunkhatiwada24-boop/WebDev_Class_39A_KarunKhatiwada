const input = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Enter a number: ", (answer) => {
  const number = Number(answer);
  console.log("Square:", number ** 2);
  console.log("Cube:", number ** 3);
  input.close();
});
