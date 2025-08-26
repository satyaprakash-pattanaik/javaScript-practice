// Arrow function to calculate discounted prices
const applyDiscount = (prices, discount) =>
  prices.map(price => price - (price * discount));

// Example data
const items = [
  { name: "Watch", price: 5000 },
  { name: "Headphones", price: 2000 },
  { name: "Laptop", price: 45000 }
];

// Apply 10% discount
const discountedItems = items.map(item => ({
  ...item,
  price: applyDiscount([item.price], 0.10)[0]
}));

// Print with template literals
discountedItems.forEach(item => {
  console.log(`Item: ${item.name} | Discounted Price: ₹${item.price}`);
});
