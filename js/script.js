let userinfo = document.querySelector("#user_info");
let userdata = document.querySelector("#user");
let logout = document.querySelector("#logout");
let links = document.querySelector("#link");
let username = localStorage.getItem("username");

if(localStorage.getItem("username")){
    links.style.display = "none";
    userinfo.style.display = "flex";
    logout.style.display = "flex";
    userdata.innerHTML = "Hello! " + username;
}

if(logout){
    logout.addEventListener("click", function(e){
        e.preventDefault();

        localStorage.clear()

        window.location = "register.html";
    });
}
function clearCart(){
    localStorage.removeItem("productsInCart")
}
//search
let searchType = document.querySelector("#searchType");
let searchInput = document.querySelector("#searchInput");
let searchBtn = document.querySelector("#searchBtn");
// Products

let allproduct = document.querySelector(".products");

let products = [
    {
        id: 1,
        image: "images/a12.jpg",
        name: "Emerald Accessory",
        category: "Selver Accessory",
        price: "$2500"
    },
    {
        id: 2,
        image: "images/a18.jpg",
        name: "Emerald Crown",
        category: "Silver Accessory",
        price: "$650"
    },

    {
        id: 3,
        image: "images/a9.jpg",
        name: "Emerald Necklace",
        category: "Silver Accessory",
        price: "$1123"
    },

    {
        id: 4,
        image: "images/a26.jpg",
        name: "Emerald Bracelet",
        category: "Silver Accessory",
        price: "$890"
    },
    {
        id: 5,
        image: "images/a23.jpg",
        name: "Emerald Necklace",
        category: "Golden Accessory",
        price: "$578"
    },
    {
        id: 6,
        image: "images/a31.jpg",
        name: "Emerald Ring",
        category: "Golden Accessory",
        price: "$190"
    },
    {
        id: 7,
        image: "images/a19.jpg",
        name: "Emerald Crown",
        category: "Golden Accessory",
        price: "$4530"
    },
    {
        id: 8,
        image: "images/a30.jpg",
        name: "Emerald Ring",
        category: "Silver Accessory",
        price: "$122"
    },
    {
        id: 9,
        image: "images/a22.jpg",
        name: "Emerald Earring",
        category: "Silver Accessory",
        price: "$230"
    },
    {
        id: 10,
        image: "images/a3.jpg",
        name: "Emerald Necklace",
        category: "Silver Accessory",
        price: "$2450"
    },
    {
        id: 11,
        image: "images/a2.jpg",
        name: "Emerald Accesory",
        category: "Silver Accessory",
        price: "$3245"
    },
    {
        id: 12,
        image: "images/a29.jpg",
        name: "Emerald Ring",
        category: "Silver Accessory",
        price: "$198"
    },
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
function drawItems(data = products){

    let y = data.map((item)=>{

        return `
        <div class="product-item">

            <img src="${item.image}" alt="photo" style="width:300px; height:300px"/>

            <h3 class="product-name">
                Name: ${item.name}
            </h3>

            <p class="product-category">
                Category: ${item.category}
            </p>

            <span class="price">
                ${item.price}
            </span>

            <div class="ee">
                <i class="fas fa-heart" 
                style="color:${favorites.some(fav => fav.id === item.id) ? "red" : "black"}"
                onclick="addFavorite(${item.id}, this)"></i>
                <button class="add-cart" onclick="addToCart(${item.id})">
                    Add To Cart
                </button>
            </div>

        </div><!-- end product item -->`
        ;

    });

    allproduct.innerHTML = y.join("");

}
drawItems();
let badge = document.querySelector(".badge")
badge.style.display="none"
let basketDiv = document.querySelector(".cart div")

let addedItem = JSON.parse(localStorage.getItem("productsInCart")) || [];
drawCart();

let search = document.querySelector("#searchInput")
let selecttype = document.querySelector("#searchType")
function searchProduct(){
    console.log("search")
    const text = search.value.toUpperCase()
    const type = selecttype.value;
    let result = products.filter((products)=>{
        const name = products.name.toUpperCase()
        const category = products.category.toUpperCase()

        if(type === "name"){
            return name.includes(text)
        }else if(type === "category"){
            return category.includes(text)
        }else{
            return name.includes(text) || category.includes(text)
        }
    })
    drawItems(result)
}
console.log("gggggg")
search.addEventListener("input",searchProduct)
selecttype.addEventListener("change",searchProduct)
searchBtn.addEventListener("click", searchProduct);


function check(){
    if(localStorage.getItem("username")){
        window.location = "basket.html"
    }else{
        window.location = "register.html"
    }
}
    function addToCart(id){
        if(!localStorage.getItem("username")){
            window.location = "register.html"
            return;
        }
        let choosenItem = products.find((item) => item.id === id)
        let exist = addedItem.find((item) => item.id === id);

        if(exist){
            exist.quantity++;
        }else{
            choosenItem.quantity = 1;
            addedItem.push(choosenItem);
        }
            localStorage.setItem("productsInCart",JSON.stringify(addedItem))
            drawCart();
        }
let shoppingCartIcon = document.querySelector(".shopping-cart a")
let cartProduct = document.querySelector(".cart")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
    if(basketDiv.innerHTML !=""){
        if(cartProduct.style.display=="block"){
            cartProduct.style.display="none"
        }else{
            cartProduct.style.display="block"
        }
    }
}

function drawCart(){
    basketDiv.innerHTML = "";

    addedItem.forEach((item)=>{
        basketDiv.innerHTML += 
        `<div>
            <h3>${item.name}</h3>
            <button onclick="minus(${item.id})">-</button>
            <span>${item.quantity}</span>
            <button onclick="plus(${item.id})">+</button>
        </div>`
    });

    let totalQuantity = addedItem.reduce((sum,item)=> sum + item.quantity,0);

    if(totalQuantity > 0){
        badge.style.display = "block";
        badge.innerHTML = totalQuantity;
    }else{
        badge.style.display = "none";
    }

    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
}

    badge.innerHTML = addedItem.reduce((sum,item)=> sum + item.quantity,0);

    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
function plus(id){

    let item = addedItem.find((item)=> item.id === id);

    item.quantity++;

    drawCart();

}
function minus(id){

    let item = addedItem.find((item)=> item.id === id);

    if(item.quantity > 1){

        item.quantity--;

    }else{

        addedItem = addedItem.filter((item)=> item.id !== id);

    }

    drawCart();

}


function addFavorite(id, icon){

    let product = products.find((item)=> item.id === id);

    let exist = favorites.find((item)=> item.id === id);


    if(exist){

        favorites = favorites.filter((item)=> item.id !== id);

        icon.style.color = "black";

    }else{

        favorites.push(product);

        icon.style.color = "red";
    }


    localStorage.setItem("favorites", JSON.stringify(favorites));
}


