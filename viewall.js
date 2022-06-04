// --------------Items database -----------
const products = [
    {
        id: 0,
        name: "Trolley Bags",
        price: 5000,
        imgSrc: "imgs/buyitem/item1.JPG",
    },
    {
        id: 1,
        name: "Curio Centre Round Cotton Large Swing",
        price: 1190,
        imgSrc: "imgs/buyitem/item2.JPG",
    },
    {
        id: 2,
        name: "Men's Footwear",
        price: 799,
        imgSrc: "imgs/buyitem/item3.JPG",
    },
    {
        id: 3,
        name: "Wrist Watches",
        price: 3994,
        imgSrc: "imgs/buyitem/item4.JPG",
    },
    {
        id: 4,
        name: "Men's Sweatshirts",
        price: 999,
        imgSrc: "imgs/buyitem/item5.JPG",
    },
    {
        id: 5,
        name: "boAt Storm Smartwatch",
        price: 2999,
        imgSrc: "imgs/buyitem/item6.JPG",
    },
    {
        id: 6,
        name: "Swingzy Swing for Adults and Kids Cotton, Wooden Large Swing",
        price: 1299,
        imgSrc: "imgs/buyitem/item7.JPG",
    },
    {
        id: 7,
        name: "Bike Mobile Holder",
        price: 799,
        imgSrc: "imgs/buyitem/item8.JPG",
    },
    {
        id: 8,
        name: "Premium Caps",
        price: 599,
        imgSrc: "imgs/buyitem/item9.JPG",
    },
    {
        id: 9,
        name: "Side Bags",
        price: 699,
        imgSrc: "imgs/buyitem/item10.JPG",
    },
    {
        id: 10,
        name: "Black, 4.1 Channel",
        price: 899,
        imgSrc: "imgs/buyitem/item11.JPG",
    },
    {
        id: 11,
        name: "Mi Band 3",
        price: 1990,
        imgSrc: "imgs/buyitem/item12.JPG",
    },
    {
        id: 12,
        name: "Prestige Atlas 1.5 Electric Kettle",
        price: 990,
        imgSrc: "imgs/buyitem/item13.webp",
    },
    {
        id: 13,
        name: "DENVER Hamilton Deodorant Deodorant Spray - For Men",
        price: 310,
        imgSrc: "imgs/buyitem/item14.webp",
    },
    {
        id: 14,
        name: "KENT ULTRA STORAGE 8 L UV + UF Water Purifier",
        price: 6990,
        imgSrc: "imgs/buyitem/item15.webp",
    },
    {
        id: 15,
        name: "Night Vision, Riding Glasses Wayfarer Sunglasses (53) e",
        price: 195,
        imgSrc: "imgs/buyitem/item16.webp",
    },
];


const productsEl = document.querySelector('.itemslistinner');



renderProdcuts();




// -------Render Products-------

function renderProdcuts() {
    products.forEach((product) => {
        productsEl.innerHTML += `
      <div class="item itemno1">
            <div class="imgitem">
                <img class="cartimg" src="${product.imgSrc}" alt="">
            </div>
            <div class="itemdetail">

                <p class="title">${product.name}</p>
                <p class="stars">
                    <span class="info">4.5<i class="fa fa-star" aria-hidden="true"></i></span>
                    <span class="asured"><img src="imgs/asure.png" alt=""></span>
                </p>
                <p class="price">upto ₹ ${product.price}</p>

                <div class="addtocartbtn" onclick='addToCartClicked(${product.id})'>
                    <p> <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add To Cart</p>
                </div>
                
            </div>

        </div>
      `
    });


}


// creating a array for cart Item

let cart = JSON.parse(localStorage.getItem("Cartsitems")) || [];


// cart number Show

let cartnumber = document.querySelector(".cartnumber");
function cartnumbershow() {
    cartnumber.innerHTML = `${cart.length}`
}

cartnumbershow();


// --------Add To Cart Click-----

function addToCartClicked(id) {

    if (cart.some((item) => item.id === id)) {
        popupalredyadded();
    } else {
        const item = products.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits: 1,
        });
        addtocartpopup();
    }

    updatecart();
}

// ---------Popup Show---------


let popup = document.querySelector(".popup");
function addtocartpopup() {

    popup.style.display = "block";

    setTimeout(function () {

        popup.style.display = "none";
    }, 1500);
}


let popupalready = document.querySelector(".popupalready");
function popupalredyadded() {
    popupalready.style.display = "block";

    setTimeout(function () {

        popupalready.style.display = "none";
    }, 1500);
}

// -------Update Cart----

function updatecart() {
    localStorage.setItem('Cartsitems', JSON.stringify(cart));

    cartnumbershow();
}
