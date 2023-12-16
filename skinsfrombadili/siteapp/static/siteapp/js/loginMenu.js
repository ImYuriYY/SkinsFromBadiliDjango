let currentUserStatus = (JSON.parse(localStorage.getItem("currentUser")));
if(currentUserStatus.status === "user" || currentUserStatus.status === "owner") {
    window.location.href = "../html/index.html"
}
let userWindowHeight = window.innerHeight;
const loginMenuWrapper = document.getElementById("loginMenuWrapper");
loginMenuWrapper.style.height = `${userWindowHeight - 60}px`;



const loginMenu = document.getElementById("loginMenu");
const loginButtonMenu = document.getElementById("loginButtonMenu");
const registerButtonMenu = document.getElementById("registerButtonMenu");



loginButtonMenu.addEventListener("click", (e) => {
    e.preventDefault();
    loginMenu.innerHTML = `
        <input type="text" placeholder="Login*" id="loginInput" required>
        <input type="password" placeholder="Password*" id="passwordInput" required>
        <button id="loginButton">Enter</button>
        <p id="errorMessage"></p>
    `;
    const loginInput = document.getElementById("loginInput");
    const passwordInput = document.getElementById("passwordInput");
    const loginButton = document.getElementById("loginButton");
    const errorMessage = document.getElementById("errorMessage");
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        for(let i = 0; i < arrayOfAccounts.length; i++) {
            if((arrayOfAccounts[i].login === loginInput.value) && (arrayOfAccounts[i].password === passwordInput.value)) {
                currentUser.status = arrayOfAccounts[i].status;
                currentUser.login = arrayOfAccounts[i].login;
                currentUser.password = arrayOfAccounts[i].password;
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                window.location.href = "../html/index.html";
                break;
            } else {
                errorMessage.innerText = "* Wrong login or password!";
            };
        };
    });
});
registerButtonMenu.addEventListener("click", (e) => {
    e.preventDefault();
    loginMenu.innerHTML = `
        <input type="text" placeholder="Enter login*" id="enterLoginInput" required>
        <input type="password" placeholder="Enter password*" id="enterPasswordInput" required>
        <input type="password" placeholder="Repeat password*" id="repeatPasswordInput" required>
        <button id="registerButton">Register</button>
        <p id="errorMessage"></p>
        <ul id="criteriaList" style="display: none;">
            <li class="criteria-list__item">
                Availability of symbol
            </li>
            <li class="criteria-list__item">
                Availability of digit
            </li>
            <li class="criteria-list__item">
                Availability of lowercase letters
            </li>
            <li class="criteria-list__item">
                Availability of capital letters
            </li>
        </ul>
    `;
    const enterLoginInput = document.getElementById("enterLoginInput");
    const enterPasswordInput = document.getElementById("enterPasswordInput");
    const repeatPasswordInput = document.getElementById("repeatPasswordInput");
    const registerButton = document.getElementById("registerButton");
    const errorMessage = document.getElementById("errorMessage");
    const criteriaList = document.getElementById("criteriaList");
    registerButton.addEventListener("click", (e) => {
        e.preventDefault();
        const arrayOfSymbol = ['!','@', '"', '№', '$', ';', '%', '^', ':', '&', '?', '(', ')', "'", '_', '+', '=', '`', '/', '[', ']', '{', '}', '#', '*', '-'];
        const arrayOfDigit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        for(let i = 0; i < arrayOfAccounts.length; i++) {
            if(arrayOfAccounts[i].login === enterLoginInput.value) {
                errorMessage.innerText = "* This login is busy!";
            };
        };


        let symbolAvailability = false;
        let digitAvailability = false;
        let upperCaseAvailability = false;
        let lowerCaseAvailability = false;


        if(enterPasswordInput.value.length < 8) {
            errorMessage.innerText = "* Password is too short!";
        } else {
            errorMessage.innerText = "";
            criteriaList.style.display = "none";
            for(let i = 0; i < enterPasswordInput.value.length; i++) {
                arrayOfSymbol.forEach(el => {
                    if(enterPasswordInput.value[i] === el) {
                        symbolAvailability = true;
                    };
                });
                arrayOfDigit.forEach(el => {
                    if(enterPasswordInput.value[i] === el) {
                        digitAvailability = true;
                    };
                });
                if(enterPasswordInput.value[i] === enterPasswordInput.value[i].toUpperCase()) {
                    upperCaseAvailability = true;
                };
                if(enterPasswordInput.value[i] === enterPasswordInput.value[i].toLowerCase()) {
                    lowerCaseAvailability = true;
                };
            };
        };
        if((symbolAvailability === true) && (digitAvailability === true) && (upperCaseAvailability === true) && (lowerCaseAvailability = true)) {
            if(enterPasswordInput.value === repeatPasswordInput.value) {
                console.log("DA");
            } else {
                errorMessage.innerText = `* Password mismatch!`;
            };
        } else {
            errorMessage.innerText = `* Password does not meet all criteria!`;
            criteriaList.style.display = "block";
        };
    });
});
