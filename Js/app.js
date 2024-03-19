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
}
loadSarvices();