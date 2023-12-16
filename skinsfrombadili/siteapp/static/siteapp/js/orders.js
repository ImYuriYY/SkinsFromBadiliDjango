let currentUserStatus = (JSON.parse(localStorage.getItem("currentUser")));
if(currentUserStatus.status === null || currentUserStatus.status === "user") {
    window.location.href = "../html/index.html"
}
let userWindowHeight = window.innerHeight;
const ordersWrapper = document.querySelector(".orders-wrapper");
ordersWrapper.style.height = `${userWindowHeight - 60}px`;

const ordersScrollWrapper = document.querySelector(".orders-scroll-wrapper");
let orderItem;

let arrayOfOrders = (JSON.parse(localStorage.getItem("arrayOfOrders")));
for(let i = 0; i < arrayOfOrders.length; i++) {
    orderItem = document.createElement("div");
    orderItem.classList = "order";
    orderItem.innerHTML = `
        <p class="customer-name">
            ${arrayOfOrders[i].userName}
        </p>
        <a href="http://${arrayOfOrders[i].userSocNet}" class="customer-soc-net">
            ${arrayOfOrders[i].userSocNet}
        </a>
        <p class="customer-phone-number">
            ${arrayOfOrders[i].userPhone}
        </p>
        <p class="customer-skin">
            ${arrayOfOrders[i].skin}
        </p>
        <p class="customer-quantity">
            ${arrayOfOrders[i].quantity}    
        </p>
        <p class="customer-date">
            ${arrayOfOrders[i].date}
        </p>   
        <div class="del-button-wrapper">
            <button class="del-order-button">
                <div class="del-button-image" style="background-image: url(../cite-images/icons/close-icon.png);"></div>
            </button>
        </div>
    `;
    ordersScrollWrapper.appendChild(orderItem);
};

const delOrderButtons = document.querySelectorAll(".del-order-button");
for(let i = 0; i < delOrderButtons.length; i++) {
    delOrderButtons[i].addEventListener("click", () => {
        orderItem = document.querySelectorAll(".order");
        ordersScrollWrapper.removeChild(orderItem[i]);
        arrayOfOrders.splice(i, 1);
        localStorage.setItem("arrayOfOrders", JSON.stringify(arrayOfOrders));
        window.location.reload();
    });
};

