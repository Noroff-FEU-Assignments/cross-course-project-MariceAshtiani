import { femaleProductList } from "./constants/productListWomen.js";
const femaleProductContainer = document.querySelector(".femaleproduct-container");
const cart = document.querySelector("#cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

femaleProductList.forEach(function(product) {
    femaleProductContainer.innerHTML +=
    `
    <div class="femaleproduct">
    <h2>Your cart:</h2>
    <a href="stormcoatwomen.html?id=${product.id}">
    <h3>${product.name}</h3>
    <img src="${product.image}" alt="${product.name}">
    <p>Price: ${product.price} $</p>
    </a>
    <button class="atc" data-product="${product.id}">Add to cart</button>
    </div>
    `
})

const buttons = document.querySelectorAll(".atc")
buttons.forEach(function(button){
    button.onclick=function(event){
        const itemToAdd = femaleProductList.find(item => item.id === event.target.dataset.product);
        cartArray.push(itemToAdd);
        showCart(cartArray);
    }
})


function showCart(cartItems){
    cart.style.display = "block";
    cartList.innerHTML = "";
    let total = 0;
    cartItems.forEach(function(cartElement){
        total += cartElement.price;
        cartList.innerHTML +=
        `<div class="popup-content"> 
            <h3>${cartElement.name}</h3>
            <img src="${cartElement.image}" alt="${cartElement.name}" class="cart-image">
        </div>
        `
    })
    totalContainer.innerHTML = `Total: ${total}`;
}