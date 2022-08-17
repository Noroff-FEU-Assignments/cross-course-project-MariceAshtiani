
/* just a page with all JS i'm struggling with */ 


import { maleProductList } from "./constants/productListMen.js";
const maleProductContainer = document.querySelector(".maleproduct-container");
const cart = document.querySelector("#cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];


maleProductList.forEach(function(product) {
    maleProductContainer.innerHTML +=
    `
    <div class="maleproduct">
    <a href="stormcoat.html?id=${product.id}">
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}">
    <p>Price: ${product.price} $</p>
    </a>
    <button id="item-${product.id}" class="atc" data-product="${product.id}">Add</button>
    </div>
    `
})

const buttons = document.querySelectorAll(".atc")
buttons.forEach(function(button) {
    button.onclick = function(event){

        const itemToAdd = maleProductList.find(item => item.id === event.target.dataset.product);
        const addBtn = document.getElementById(`item-${itemToAdd.id}`);

        const addBtnText = addBtn.innerText;
        if (addBtnText === 'Add') {
            addBtn.innerText = "Remove";
            cartArray.push(itemToAdd);
        } else {
            addBtn.innerText = "Add";
            cartArray = cartArray.filter(item => item.id !== itemToAdd.id);
        }
        console.log({cartArray});
        localStorage.setItem('carts', JSON.stringify(cartArray))

        const cartCounter = document.querySelector(".cart-counter");
        const carts = JSON.parse(localStorage.getItem('carts'));
        cartCounter.innerText = carts.length;
    }
}) 




const url = "https://zelda-epona.site/rainydays/wp-json/wc/store/products?category=29&per_page=100";

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".maleproduct-container");

const cart = document.querySelector("#cart");

const cartList = document.querySelector(".cart-list");

const totalContainer = document.querySelector(".total");

let cartArray = [];

async function getMensProducts() {

    try{

        const response = await fetch(corsFix);

        const results = await response.json();

        resultsContainer.innerHTML = "";

        for(let i = 0; i < results.length; i++) {
            console.log(results[i]);

            resultsContainer.innerHTML += `<div class="maleproduct"> 
                                            <a class="product-specific" href="stormcoat.html?id=${results[i].id}">
                                            <h2>${results[i].name}</h2>
                                            <img src="${results[i].images[0].src}" alt="${results[i].name}" class="productmen"></img>
                                            <p>${results[i].price_html}</p>
                                            </a>
                                            <button id="item-${results[i].id}" class="atc" data-product="${results[i].id}">Add</button>
                                            </div>
                                            `
        }

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
}

getMensProducts();

const buttons = document.querySelectorAll(".atc")
buttons.forEach(function(button) {
    button.onclick = function(event){

        const itemToAdd = maleProductList.find(item => item.id === event.target.dataset.product);
        const addBtn = document.getElementById(`item-${itemToAdd.id}`);

        const addBtnText = addBtn.innerText;
        if (addBtnText === 'Add') {
            addBtn.innerText = "Remove";
            cartArray.push(itemToAdd);
        } else {
            addBtn.innerText = "Add";
            cartArray = cartArray.filter(item => item.id !== itemToAdd.id);
        }
        console.log({cartArray});
        localStorage.setItem('carts', JSON.stringify(cartArray))

        const cartCounter = document.querySelector(".cart-counter");
        const carts = JSON.parse(localStorage.getItem('carts'));
        cartCounter.innerText = carts.length;
    }
})

