document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://smart-shoping-whb0.onrender.com/cart/add/";

  // Fetch Cart Items
  function fetchCartItems() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  }

  fetchCartItems();

  // Add to Wishlist
  function addToWishlist(productName, productPrice, productImage) {
    let wishlistItems =
      JSON.parse(localStorage.getItem("wishlist_items")) || [];
    const newItem = {
      name: productName,
      price: productPrice,
      image: productImage,
    };
    wishlistItems.push(newItem);
    localStorage.setItem("wishlist_items", JSON.stringify(wishlistItems));
    alert("Product added to wishlist!");
    updateWishlistCount(); // Update wishlist count in the navbar
  }

  // Event Listener for Add to Wishlist button
  document.getElementById("add_to_wishlist").addEventListener("click", function () {
    const productName = document.getElementById("productName").innerText;
    const productPrice = document.getElementById("productPrice").innerText;
    const productImage = document.getElementById("productImage").src;
    addToWishlist(productName, productPrice, productImage);
  });

  // Function to update wishlist count in the navbar
  function updateWishlistCount() {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlist_items")) || [];
    const wishlistCountSpan = document.getElementById("wishlist_count");
    wishlistCountSpan.innerText = wishlistItems.length || 0;
  }

  // Function to display wishlist items on the wishlist page
  function displayWishlistItems() {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlist_items")) || [];
    const wishlistContainer = document.getElementById("wishlist_items");
    wishlistContainer.innerHTML = ""; // Clear the container before adding new items

    wishlistItems.forEach((item, index) => {
      const wishlistItemHTML = `
        <div class="card row wish-container" style="width: 18rem;">
          <img class="card-img-top" src="${item.image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <h5 class="card-title">${item.price}</h5>
          </div>
        </div>
      `;
      wishlistContainer.insertAdjacentHTML('beforeend', wishlistItemHTML);
    });
  }

  displayWishlistItems(); // Display wishlist items on page load
  updateWishlistCount(); // Update wishlist count in the navbar
});
