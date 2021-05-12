const pricesArray = items.map(function(item){
  return item.price;

});
const totalPrice = pricesArray.reduce(function(acc, i){
   return acc + i;
}, 0);
var result = totalPrice / items.length
console.log(result);



 let filterPrices = items.filter(function(item) {
   return (item.price >= 14 && item.price < 18);
 });
filterPrices.forEach(displayTitle)

function displayTitle (item, index){
   console.log(item.title);
}
