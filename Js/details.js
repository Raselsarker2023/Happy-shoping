const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

console.log("productId: ", productId);

const addToCartData = {
  product: parseInt(productId),
  cart: 2,
};

fetch(`https://e-shoping-tkrl.onrender.com/product/list/${productId}`)
  .then((response) => response.json())
  .then((product) => {
    document.getElementById("productImage").src = product.image;
    document.getElementById("productName").innerText = product.name;
    document.getElementById("productPrice").innerText = `$${product.price}`;
    document.getElementById("productDescription").innerText =
      product.description;
  })
  .catch((error) => console.error("Error fetching product details:", error));

document
  .getElementById("add_to_cart_btn")
  .addEventListener("click", function () {
    const quantity = document.getElementById("quantity_value").value;
    addToCartData.quantity = parseInt(quantity);
    console.log(addToCartData);
    fetch("https://e-shoping-tkrl.onrender.com/card/add/", {
      body: JSON.stringify(addToCartData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => console.log("add to cart success", result))
      .catch((error) => console.error("add to card data", error));
  });
