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

  // Update Quantity
  function updateQuantity(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = parseInt(productInput.value);

    if (isIncreasing) {
      productNumber++;
    } else if (productNumber > 0) {
      productNumber--;
    }

    productInput.value = productNumber;
    updateItemTotal(product, productNumber, price);
    calculateTotal();
  }

  // Update Item Total Price
  function updateItemTotal(product, quantity, price) {
    const itemTotal = document.getElementById(product + "-total");
    itemTotal.innerText = quantity * price;
    calculateTotal(); // Call calculateTotal() after updating the item total
  }

  // Calculate Total
  function calculateTotal() {
    let subTotal = 0;

    // Loop through each product type
    ["case", "case"].forEach((product) => {
      const productNumber = getInputvalue(product);
      const productPrice = product === "case" ? 1219 : 59; // Update price accordingly

      subTotal += productNumber * productPrice;
    });

    const tax = subTotal * 0.1; // Assuming tax is 10% of the subtotal
    const totalPrice = subTotal + tax;

    // Update on the HTML
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
  }

  // Get Input Value
  function getInputvalue(product) {
    const productInput = document.getElementById(product + "-number");
    return parseInt(productInput.value);
  }

  // Event Listeners
  document.getElementById("case-plus").addEventListener("click", function () {
    updateQuantity("case", 59, true);
  });

  document.getElementById("case-minus").addEventListener("click", function () {
    updateQuantity("case", 59, false);
  });

  document.getElementById("case-number").addEventListener("click", function () {
    updateQuantity("case", 1219, true);
  });

  document.getElementById("case-minus").addEventListener("click", function () {
    updateQuantity("case", 1219, false);
  });

  document.querySelectorAll(".btn-danger").forEach((button) => {
    button.addEventListener("click", function () {
      // Remove item from the cart
      // Recalculate total
    });
  });

  document.querySelector(".check-out").addEventListener("click", function () {
    // Implement checkout functionality
  });
});



const getProducts = () => {
  let cart_item = localStorage.getItem("cart_items");
  console.log(cart_item, "cart_items");
}
getProducts();




// Function to fetch cart data from the API
const userCartdata = () => {
  fetch('https://e-shoping-tkrl.onrender.com/card/list/')
      .then(res => res.json())
      .then(data => {
          updateCartUI(data);
      })
      .catch(error => console.error('Error fetching cart data:', error));
}

// Function to update the cart UI with data
const updateCartUI = (cartData) => {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = '';

  
  cartData.items.forEach(item => {
      const cartItemHTML = `
          <div class="cart-item">
              <div class="row">
                  <div class="col-md-7 center-item mx-auto">
                      <img src="${item.image}" alt="${item.name}">
                      <h5>${item.name}</h5>
                  </div>
                  <div class="col-md-5 center-item">
                      <div class="input-group number-spinner">
                          <button class="btn btn-default case-minus" data-id="${item.id}"><i class="fas fa-minus"></i></button>
                          <input type="number" min="0" class="form-control text-center case-number" value="${item.quantity}">
                          <button class="btn btn-default case-plus" data-id="${item.id}"><i class="fas fa-plus"></i></button>
                      </div>
                      <h5>$ <span class="case-total">${item.total}</span> </h5>
                      <button class="btn btn-danger remove-item" data-id="${item.id}">Remove</button>
                  </div>
              </div>
          </div>
      `;
      cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
  });

  // Update subtotal, tax, and total
  document.getElementById('sub-total').innerText = cartData.subtotal;
  document.getElementById('tax-amount').innerText = cartData.tax;
  document.getElementById('total-price').innerText = cartData.total;
}

// Event listener for check out button
document.querySelector('.check-out').addEventListener('click', () => {
  console.log('Checkout button clicked');
});


// Event delegation for +/- buttons and remove button
document.addEventListener('click', event => {
  if (event.target.classList.contains('case-minus')) {
      const itemId = event.target.dataset.id;
      console.log('Decrease quantity for item:', itemId);
      
  } else if (event.target.classList.contains('case-plus')) {
      const itemId = event.target.dataset.id;
      console.log('Increase quantity for item:', itemId);
     
  } else if (event.target.classList.contains('remove-item')) {
      const itemId = event.target.dataset.id;
      console.log('Remove item:', itemId);
  }
});


document.addEventListener('DOMContentLoaded', fetchCartData);

