const calculateBonus = (salary) =>
  salary >= 40000 ? salary * 0.1 : salary * 0.05;

const calculateTax = (salary) => salary * 0.05;

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
  const bonus = bonusCallback(salary);
  const tax = taxCallback(salary);
  return salary + bonus - tax;
};

const generatePayslip = (name, salary, callback) => {
  const netSalary = callback(salary);
  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${calculateBonus(salary)}`);
  console.log(`Tax: Rs. ${calculateTax(salary)}`);
  console.log(`Net Salary: Rs. ${netSalary}`);
};

generatePayslip("Ram", 50000, (salary) =>
  calculateNetSalary(salary, calculateBonus, calculateTax)
);
