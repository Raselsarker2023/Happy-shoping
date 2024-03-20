const loadSarvices=()=>{
    fetch('http://127.0.0.1:8000/product/list/')
    .then((res) => res.json())
    .then((data) => displaySarvice(data))
    .catch((err) => console.error(err))
}

const displaySarvice=(services)=>{
    console.log(services);
    services.forEach((service)=>{
        const parent = document.getElementById(product_slider);
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="cards shadow h-100">
                    <div class="ratio ratio-16x9">
                    <img src=${service.images} class="card-img-top" loading="lazy" alt="...">
                    </div>
                    <div class="card_body p-3 p-xl-5">
                    <h3 class="card_title h5">${service.name}</h3>
                    <p class="card_text">${service.description.slice(0, 50)}</p>
                    <div><a href="#" class="btn btn-primary">Details...</a>
                    </div>
                    </div>
            </div>
        `;
        parent.appendChild(li);
    });
};


const loadProducts=() => {
    fetch("http://127.0.0.1:8000/product/list/")
    .then((res)=>res.json())
    .then((data) => displayProducts(data?. result));
};

const displayProducts=(products) => {
    products?.forEach((product) => {
        console.log(product);
        const parent = document.getElementById(products);
        const div = document.createElement("div");
        div.classList.add("card");
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


const loadCategories = () => {
    fetch("http://127.0.0.1:8000/category/category_list/")
    .then((res)=>res.json())
    .then((data) => {
        data.forEach((item) =>{
            const parent = getElementById("drop_category");
            const li = document.createElement("li");
            li.classList.add("dropdown-item");
            li.innerText = item?.name;
            parent.appendChild(li);
        });
    });
};



const loadReview = () => {
    fetch("http://127.0.0.1:8000/review/list/")
    .then((res)=>res.json())
    .then((data) => displayReview(data));
};

const displayReview = (reviews) => {
    reviews.forEach((review) => {
        const parent = getElementById("review-container");
        const div = document.createElement("div");
        div.classList.add("review-card");
        div.innerHTML = `
        <img src="${review.images}" alt="review" />
                <h4>${review.reviewer}</h4>
                <p>
                    ${review.body.slice(0, 150)}
                </p>
                <h6>${review.rating}</h6>
        `;
        parent.appendChild(div)
    });
};




loadSarvices();
loadProducts();
loadCategories();
loadReview();