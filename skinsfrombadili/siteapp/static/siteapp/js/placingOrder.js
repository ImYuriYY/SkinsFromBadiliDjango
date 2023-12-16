let currentUserStatus = (JSON.parse(localStorage.getItem("currentUser")));
if(currentUserStatus.status === null || currentUserStatus.status === "owner") {
    window.location.href = "../html/index.html"
}


let userWindowHeight = window.innerHeight;
const orderWrapper = document.querySelector(".order-wrapper");
orderWrapper.style.height = `${userWindowHeight - 60}px`;

let currentSkin = (JSON.parse(localStorage.getItem("currentProduct")));
let arrayOfProducts = (JSON.parse(localStorage.getItem("arrayOfProducts")));
let arrayOfOrders = (JSON.parse(localStorage.getItem("arrayOfOrders")));

const orderFormWrapper = document.querySelector(".order-form-wrapper");
const formCardWrapper = document.createElement("div");
formCardWrapper.classList = "form-card-wrapper";
formCardWrapper.innerHTML = `
    <div class="card-image-wrapper">
        <img src="${arrayOfProducts[currentSkin].frontImage}" alt="${arrayOfProducts[currentSkin].alt}">
        <img src="${arrayOfProducts[currentSkin].backImage}" alt="${arrayOfProducts[currentSkin].alt}">
    </div>
    <p id="cardName">
        ${arrayOfProducts[currentSkin].name}
    </p>
    <p id="cardDescription">
        ${arrayOfProducts[currentSkin].description}
    </p>
    <p id="cardPrice">
        ${arrayOfProducts[currentSkin].price}$
    </p>
`;
orderFormWrapper.appendChild(formCardWrapper);

const orderNameInput = document.getElementById("orderNameInput");
const orderPhoneInput = document.getElementById("orderPhoneInput");
const orderSocNetInput = document.getElementById("orderSocNetInput");
const productQuantity = document.getElementById("productQuantity");
const makeOrderButton = document.getElementById("makeOrder");
const orderErrorMessage = document.getElementById("orderErrorMessage");

makeOrderButton.addEventListener("click", (e) => {
    e.preventDefault();
    orderErrorMessage.innerText = "";
    if(
        (orderNameInput.value.length < 2) ||
        (orderPhoneInput.value.length < 5 || orderPhoneInput.value.length > 15) || 
        (orderSocNetInput.value.length < 5) || 
        (productQuantity.value <= 0 || productQuantity.value > 100)
        ) {
        orderErrorMessage.innerText = "* Some of the fields are filled in incorrectly!"
    } else {
        let userDate = new Date;
        let userDay = userDate.getDate()
        userDay = "0" + String(userDay);
        let userMonth = userDate.getMonth();
        userDate = userDay + "." + String(userMonth + 1);
        arrayOfOrders.push({
            userName: orderNameInput.value,
            userPhone: orderPhoneInput.value,
            userSocNet: orderSocNetInput.value,
            quantity: productQuantity.value,
            skin: arrayOfProducts[currentSkin].name,
            date: userDate
        });
        localStorage.setItem("arrayOfOrders", JSON.stringify(arrayOfOrders));
        window.location.href = "../html/index.html"
    };
});