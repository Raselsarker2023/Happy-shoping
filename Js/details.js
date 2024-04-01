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

    let user_id = localStorage.getItem("user_id");
    let old_cart_item = localStorage.getItem("cart_items");
    let parsedOldCartDAta = JSON.parse(old_cart_item)
    let quantity00 = 0
parsedOldCartDAta?.map(item => {
  let current = item.quantity
  quantity00+current
})


    
    if (parsedOldCartDAta && parsedOldCartDAta.length) {

      /// =========================== checking if  product already exists 

      if(parsedOldCartDAta?.find(item=>item.product===addToCartData.product)){

         
        let currentProduct = parsedOldCartDAta?.find(item=>item.product===addToCartData.product)
   
        currentProduct.quantity = currentProduct.quantity + 1


        let filtered = parsedOldCartDAta.filter(item => item.product !==currentProduct?.product)

        let margedDAta = [...filtered, currentProduct]
      localStorage.setItem("cart_items", JSON.stringify(margedDAta))
      }else{

        //================== adding new product
        let margedDAta = [...parsedOldCartDAta, addToCartData]
        localStorage.setItem("cart_items", JSON.stringify(margedDAta))
      }
    
    }
    else{
      localStorage.setItem("cart_items", JSON.stringify([addToCartData]));
      console.log("i am insit");

    }
  

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




// Update cart count function
const updateCartCount = () => {
  let cartItems = JSON.parse(localStorage.getItem("cart_items"));
  let totalQuantity = cartItems ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;
  document.getElementById("cart_count").innerText = totalQuantity;
}

document.getElementById("add_to_cart_btn").addEventListener("click", function () {
  updateCartCount();
});

updateCartCount();