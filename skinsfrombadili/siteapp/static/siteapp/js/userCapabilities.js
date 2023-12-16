let currentUserStatus = (JSON.parse(localStorage.getItem("currentUser")));
if(currentUserStatus.status === null || currentUserStatus.status === "owner") {
    window.location.href = "../html/index.html"
}
let userWindowHeight = window.innerHeight;
const userCapabilitiesWrapper = document.querySelector(".user-capabilities-wrapper");
userCapabilitiesWrapper.style.height = `${userWindowHeight - 60}px`;

const userMakeOrderButton = document.getElementById("userMakeOrderButton");
const userLogOut = document.getElementById("userLogOut");

userMakeOrderButton.addEventListener("click", () => {
    window.location.href = "../html/index.html#indexProducts"
});
userLogOut.addEventListener("click", () => {
    let currentUser = {
            login: null,
            password: null,
            status: null
        };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "../html/index.html";
});
