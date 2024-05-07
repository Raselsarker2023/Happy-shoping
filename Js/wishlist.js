
// Select the button for adding to wishlist
const addToWishlistBtn = document.getElementById('add_to_wishlist');

// Add event listener to the button
addToWishlistBtn.addEventListener('click', function(event) {
  event.preventDefault(); 

  // Get information about the product
  const productName = document.getElementById('productName').innerText;
  const productPrice = document.getElementById('productPrice').innerText;
  const productImage = document.getElementById('productImage').src;
  
  addToWishlist(productName, productPrice, productImage);
});

// Function to add a product to the wishlist
function addToWishlist(productName, productPrice, productImage) {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage,
    };
    wishlistItems.push(newItem);
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    alert("Product added to wishlist!");
    displayWishlistItems(); // Update the displayed wishlist items
}

// Function to remove a product from the wishlist
function removeFromWishlist(index) {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    wishlistItems.splice(index, 1);
    updateCart(wishlistItems);
}

// Function to update cart items and local storage
function updateCart(wishlistItems) {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    displayWishlistItems(); // Rerender the products
}

// Function to fetch and display wishlist items
function displayWishlistItems() {
    const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const wishlistContainer = document.getElementById("wishlist_items");

    // Clear the container before adding new items
    // wishlistContainer.innerHTML = "";

    wishlistItems.forEach((item, index) => {
        const wishlistItemHTML = `
            <div class="card row wish-container" style="width: 18rem;">
                <img class="card-img-top" src="${item.image}" alt="card image cap">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <h5 class="card-title">${item.price}</h5>
                </div>
                <div class="w-100">
                    <button class="w-100 px-2 py-1 rounded-2 remove-product" data-index="${index}">Remove</button>
                </div>     
            </div>
        `;
        wishlistContainer.insertAdjacentHTML("beforeend", wishlistItemHTML);
    });
}

// Call the function to display wishlist items when the page loads
displayWishlistItems();

// Delegate event listener to the parent container for dynamically added elements
document.getElementById("wishlist_items").addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('remove-product')) {
        const index = event.target.dataset.index;
        removeFromWishlist(index);
    }
});






// document.addEventListener("DOMContentLoaded", function () {
//     // Event listener to add a product to the wishlist
//     document.querySelectorAll('.add_to_wishlist').forEach(button => {
//         button.addEventListener("click", function () {
//             const productContainer = button.closest('.detail-page');
//             const productName = productContainer.querySelector(".title").innerText;
//             const productPrice = productContainer.querySelector("#productPrice").innerText;
//             const productImage = productContainer.querySelector("#productImage").src;
//             addToWishlist(productName, productPrice, productImage);
//         });
//     });

//     // Function to add a product to the wishlist
//     function addToWishlist(productName, productPrice, productImage) {
//         let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
//         const newItem = {
//             name: productName,
//             price: productPrice,
//             image: productImage,
//         };
//         wishlistItems.push(newItem);
//         localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
//         alert("Product added to wishlist!");
//         displayWishlistItems(); // Update the displayed wishlist items
//     }

//     // Function to fetch and display wishlist items
//     function displayWishlistItems() {
//         const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
//         const wishlistContainer = document.getElementById("wishlist_items");

//         // Clear the container before adding new items
//         wishlistContainer.innerHTML = "";

//         wishlistItems.forEach((item, index) => {
//             const wishlistItemHTML = `
//                 <div class="card row wish-container" style="width: 18rem;">
//                     <img class="card-img-top" src="${item.image}" alt="card image cap">
//                     <div class="card-body">
//                         <h5 class="card-title">${item.name}</h5>
//                         <h5 class="card-title">${item.price}</h5>
//                     </div>
//                     <div class="w-100">
//                         <button class="w-100 px-2 py-1 rounded-2 remove-product" data-index="${index}">Remove</button>
//                     </div>     
//                 </div>
//             `;
//             wishlistContainer.insertAdjacentHTML("beforeend", wishlistItemHTML);
//         });
//     }

//     // Call the function to display wishlist items when the page loads
//     displayWishlistItems();

//     // Delegate event listener to the parent container for dynamically added elements
//     document.getElementById("wishlist_items").addEventListener('click', function (event) {
//         if (event.target && event.target.classList.contains('remove-product')) {
//             const index = event.target.dataset.index;
//             removeFromWishlist(index);
//         }
//     });

//     // Function to update cart items and local storage
//     function updateCart(wishlistItems) {
//         localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
//         displayWishlistItems(); // Rerender the products
//     }

//     // Function to remove a product from the wishlist
//     function removeFromWishlist(index) {
//         let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
//         wishlistItems.splice(index, 1);
//         updateCart(wishlistItems);
//     }
// });





  
  
  
  
  
  // add to wishlist function.
  
//   const add_to_wishlist = () => {
//     document.getElementById("add_to_wishlist_btn").addEventListener("click", async function () {
//         const productId = urlParams.get("id"); // Assuming urlParams is defined elsewhere
//         let access = localStorage.getItem("access");
        
//         // Fetch product data by ID (replace with your own function)
//         const productDataWithOutUser = await fetchProductById(productId);
        
//         // Add user_id to product data
//         const productData = {
//             ...productDataWithOutUser,
//             access: access
//         };
  
//         // Add quantity to product data
//         const quantity = document.getElementById("quantity_value").value;
//         productData.quantity = parseInt(quantity);
  
//         // Get existing wishlist items from local storage
//         let wishlistItems = JSON.parse(localStorage.getItem("wishlist_items")) || [];
  
//         // Check if the product already exists in the wishlist
//         const existingProductIndex = wishlistItems.findIndex(item => item.id === productData.id);
//         if (existingProductIndex !== -1) {
//             // If the product already exists, update its quantity
//             wishlistItems[existingProductIndex].quantity += productData.quantity;
//         } else {
//             // If the product is not in the wishlist, add it
//             wishlistItems.push(productData);
//         }
  
//         // Save the updated wishlist items to local storage
//         localStorage.setItem("wishlist_items", JSON.stringify(wishlistItems));
  
//         // Provide feedback to the user
//         alert("Product added to wishlist!");
//     });
//   }
  



//   // Update wishlist count displayed on the webpage
//   let wishlistItems = JSON.parse(localStorage.getItem("wishlist_items")) || [];
//   const wishlistCountSpan = document.getElementById("wishlist_count");
//   wishlistCountSpan.innerText = wishlistItems.length || 0;



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


  // Update wishlist count displayed on the webpage
//   let wishlistItems = JSON.parse(localStorage.getItem("wishlist_items")) || [];
//   const wishlistCountSpan = document.getElementById("wishlist_count");
//   wishlistCountSpan.innerText = wishlistItems.length || 0;


// document.addEventListener("DOMContentLoaded", function () {
//     // Function to fetch and display wishlist items
//     function displayWishlistItems() {
//         const wishlistItems = JSON.parse(localStorage.getItem("wishlist_items")) || [];
//         const wishlistContainer = document.getElementById("wishlist_items");

//         // Clear the container before adding new items
//         wishlistContainer.innerHTML = "";

//         // Check if there are items in the wishlist
//         if (wishlistItems.length === 0) {
//             wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
//         } else {
//             wishlistItems.forEach((item, index) => {
//                 const wishlistItemHTML = `
//                     <div class="col-md-4">
//                         <div class="product-item">
//                             <img src="${item.image}" alt="Product Image" class="product-image">
//                             <h3>${item.name}</h3>
//                             <p>$${item.price}</p>
//                             <button class="btn btn-danger remove-from-wishlist" data-index="${index}">Remove</button>
//                         </div>
//                     </div>
//                 `;
//                 wishlistContainer.insertAdjacentHTML("beforeend", wishlistItemHTML);
//             });
//         }
//     }

//     // Call the function to display wishlist items when the page loads
//     displayWishlistItems();

//     // Add event listener to remove items from the wishlist
//     document.querySelectorAll('.remove-from-wishlist').forEach((button) => {
//         button.addEventListener('click', (event) => {
//             const index = parseInt(event.target.dataset.index);
//             removeItemFromWishlist(index);
//             displayWishlistItems(); // Refresh the wishlist after removing the item
//         });
//     });

//     // Function to remove item from wishlist
//     function removeItemFromWishlist(index) {
//         const wishlistItems = JSON.parse(localStorage.getItem("wishlist_items")) || [];
//         wishlistItems.splice(index, 1);
//         localStorage.setItem("wishlist_items", JSON.stringify(wishlistItems));
//     }
// });