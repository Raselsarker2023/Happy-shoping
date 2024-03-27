const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
console.log("woi: productId");
console.log(urlParams, productId);

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
