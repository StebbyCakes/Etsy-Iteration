(function() {
  'use strict';


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


  // // Teacher Solution
  // const priceOfAllItems = items
  //   .map(function(item) {
  //     return item.price;
  //   })
  //   .reduce(function(acc, i) {
  //     return acc + i;
  //   });
  // // same as above solution and is known as "chaining"
  // // brings all the prices together as a map in first function and then immediately throws them into the reduce function
  // // then returns that value back into priceOfAllItems
  //
  // const priceOfAllItems2 = items
  //   .reduce(function(acc, item) {
  //     return acc + item.price // cant do acc.price because would first time through would work but second time could look like ex: 32.price + number and there is no 32.price so error
  //   }, 0); // starting at 0 makes acc be 0 and the first value of the function then becomes item.price so 0 + item.prices
  // const averagePrice = (priceOfAllItems2 / items.length).toFixed(2);
  // console.log(`The average price is $${Math.floor(averagePrice * 100 / 100)}.`)





  console.log('Problem 2');
  let filterPrices = items.filter(function(item) {
    return (item.price >= 14 && item.price < 18);
  });

  filterPrices.forEach(displayTitle)

  function displayTitle(item, index) {
    console.log(item.title);
  }

  // Teacher Solution
  //
  // filter(function(item) {
  //     return item.currency_code === "USD" && item.price >= 14 && item.price <= 18;
  //   })
  //   .map(function(item) {
  //     return item.title;
  //   }) //  chaining works by not ending the function with a semicolon until the end of the function
  //   .forEach(function(item) {
  //     console.log(item);
  //   });


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


  // //  Teacher solution
  //
  // .filter(function(item) {
  //   return item.currency_code === 'GBP';
  // })
  // .forEach(function(item){
  //   console.log(`${item.title} costs '\u00a3'${item.price}`);
  // });




  console.log('Next');


  console.log('Problem 4');

  let material = 'wood';
  let newMaterial = items.filter(function(item) {
    return item.materials.includes('wood');
  });
  newMaterial.forEach(displayTitle);

  // // Teacher solution
  //
  // .filter(function(item) {
  //   return item.materials.includes('wood');
  // })
  // .forEach(function(item) {
  //   console.log(`${item.title} is made of wood`)
  // });


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


// // Teacher Solution
//
//   .filter(function(item) {
//     return.materials.length >= 8
//   })
//   .forEach(function(item) {
//     console.log(`${item.title} has ${item.materials.length} materials`);
//     item.materials.forEach(function(material){
//       console.log(material)
//     })
//   });

  console.log('Next')




  console.log('Problem 6')

  let seller = "i_did";
  let newSeller = items.filter(function(item) {
    return item.who_made.includes('i_did');
  });

  console.log(newSeller.length + ' Were made by their sellers');

  console.log('End')

// // Teacher Solution
//
// const itemsMadeBySeller = itemsMadeBySeller
// .filter(function(item) {
//   return item.who_made === 'i_did'
// });
//   console.log(`${itemsMadeBySeller.length} Items were made by their sellers.`)
// // this function checks if it 'IS' that string not if it has it (basically a true of false)


})();
