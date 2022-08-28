const url = "https://zelda-epona.site/rainydays/wp-json/wc/store/products?category=17&per_page=100";

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const productContainer = document.querySelector(".femaleproduct-container");

async function getWomensProducts() {

        try {
                const response = await fetch(corsFix);
                const results = await response.json();

                productContainer.innerHTML = "";

                for(let i = 0; i < results.length; i++) {
                        console.log(results[i]);

                        productContainer.innerHTML += `<div class="femaleproduct"> 
                                                        <a class="product-specific" href="stormcoat.html?id=${results[i].id}">
                                                        <h2>${results[i].name}</h2>
                                                        <img src="${results[i].images[0].src}" alt="${results[i].name}" class="productmen"></img>
                                                        <p>${results[i].price_html}</p>
                                                        </a>
                                                        <button id="item-${results[i].id}" class="atc" data-product="${results[i].id}">Add</button>
                                                        </div>
                                                        `
                }
        }
        catch(error) {
                console.log(eror);
                productContainer.innerHTML = message("error", error);
        }
}

getWomensProducts();