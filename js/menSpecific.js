const detailContainer = document.querySelector(".specific.product");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://zelda-epona.site/rainydays/wp-json/wc/store/products?category=29&per_page=100" + id;

console.log(url);

async function fetchProduct() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);

        title.innerHTML = `${details[0].name}`;
        header.innerHTML = `<h1>${details[0].name}</h1>`;

    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}

fetchProduct ();

function createHtml(details) {
        detailContainer.innerHTML = `<div class="specific-result">
    <h2>${details[0].}
`
}