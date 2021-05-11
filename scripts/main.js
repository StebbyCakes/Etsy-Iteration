const pricesArray = items.map(function(item){
  return item.price;
});
const totalPrice = pricesArray.reduce(function(acc, i){
   return acc + i;
}, 0); // dont need the 0 here but it helps
var result = totalPrice / items.length
console.log(result);
// This code can still be made without .map , attempt this
