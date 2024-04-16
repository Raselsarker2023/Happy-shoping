document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://e-shoping-tkrl.onrender.com/card/add/";

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
  }

  // Event Listeners
  document
    .getElementById("add_to_wishlist")
    .addEventListener("click", function () {
      const productName = document.getElementById("productName").innerText;
      const productPrice = document.getElementById("productPrice").innerText;
      const productImage = document.getElementById("productImage").src;
      console.log("productName: ", productName);
      addToWishlist(productName, productPrice, productImage);
    });

  document.querySelectorAll(".btn-danger").forEach((button) => {
    button.addEventListener("click", function () {
      // Handle other button clicks if needed
    });
  });
});





  // Update wishlist count displayed on the webpage
  let wishlistItems = JSON.parse(localStorage.getItem("wishlist_items")) || [];
  const wishlistCountSpan = document.getElementById("wishlist_count");
  wishlistCountSpan.innerText = wishlistItems.length || 0;

  console.log("Jan pakhi");
