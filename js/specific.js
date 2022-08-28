const detailContainer = document.querySelector(".specific-product");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://zelda-epona.site/rainydays/wp-json/wc/store/products/" + id;
console.log(url);

async function fetchProduct() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

} catch(error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
}
}

fetchProduct ();

function createHtml(details) {

        detailContainer.innerHTML = `<div class="specific-result">
                                    <h2>${details.name}</h2>
                                    <img src="${details.images[0].src}" alt="${details.name}" class="single-product"></img>
                                    <div class="product-description">
                                    <p>${details.description}</p>
                                    <p class="price">${details.price_html}</p>
                                    <button id="item-${details.id}" class="atc" data-product="${details.id}">Add</button>
                                    </div> </div>
                                    `
}
