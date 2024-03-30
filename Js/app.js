let allProducts = [];

const loadProducts = () => {
  fetch("https://e-shoping-tkrl.onrender.com/product/list/")
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
    //   .forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("rasel", "cursor-pointer");

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

// category options start
const loadCategories = () => {
  fetch("https://e-shoping-tkrl.onrender.com/category/category_list")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const parent = document.getElementById("drop_category");
        const li = document.createElement("li");
        li.classList.add("dropdown-item");
        li.innerText = item?.name;
        parent.appendChild(li);
      });
    });
};

loadCategories();

const handleSearch = (e) => {
  e.preventDefault();
  const searchValue = document.getElementById("search").value;
  fetch(
    `https://e-shoping-tkrl.onrender.com/product/list/?search=${
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

// const loadReview = () => {
//     fetch("https://e-shoping-tkrl.onrender.com/product/review/list/")
//     .then((res)=>res.json())
//     .then((data) => displayReview(data));
// };

// const displayReview = (reviews) => {
//     reviews.forEach((review) => {
//         const parent = getElementById("review-container");
//         const div = document.createElement("div");
//         div.classList.add("review-card");
//         div.innerHTML = `
//         <img src="${review.images}" alt="review" />
//                 <h4>${review.reviewer}</h4>
//                 <p>
//                     ${review.body.slice(0, 150)}
//                 </p>
//                 <h6>${review.rating}</h6>
//         `;
//         parent.appendChild(div)
//     });
// };

// loadCategories();
// loadReview();
