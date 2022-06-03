import { maleProductList } from "./constants/productListMen.js";
const maleProductContainer = document.querySelector(".maleproduct-container");

maleProductList.forEach(function(product) {
    console.log(product);
    maleProductContainer.innerHTML +=
    `
    <div class="maleproduct">
    <a href="stormcoat.html?id=${product.id}">
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}">
    <p>Price: ${product.price} $</p>
    </a>
    <button class="atc">Add to cart</button>
    </div>
    `
})