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

