


// another section here

// document.addEventListener("DOMContentLoaded", function () {
//   const apiUrl = "https://smart-shoping-whb0.onrender.com/card/add/";

//   // Fetch Cart Items
//   function fetchCartItems() {
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => console.error("Error fetching cart items:", error));
//   }

//   fetchCartItems();

//   // Add to Wishlist
//   function addToWishlist(productName, productPrice, productImage) {
//     let wishlistItems =
//       JSON.parse(localStorage.getItem("wishlist_items")) || [];
//     const newItem = {
//       name: productName,
//       price: productPrice,
//       image: productImage,
//     };
//     wishlistItems.push(newItem);
//     localStorage.setItem("wishlist_items", JSON.stringify(wishlistItems));
//     alert("Product added to wishlist!");
//   }

//   // Event Listeners
//   document
//     .getElementById("add_to_wishlist")
//     .addEventListener("click", function () {
//       const productName = document.getElementById("productName").innerText;
//       const productPrice = document.getElementById("productPrice").innerText;
//       const productImage = document.getElementById("productImage").src;
//       console.log("productName: ", productName);
//       addToWishlist(productName, productPrice, productImage);
//     });

//   document.querySelectorAll(".btn-danger").forEach((button) => {
//     button.addEventListener("click", function () {
//       // Handle other button clicks if needed
//     });
//   });
// });

// // Update wishlist count displayed on the webpage
// let wishlistItems = JSON.parse(localStorage.getItem("wishlist_items")) || [];
// const wishlistContainer = document.getElementById("wishlist_items");
// wishlistItems.forEach((item, index) => {
//   const wishlistItemHTML = `
//           <div class="card row wish-container" style="width: 18rem;">
//             <img class="card-img-top" src="${item.image}" alt="card image cap">
//             <div class="card-body">
//               <h5 class="card-title">${item.name}</h5>
//               <h5 class="card-title">${item.price}</h5>
             
//             </div>
//             <div class="w-100">
//             <button class="w-100 px-2 py-1 rounded-2  remove-product data-index="${index}">Remove</button>
//             </div>     
//         </div>
//         `;
//   wishlistContainer.insertAdjacentHTML("beforeend", wishlistItemHTML);
  
// });

// console.log("wishlistCountSp", wishlistItems);
