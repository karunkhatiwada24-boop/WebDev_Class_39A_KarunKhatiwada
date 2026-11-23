const getTicketPrice = (age) => {
  if (age < 12) return 150;
  if (age <= 17) return 200;
  if (age <= 59) return 300;
  return 200;
};

const calculateTotal = (price, quantity) => price * quantity;

const applyDiscount = (total, quantity) =>
  quantity >= 5 ? total * 0.1 : 0;

const bookTicket = (name, age, quantity, callback) => {
  const price = callback(age);
  const total = calculateTotal(price, quantity);
  const discount = applyDiscount(total, quantity);
  const finalAmount = total - discount;

  console.log(`Customer: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Tickets: ${quantity}`);
  console.log(`Total Before Discount: Rs. ${total}`);
  console.log(`Discount: Rs. ${discount}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

bookTicket("Hari", 25, 5, getTicketPrice);
