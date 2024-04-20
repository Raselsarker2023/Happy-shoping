const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");



const addToCartData = {
  product: parseInt(productId),
  cart: 2,
};
handleProducts ()



//fetch product data byid
async function fetchProductById(productId){
  const  res = await fetch(`https://e-shoping-tkrl.onrender.com/product/list/${productId}`)
  const product = await res.json()

return product;
}
// adding product in html
async function handleProducts (){
  const productId = urlParams.get("id");
  const product = await fetchProductById(productId)
  document.getElementById("productImage").src = product.image;
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productPrice").innerText = `$${product.price}`;
  document.getElementById("productDescription").innerText =
    product.description;
}




document
  .getElementById("add_to_cart_btn")
  .addEventListener("click", async function () {
    const productId = urlParams.get("id");
    let user_id = localStorage.getItem("user_id");
    const productDataWithOutUser = await fetchProductById(productId)
    const productData =  {
      ...productDataWithOutUser,
      user_id: user_id

    }

    console.log(productData, 'oooooooooooooooooooooooooo')

    const quantity = document.getElementById("quantity_value").value;
    productData.quantity = parseInt(quantity);


    let old_cart_item = localStorage.getItem("cart_items");
    let parsedOldCartDAta = JSON.parse(old_cart_item)
    let quantity00 = 0
    parsedOldCartDAta?.map(item => {
    let current = item.quantity
    quantity00+current
})


    
    if (parsedOldCartDAta && parsedOldCartDAta.length) {

      /// =========================== checking if  product already exists 

      if(parsedOldCartDAta?.find(item=>item.id===productData.id)){

         
        let currentProduct = parsedOldCartDAta?.find(item=>item.id===productData.id)
   
        currentProduct.quantity = currentProduct.quantity + 1


        let filtered = parsedOldCartDAta.filter(item => item.id !==currentProduct?.id)

        let margedDAta = [...filtered, currentProduct]
      localStorage.setItem("cart_items", JSON.stringify(margedDAta))
      }else{

        //================== adding new product
        let margedDAta = [...parsedOldCartDAta, productData]
        localStorage.setItem("cart_items", JSON.stringify(margedDAta))
      }
    
    }
    else{
      localStorage.setItem("cart_items", JSON.stringify([productData]));
      console.log("i am insit");

    }

  });



