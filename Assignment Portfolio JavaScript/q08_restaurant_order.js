const menu = { burger: 250, pizza: 500, momo: 150, chowmein: 180 };

const getFoodPrice = (foodName) => {
  const price = menu[foodName.toLowerCase()];
  return price === undefined ? null : price;
};

const calculateServiceCharge = (total) => total * 0.05;

const calculateOrder = (foodName, quantity, callback) => {
  const price = callback(foodName);
  return price === null ? null : price * quantity;
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
  const foodAmount = calculateOrder(foodName, quantity, getFoodPrice);

  if (foodAmount === null) {
    console.log(`Sorry ${customerName}, "${foodName}" is not on the menu.`);
    return;
  }

  const serviceCharge = callback(foodAmount);
  const finalAmount = foodAmount + serviceCharge;

  console.log(`Customer: ${customerName}`);
  console.log(`Food: ${foodName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Food Amount: Rs. ${foodAmount}`);
  console.log(`Service Charge: Rs. ${serviceCharge}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

generateReceipt("Suman", "Burger", 2, calculateServiceCharge);
console.log("---");
generateReceipt("Suman", "Sandwich", 1, calculateServiceCharge);
