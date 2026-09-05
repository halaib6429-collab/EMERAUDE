let cartProducts = document.querySelector("#cartProducts");
let favoriteProducts = document.querySelector("#favoriteProducts");


let addedItem = JSON.parse(localStorage.getItem("productsInCart")) || [];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];



function drawBasket(){
    cartProducts.innerHTML="";
    addedItem.forEach(item=>{

        cartProducts.innerHTML += 
        `

        <div class="product-item">

            <img src="${item.image}">

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

            <button class="add-cart" onclick="removeFromBasket(${item.id})" style="margin_bottom:10px; cursor:pointer ;background-color:red ;color:rgb(208,208,208) ; border:none ; border-radius:8px; padding:10px 15px; margin-top:8px">
            Remove From Cart
            </button>


            </div>

        </div>`

        ;

    });
    favoriteProducts.innerHTML="";


    favorites.forEach(item=>{


        favoriteProducts.innerHTML += 
        `
        <div class="product-item">

            <img src="${item.image}">

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

            <i class="fas fa-heart love" onclick="removeFavorite(${item.id})"style="font-size:20px;color:red ;cursor:pointer ;margin-top: 10px ;margin_bottom:10px; "></i>

            </div>


        </div>`

        ;


    });


}
function removeFromBasket(id){

    addedItem = addedItem.filter(item=>item.id !== id);


    localStorage.setItem(
        "productsInCart",
        JSON.stringify(addedItem)
    );


    drawBasket();

}

function removeFavorite(id){

    favorites = favorites.filter(item=>item.id !== id);


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    drawBasket();

}



drawBasket();