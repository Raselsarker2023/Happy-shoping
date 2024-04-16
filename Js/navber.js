


let cart_item = JSON.parse(localStorage.getItem("cart_items"))


const cart_count_Span = document.getElementById("cart_count");

cart_count_Span.innerText= cart_item?.length  || 0

console.log("O amr jan pakhi");


