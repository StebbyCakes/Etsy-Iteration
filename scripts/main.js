console.log('Problem 1');
const pricesArray = items.map(function(item){
  return item.price;

});
const totalPrice = pricesArray.reduce(function(acc, i){
   return acc + i;
}, 0);
var result = totalPrice / items.length
console.log(result);
console.log('Next');

console.log('Problem 2');
 let filterPrices = items.filter(function(item) {
   return (item.price >= 14 && item.price < 18);
 });

filterPrices.forEach(displayTitle)

function displayTitle (item, index){
   console.log(item.title);
}
console.log('Next');


console.log('Problem 3');
let currency = "GBP";
let newCurrency = items.filter(function(item) {
  return item.currency_code == currency;
});
newCurrency.forEach(displayTitleAndPrice);

function displayTitleAndPrice (item, index){
   console.log(item.title, item.price);
}
console.log('Next');
