let currentUserStatus = (JSON.parse(localStorage.getItem("currentUser")));
const userLoginAccountButton = document.getElementById("userLoginAccount");
userLoginAccountButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(currentUserStatus.status === "owner") {
        window.location.href = "../html/ownerCapabilities.html";
    } if(currentUserStatus.status === "user") {
        window.location.href = "../html/userCapabilities.html";
    } if(currentUserStatus.status === null) {
        window.location.href = "../html/loginMenu.html"
    };
});