function makeTransaction (quantity, pricePerDroid) {
const totalPrice = quantity * pricePerDriod;
return `You ordered ${quantity} driods worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000)); 
console.log(makeTransaction(10, 500)); 
