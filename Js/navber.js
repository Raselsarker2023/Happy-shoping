

// cart items count
let cart_item = JSON.parse(localStorage.getItem("cart_items"))
const cart_count_Span = document.getElementById("cart_count");
cart_count_Span.innerText= cart_item?.length  || 0
console.log("Cart item count succesfully.");


// wishlist items count
let wishlistItems = JSON.parse(localStorage.getItem("wishlist_items")) || [];
const wishlistCountSpan = document.getElementById("wishlist_count");
wishlistCountSpan.innerText = wishlistItems.length || 0;
console.log("Wishlist item count succesfully.");