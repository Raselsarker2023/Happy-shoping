
// const loadProducts = () => {
//     fetch('https://e-shoping-tkrl.onrender.com/product/list/')
//     .then((res) => res.json())
//     .then((data) => displayProducts(data))
//     .catch((err) => console.error(err))
// }

// const displayProducts = (products) => {
//     const parent = document.getElementById('products');
//     products.forEach((product) => {
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//             <div class="card shadow h-100">
//                 <p><i class="fa-solid fa-heart"></i></p>
//                 <img src="${product.images}" class="card-img-top" loading="lazy" alt="...">
//                 <div class="card-body d-flex flex-column flex-md-row">
//                     <div class="flex-grow-1">
//                         <strong><a href="details.html">${product.name}</a></strong>
//                         <p class="card-text">${product.description}</p>
//                         <div class="card-text">$${product.price}</div>
//                         <p class="card-rating">${generateStars(product.rating)}</p>
//                         <div class="card-text"><del>$${product.price}</del> 15%off</div>
//                     </div>
//                 </div>
//             </div>
//         `;
//         parent.appendChild(div);
//     });
// };

// const generateStars = (rating) => {
//     const stars = '⭐';
//     return stars.repeat(rating);
// };

// loadProducts();




const loadProducts=() => {
    fetch("https://e-shoping-tkrl.onrender.com/product/list/")
    .then((res)=>res.json())
    .then((data) => displayProducts(data?. result));
};

const displayProducts=(products) => {
    console.log(products);
    products?.forEach((product) => {

        console.log(product);
        const parent = document.getElementById(products);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <p><i class="fa-solid fa-heart"></i></p>
                    <img src=${products?.images} class="card-img-top" loading="lazy" alt="...">
                    <div class="card-body d-flex flex-column flex-md-row">
                        <div class="flex-grow-1">
                            <strong>Basketball Shoes</strong>
                            <p class="card-text">${products?.title}</p>
                            <p class="card-text">${products?.description}</p>
                            <div class="card-text">${products?.price}</div>
                            <div class="card-text">$${products?.price.toFixed(2)} <del>${products.price.toFixed(2)}</del> 15% off</div>
                            <p class="card-rating">${products?.rating}⭐</p>
                        </div>
                    </div>
        `;
        parent.appendChild(div)
    })
};
loadProducts();



// const loadCategories = () => {
//     fetch("https://e-shoping-tkrl.onrender.com/product/category/category_list/")
//     .then((res)=>res.json())
//     .then((data) => {
//         data.forEach((item) =>{
//             const parent = getElementById("drop_category");
//             const li = document.createElement("li");
//             li.classList.add("dropdown-item");
//             li.innerText = item?.name;
//             parent.appendChild(li);
//         });
//     });
// };



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

