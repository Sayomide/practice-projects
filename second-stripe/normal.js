
let theObjects = [
{
  whiteshred: {
  price: 50,
  color: "white",
  from: "Nigeria"
              }
},
{
redshirt: {
  price: 30,
  color: "red",
  from: "romania"
          }
},
{
greenshirt: {
  price: 50,
  color: "green",
  from: "greece"
            }
},
{
blueshirt: {
  price: 40,
  color: "blue",
  from:"bangladesh"
           }
}
  ]

/*
localStorage.setItem("one", JSON.stringify(theObjects));

let checkOut = document.querySelector(".checkout");
let total =0;
  checkOut.addEventListener("click", (e) => {
    e.preventDefault();
  
   let storedObjects = JSON.parse(localStorage.getItem("one"));
    //console.log(storedObjects)
  
 
  storedObjects.forEach(item => {
    let itemName = Object.keys(item)[0]; // Get the name of the item (e.g., "whiteshred")
    let itemPrice = parseFloat(item[itemName].price); // Get the price of the item
    console.log(`Item: ${itemName}, Price: ${itemPrice}`); // Output item name and price
 total+=itemPrice;
console.log(total)
  });
  
});
*/



document.addEventListener("DOMContentLoaded", function() {
let checkOut = document.querySelector(".checkout");
checkOut.addEventListener("click", (e) => {
  e.preventDefault();
    console.log("yes");
  
  fetch("/stripe-checkout", {
    method: 'post',
    headers: new Headers({'Content-Type': "application/json"}),
    body: JSON.stringify({
      items: JSON.parse(localStorage.getItem('cart')),
      email: JSON.parse(sessionStorage.user).email
    })
  }).then(res => res.json())
  .then(url => { 
    console.log(url)
  })
  .catch(error => {
  console.error('Error:', error);
})
console.log("another")
  });
});

