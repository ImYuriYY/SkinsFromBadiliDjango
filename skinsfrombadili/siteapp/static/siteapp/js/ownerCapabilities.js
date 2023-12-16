let currentUserStatus = (JSON.parse(localStorage.getItem("currentUser")));
if(currentUserStatus.status === null || currentUserStatus.status === "user") {
    window.location.href = "../html/index.html"
}

let userWindowHeight = window.innerHeight;
const ownerCapabilitiesWrapper = document.querySelector(".owner-capabilities-wrapper");
ownerCapabilitiesWrapper.style.height = `${userWindowHeight - 60}px`;

const ownerCheckOrdersButton = document.getElementById("ownerCheckOrdersButton");
const ownerProductManagementButton = document.getElementById("ownerProductManagementButton");
const ownerLogOut = document.getElementById("ownerLogOut");

ownerCheckOrdersButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../html/orders.html";
});

ownerProductManagementButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../html/productManagement.html";
});

ownerLogOut.addEventListener("click", (e) => {
    e.preventDefault();
    let currentUser = {
        login: null,
        password: null,
        status: null
    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "../html/index.html";
});