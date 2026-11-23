const calculateDelivery = (distance) =>
  distance <= 2 ? 30 : 30 + (distance - 2) * 15;

const checkFreeDelivery = (orderAmount) => orderAmount >= 1000;

const processOrder = (customer, distance, orderAmount, callback) => {
  let deliveryCharge = 0;

  if (!checkFreeDelivery(orderAmount)) {
    deliveryCharge = callback(distance);
  }

  console.log(`Customer: ${customer}`);
  console.log(`Order Amount: Rs. ${orderAmount}`);
  console.log(`Distance: ${distance} km`);
  console.log(
    deliveryCharge === 0
      ? "Delivery Charge: Free"
      : `Delivery Charge: Rs. ${deliveryCharge}`
  );
};

processOrder("Shyam", 5, 800, calculateDelivery);
console.log("---");
processOrder("Gita", 5, 1200, calculateDelivery);
