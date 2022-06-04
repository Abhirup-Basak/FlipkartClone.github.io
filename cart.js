// -------------Item Checking------------------

function checkitems() {
    let noitemincartouter = document.querySelector('.noitemincartouter');
    let nextcartouterpage = document.querySelector('.nextcartouterpage');

    noitemincartouter.style.display = "block";
    nextcartouterpage.style.display = "none";

}


let cartItemsEl = document.querySelector(".itemdesign");
let cart = JSON.parse(localStorage.getItem("Cartsitems"));
let cartnumber = document.querySelector(".cartnumber");
let mycartnumber = document.querySelector(".mycartnumber");


function rendercarthtml() {
    cartnumber.innerHTML = `${cart.length}`;
    mycartnumber.innerHTML = `${cart.length}`;

    if (cart == [] || cart.length == 0) {
        checkitems();
    }
    else {

        updateCart();
    }
    
}

rendercarthtml();


function rendercartitems() {
    cartItemsEl.innerHTML = "";
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
    <div class="cartitems">
        <div class="cartitem">
            <div class="itemimg">
                    <div class="imges">
                        <img src="${item.imgSrc}" alt="">
                    </div>
            </div>
            <div class="cartitemcontent">
                <p class="text1 text">${item.name}</p>
                <p class="text2 text">Size: Free</p>
                <p class="text4 text"> ₹${item.price}<span class="off"> 38% Off available</span></p>
            </div>
        </div>
        <div class="bottombar">
            <div class="incrdecr">
                <button class="decr" onclick="changeNumberOfUnits('minus', ${item.id})">-</button>
                <h2 class="count">
                    <p class="counting">${item.numberOfUnits}</p>
                </h2>
                <button class="incr" onclick="changeNumberOfUnits('plus', ${item.id})">+</button>
            </div>
            <div class="cartbtn">
                <button>Save For Later</button>
                <button class="removebtn" onclick="removeItemFromCart(${item.id})">Remove</button>
            </div>
        </div>
    </div>
      `;
    });

}



function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    localStorage.setItem('Cartsitems', JSON.stringify(cart));
    rendercarthtml();
}


function updateCart() {
    noitemincartouter.style.display = "none";
    nextcartouterpage.style.display = "block";
    let cartnumber = document.querySelector(".cartnumber");
    cartnumber.innerHTML = cart.length;
    localStorage.setItem('Cartsitems', JSON.stringify(cart));
    rendercartitems();
    renderSubtotal();
    // console.log(cart);
}


// change number of units for an item 

function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus") {
                numberOfUnits++;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });
    updateCart();
}



function renderSubtotal() {
    let totalPrice = 0,
        totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    // console.log(totalPrice);
    // console.log(totalItems);
    

    // -------Variables-------
    let Price = document.querySelector('.Price').lastElementChild;
    let savingprice = document.querySelector('.saving');
    let Total_Amount = document.querySelector('.Total-Amount').lastElementChild;
    let Delivery_Charges = document.querySelector('.Delivery-Charges').lastElementChild;

    Price.innerHTML = ` ₹ ${totalPrice}`
    
    let saving = totalPrice * (20 / 100);
    saving = Math.round(saving);
    savingprice.innerHTML = ` ₹ ${saving}`;

    if (totalPrice < 1000) {
        console.log("delivery");
        let deliverychrge = 80;
        Delivery_Charges.innerHTML = `₹ ${deliverychrge}`;
        let payingamount = (totalPrice - saving) + deliverychrge;
        payingamount = Math.round(payingamount);
        Total_Amount.innerHTML = ` ₹ ${payingamount}`;
    }
    else{
        let payingamount = totalPrice - saving;
        payingamount = Math.round(payingamount);
        Total_Amount.innerHTML = ` ₹ ${payingamount}`;
        Delivery_Charges.innerHTML = "Free Delivery";
    }

}


