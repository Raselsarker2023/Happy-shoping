
// NEW PRODUCT SET

let allProducts = [];

const loadProducts = () => {
  fetch("https://smart-shoping-whb0.onrender.com/product/list/")
    .then((response) => response.json())
    .then((data) => displayProducts(data))
    .catch((error) => console.error("Error fetching products:", error));
};

const displayProducts = (productsData) => {
  let data = productsData;
  if (allProducts.length > 0) {
    data = allProducts;
  }
  const productsContainer = document.getElementById("products");

  console.log("data:", data);
  productsContainer.innerHTML = "";
  data?.forEach((product) => {
    
    const card = document.createElement("div");
    card.classList.add("p-cart", "cursor-pointer");

    card.innerHTML = `
   
    <div  class="card-shadow ">
    <img src="${product.image}" class="card-img-top" loading="lazy" alt="${
      product.name
    }">
    <div class="card-body d-flex flex-column flex-md-row">
      <div class="flex-grow-1">
      <strong><p >${product.name}</p></strong>
        <p class="card-text">${product.description}</p>
        <div class="card-text">$${product.price}</div>
        <p class="card-rating">$${product.rating}</p>
        <div class="card-text"><del>$${product.price}</del> ${parseInt(
      product.price - product.price * 0.15
    )} 15%off</div>
      </div>
    </div>
  </div>
   
      `;
    card.addEventListener("click", () => {
      window.location.href = `details.html?id=${product.id}`;
    });
    productsContainer.appendChild(card);
  });
};

loadProducts();




// const loadCategories = () => {
//   fetch("https://smart-shoping-whb0.onrender.com/category/category_list/")
//     .then((res) => res.json())
//     .then((data) => {
//       const parent = document.getElementById("drop_category");
//       data.forEach((item) => {
//         const li = document.createElement("li");
//         li.classList.add("dropdown-item");
//         li.innerText = item.name;
//         li.onclick = () => loadProductsByCategory(item.name);
//         parent.appendChild(li);
//       });
//     });
// };

// const loadProductsByCategory = (categoryName) => {
//   fetch(`https://smart-shoping-whb0.onrender.com/product/products_by_category/${categoryName}`)
//     .then((res) => res.json())
//     .then((data) => {
//       // Clear existing products
//       const productList = document.getElementById("product_list");
//       productList.innerHTML = "";

//       // Display products for the selected category
//       data.forEach((product) => {
//         const productItem = document.createElement("div");
//         productItem.classList.add("product");
//         productItem.innerHTML = `
//           <h3>${product.name}</h3>
//           <p>${product.description}</p>
//           <p>Price: ${product.price}</p>
//         `;
//         productList.appendChild(productItem);
//       });
//     });
// };

// loadCategories();



// category diya product fillter korbo akhany.
const loadProductsByCategory = (category) => {
  document.getElementById("products").innerHTML = "";
  console.log(search);

  // If category is "All", display all products
  if (category === "All") {
    displayProducts(allProducts);
  } else {
    // Filter products based on the selected category
    const filteredProducts = allProducts.filter(product => product.category === category);
    displayProducts(filteredProducts);
  }
};

// Function to load categories
const loadCategories = () => {
  fetch("https://smart-shoping-whb0.onrender.com/category/category_list/")
    .then((res) => res.json())
    .then((data) => {
      const parent = document.getElementById("drop_category");
      data.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("dropdown-item");
        li.innerText = item.name;
        li.onclick = () => loadProductsByCategory(item.name);
        parent.appendChild(li);
      });
    });
};

loadCategories();



// Search products by category implementation

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = document.getElementById("search").value;
    fetch(
      `https://smart-shoping-whb0.onrender.com/product/list/?search=${
        searchValue ? searchValue : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        allProducts = data;
        displayProducts();
      })
      .catch((error) => console.error("Error fetching products:", error));
  };



// Review section implement here
  const loadReviews = () => {
    fetch("https://smart-shoping-whb0.onrender.com/product/review/")
    .then((res)=>res.json())
    .then((data) => displayReviews(data));
  };

  const displayReviews = (reviews) => {
    const parent = document.getElementById("review-container");
    parent.innerHTML = ""; // Clear existing reviews before appending new ones
    reviews.forEach((review) => {
        const div = document.createElement("div");
        div.classList.add("review-card");
        div.innerHTML = `
        <img src="${review.images}" alt="review" />
        <h4>${review.reviewer}</h4>
        <p>${review.body.slice(0, 150)}</p>
        <h6>${review.rating}</h6>
        `;
        parent.appendChild(div);
    });
  };

  const submitReview = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const rating = document.getElementById("rating").value;

    const reviewData = {
        reviewer: name,
        email: email,
        body: message,
        rating: rating
    };

    fetch("https://smart-shoping-whb0.onrender.com/product/review/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("Review added successfully:", data);
        loadReviews(); // Reload reviews after adding a new one
    })
    .catch((error) => {
        console.error("Error adding review:", error);
    });
  };

  document.getElementById("review-form").addEventListener("submit", submitReview);

  // Load reviews when the page loads
  document.addEventListener("DOMContentLoaded", loadReviews);





  // const loadCategories = () => {
  //   fetch("https://smart-shoping-whb0.onrender.com/category/category_list")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.forEach((item) => {
  //         const parent = document.getElementById("drop_category");
  //         const li = document.createElement("li");
  //         li.classList.add("dropdown-item");
  //         li.innerText = item?.name;
  //         parent.appendChild(li);
  //       });
  //     });
  // };

  // loadCategories(); 