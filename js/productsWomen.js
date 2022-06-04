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
    <a href="stormcoatwomen.html?id=${product.id}">
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}">
    <p>Price: ${product.price} $</p>
    </a>
    <button id="item-${product.id}" class="atc" data-product="${product.id}">Add</button>
    </div>
    `
})

const buttons = document.querySelectorAll(".atc")
buttons.forEach(function(button){
    button.onclick=function(event){

        const itemToAdd = femaleProductList.find(item => item.id === event.target.dataset.product);
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
        localStorage.setItem('carts',JSON.stringify(cartArray))

        const cartCounter = document.querySelector(".cart-counter");
        const carts = JSON.parse(localStorage.getItem('carts'));
        cartCounter.innerText = carts.length;
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