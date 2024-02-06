

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
}
]



/*
greenshirt: {
  price: 50,
  color: "green",
  from: "greece"
},
blueshirt: {
  price: 40,
  color: "blue",
  from:"bangladesh"
}
*/

let cart = localStorage.setItem("one", JSON.stringify(theObjects));


let checkOut = document.querySelector(".checkout");
checkOut.addEventListener("click", (e) => {
e.preventDefault();
 console.log(localStorage.getItem(theObjects.map(eachitem => {
   console.log(eachitem)
 })));
});







/*
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
*/
