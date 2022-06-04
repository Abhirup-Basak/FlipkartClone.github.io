//-----------------------------Modals-------------------------------

let loginbtn = document.querySelector(".logindesign");
let loginsingup = document.querySelector(".loginpage");
let loginmodalcontent = document.getElementById("loginmodalcontent");
let closebtn = document.getElementById("closebtn");

//-------------Login button-------------

loginbtn.addEventListener('click', () => {

    loginmodalcontent.style.display = "block";

})
closebtn.addEventListener('click', () => {
    loginmodalcontent.style.display = 'none';
})

window.onclick = function (event) {
    if (event.target == loginmodalcontent) {
        loginmodalcontent.style.display = "none";
    }
}


//---------------Validation check LOGIN PAGE----------------

const mail = document.getElementById('email');
const password = document.getElementById('psw');
const errormailmsg = document.getElementById('errormailmsg');
const errorpswmsg = document.getElementById('errorpswmsg');
const loginform = document.getElementById('loginform');

loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    checkloginforminpts();
    sucess();
});


function checkloginforminpts() {
    if (mail.value === '') {
        errormailmsg.innerText = "Please enter valid Email ID/Mobile number"
    } else {
        errormailmsg.innerText = ""
    }
    if (password.value === '') {
        errorpswmsg.innerText = "Please enter Password"
    } else {
        errorpswmsg.innerText = ''
    }
}

function sucess(){
    successpopup();
}


function successpopup(){

}
//------------ Create Account Page ----------------

const createform = document.getElementById('createform');
const number = document.getElementById('number');
const errornumbermsg = document.getElementById('errornumbermsg');

// --------Create Account Page Validtaion-------------

createform.addEventListener('submit', (e) => {
    e.preventDefault();
    checkcreateforminpts();
});

function checkcreateforminpts() {
    if (number.value === '') {
        errornumbermsg.innerText = "Enter Valid number";
    } else {
        errornumbermsg.innerText = "";
    }
}


//--------------Swap Login to Create Account------------

let createaccount = document.getElementById('createaccount');
let existibglogin = document.getElementById('existibglogin');
let subdivisionlogin = document.querySelector('.subdivisionlogin')
let subdivisioncreate = document.querySelector('.subdivisioncreate');

createaccount.addEventListener('click', (e) => {
    e.preventDefault();
    Swaptocreate();
});

existibglogin.addEventListener('click', (e) => {
    e.preventDefault();
    Swaptologin();

});

function Swaptocreate() {
    subdivisionlogin.style.display = 'none';
    subdivisioncreate.style.display = 'block';
}

function Swaptologin() {
    subdivisionlogin.style.display = 'block';
    subdivisioncreate.style.display = 'none';
}

// ----------------Slider ---------------

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// // ------------------- Slide FOR PRODUCTs--------------

let rightarrowone = document.getElementById('rightarrowone');
let leftarrowone = document.getElementById('leftarrowone');

let productone = document.getElementsByClassName('product-one')
let product_page = Math.ceil(productone.length / 4);
let l = 0;
let movePer = 29;
let maxMove = 97;

let right_mover = () => {
    l = l + movePer;
    if (productone == 1) { l = 0; }
    for (const i of productone) {
        if (l > maxMove) { l = l - movePer; }
        i.style.left = '-' + l + '%';
    }

}
let left_mover = () => {
    l = l - movePer;
    if (l <= 0) { l = 0; }
    for (const i of productone) {
        if (product_page > 1) {
            i.style.left = '-' + l + '%';
        }
    }
}

rightarrowone.onclick = () => { right_mover(); }
leftarrowone.onclick = () => { left_mover(); }

let cart = JSON.parse(localStorage.getItem("Cartsitems"));
let cartnumber = document.querySelector(".cartnumber");
function cartnumbershow() {
    cartnumber.innerHTML = `${cart.length}`
}

cartnumbershow();
