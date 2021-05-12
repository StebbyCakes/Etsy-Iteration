console.log('Problem 1');
const pricesArray = items.map(function(item) {
  return item.price;

});
const totalPrice = pricesArray.reduce(function(acc, i) {
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

function displayTitle(item, index) {
  console.log(item.title);
}
console.log('Next');




console.log('Problem 3');
let currency = "GBP";
let newCurrency = items.filter(function(item) {
  return item.currency_code == currency;
});
newCurrency.forEach(displayTitleAndPrice);

function displayTitleAndPrice(item, index) {
  console.log(item.title, item.price);
}
console.log('Next');


console.log('Problem 4');

let material = 'wood';
let newMaterial = items.filter(function(item) {
  return item.materials.includes('wood');
});
newMaterial.forEach(displayTitle);

console.log('Next');




console.log('Problem 5');

let newMaterialSize = items.filter(function(item) {
  let materialSize = item.materials.length;
  if (materialSize >= 8) {
    return item.title
  }
});
function displayMaterials(item, index) {
  console.log(item.title, item.materials);
}
newMaterialSize.forEach(displayMaterials);

console.log('Next')




console.log('Problem 6')

let seller = "i_did";
let newSeller = items.filter(function(item) {
  return item.who_made.includes('i_did');
});

console.log(newSeller.length + ' Were made by their sellers');

console.log('End')
