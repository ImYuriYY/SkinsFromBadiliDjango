let currentUserStatus = (JSON.parse(localStorage.getItem("currentUser")));
if(currentUserStatus.status === null || currentUserStatus.status === "user") {
    window.location.href = "../html/index.html"
}
let userWindowHeight = window.innerHeight;
const productsWrapper = document.querySelector(".products-wrapper");
productsWrapper.style.height = `${userWindowHeight - 60}px`;

let productCardWrapper;
let productsCentering;

let arrayOfProducts = (JSON.parse(localStorage.getItem("arrayOfProducts")));

function uploadProducts(imgBack, imgFront, alt, name, description, price) {
    return `
        <div class="product-card">
            <div class="product-card-image-wrapper">
                <img src="../products/${imgBack}" alt="${alt}">
                <img src="../products/${imgFront}" alt="${alt}">
            </div>
            <p class="product-name">
                ${name}
            </p>
            <p class="product-description">
                ${description}
            </p>
            <p class="product-price">
                ${price}$
            </p>
            <div class="product-buttons-wrapper">
                <button class="product-change-button">
                    Change
                </button>
                <button class="product-delete-button">
                    Delete
                </button>
            </div>
        </div>
    `;
};

function setProducts(prod) {
    productCardWrapper = document.createElement("div");
    productsCentering = document.querySelector(".products-centering");
    productCardWrapper.classList = "product-card-wrapper";
    productCardWrapper.innerHTML = uploadProducts(prod.frontImage, prod.backImage, prod.alt, prod.name, prod.description, prod.price);
    productsCentering.appendChild(productCardWrapper);
}


arrayOfProducts.forEach(el => {
    setProducts(el);
});

const productDeleteButtons = document.querySelectorAll(".product-delete-button");
for(let i = 0; i < productDeleteButtons.length; i++) {
    productDeleteButtons[i].addEventListener("click", (e) => {
        e.preventDefault();
        productCardWrapper = document.querySelectorAll(".product-card-wrapper");
        productsCentering.removeChild(productCardWrapper[i]);
        arrayOfProducts.splice(i, 1);
        localStorage.setItem("arrayOfProducts", JSON.stringify(arrayOfProducts));
        window.location.reload();
    });
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



const addNewProductButton = document.getElementById("addNewProductButton");
const modalWindowAddProduct = document.querySelector(".modal-window-blind");
const modalWindowClose = document.querySelector(".modal-window-close");
const addProductForm = document.querySelector(".add-product-form");
const previewProductWrapper = document.querySelector(".product-preview-wrapper");

addNewProductButton.addEventListener("click", (e) => {
    e.preventDefault();
    previewProductName.innerText = "Product name";
    previewProductDescription.innerText = `
        DescriptionDescriptionDescription
        DescriptionDescriptionDescription
        DescriptionDescriptionDescription
    `;
    previewProductPrice.innerText = "Price";

    modalWindowAddProduct.style.display = "flex";
    addProductForm.style.display = "block";
    previewProductWrapper.style.display = "block";
    
});
modalWindowClose.addEventListener("click", () => {
    modalWindowAddProduct.style.display = "none";
    addProductForm.style.display = "none";
    previewProductWrapper.style.display = "none";
    changeProductForm.style.display = "none";
    productChangePreviewWrapper.style.display = "none";
});

const backImageInput = document.getElementById("backImageInput");
const frontImageInput = document.getElementById("frontImageInput");
const previewProductNameInput = document.getElementById("previewProductNameInput");
const previewProductDescriptionInput = document.getElementById("previewProductDescriptionInput");
const previewProductPriceInput = document.getElementById("previewProductPriceInput");

const backImagePreview = document.getElementById("backImagePreview");
const frontImagePreview = document.getElementById("frontImagePreview");
const previewProductName = document.getElementById("previewProductName");
const previewProductDescription = document.getElementById("previewProductDescription");
const previewProductPrice = document.getElementById("previewProductPrice");

backImageInput.addEventListener("change", () => {
    backImagePreview.setAttribute("src", `../products/${backImageInput.files[0].name}`)
});
frontImageInput.addEventListener("change", () => {
    frontImagePreview.setAttribute("src", `../products/${frontImageInput.files[0].name}`)
});

previewProductNameInput.addEventListener("input", (event) => {
    previewProductName.innerText = `${event.target.value}`;
});
previewProductDescriptionInput.addEventListener("input", (event) => {
    previewProductDescription.innerText = `${event.target.value}`;
});
previewProductPriceInput.addEventListener("input", (event) => {
    previewProductPrice.innerText = `${event.target.value}$`;
});





const addProductButton = document.getElementById("addProductButton");
const addProductErrorMessage = document.querySelector("#addProductErrorMessage");

addProductButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(
        (previewProductNameInput.value.lenght < 3) || 
        (previewProductDescriptionInput.value.lenght < 10) || 
        (previewProductPriceInput.value <= 0) ||
        (backImageInput.files.lenght === 0) ||
        (frontImageInput.files.lenght === 0)
        ) 
        {
            addProductErrorMessage.style.display = "block";
    } else {
        addProductErrorMessage.style.display = "none";
        arrayOfProducts.push(
            {
                frontImage: `../products/${frontImageInput.files[0].name}`,
                backImage: `../products/${backImageInput.files[0].name}`,
                alt: `skin-from-badili`,
                name: `${previewProductNameInput.value}`,
                description: `${previewProductDescriptionInput.value}`,
                price: `${previewProductPriceInput.value}`
            }
        );
        localStorage.setItem("arrayOfProducts", JSON.stringify(arrayOfProducts));
        window.location.reload();
    };
});



const productChangeButtons = document.querySelectorAll(".product-change-button");
const changeProductForm = document.querySelector(".change-product-form");
const productChangePreviewWrapper = document.querySelector(".product-change-preview-wrapper");

const changeBackImageInput = document.getElementById("changeBackImageInput");
const changeFrontImageInput = document.getElementById("changeFrontImageInput");
const previewChangeProductNameInput = document.getElementById("previewChangeProductNameInput");
const previewChangeProductDescriptionInput = document.getElementById("previewChangeProductDescriptionInput");
const previewChangeProductPriceInput = document.getElementById("previewChangeProductPriceInput");

const changeBackImagePreview = document.getElementById("changeBackImagePreview");
const changeFrontImagePreview = document.getElementById("changeFrontImagePreview");
const previewChangeProductName = document.getElementById("previewChangeProductName");
const previewChangeProductDescription = document.getElementById("previewChangeProductDescription");
const previewChangeProductPrice = document.getElementById("previewChangeProductPrice");

let selectedProduct;
for(let i = 0; i < productChangeButtons.length; i++) {
    productChangeButtons[i].addEventListener("click", (e) => {
        e.preventDefault();
        selectedProduct = i;
        previewChangeProductName.innerText = `${arrayOfProducts[i].name}`;
        previewChangeProductDescription.innerText = `
            ${arrayOfProducts[i].description}
        `;
        previewChangeProductPrice.innerText = `${arrayOfProducts[i].price}`;
        changeBackImagePreview.setAttribute("src", `../products/${arrayOfProducts[i].backImage}`);
        changeFrontImagePreview.setAttribute("src", `../products/${arrayOfProducts[i].frontImage}`);

        modalWindowAddProduct.style.display = "flex";
        changeProductForm.style.display = "block";
        productChangePreviewWrapper.style.display = "block"

    });

};


changeBackImageInput.addEventListener("change", () => {
    changeBackImagePreview.setAttribute("src", `../products/${changeBackImageInput.files[0].name}`)
});
changeFrontImageInput.addEventListener("change", () => {
    changeFrontImagePreview.setAttribute("src", `../products/${changeFrontImageInput.files[0].name}`)
});

previewChangeProductNameInput.addEventListener("input", (event) => {
    previewChangeProductName.innerText = `${event.target.value}`;
});
previewChangeProductDescriptionInput.addEventListener("input", (event) => {
    previewChangeProductDescription.innerText = `${event.target.value}`;
});
previewChangeProductPriceInput.addEventListener("input", (event) => {
    previewChangeProductPrice.innerText = `${event.target.value}`;
});

const changeProductButton = document.getElementById("changeProductButton");
const changeProductErrorMessage = document.getElementById("changeProductErrorMessage");

let skinName;
let skinFrontImg;
let skinBackImg;
let skinAlt;
let skinDesc;
let skinPrice;

changeProductButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(previewChangeProductNameInput.value <= 0) {
        skinName = arrayOfProducts[selectedProduct].name;
    } else {
        skinName = previewChangeProductNameInput.value;
    };



    if(previewChangeProductDescriptionInput.value <= 0) {
        skinDesc = arrayOfProducts[selectedProduct].description;
    } else {
        skinDesc = previewChangeProductDescriptionInput.value;
    };



    if(previewChangeProductPriceInput.value <= 0) {
        skinPrice = arrayOfProducts[selectedProduct].price;
    } else {
        skinPrice = previewChangeProductPriceInput.value;
    };



    if(changeBackImageInput.files[0] === undefined) {
        skinBackImg = arrayOfProducts[selectedProduct].backImage;
    } else {
        skinBackImg = changeBackImageInput.files[0].name;
    };



    if(changeFrontImageInput.files[0] === undefined) {
        skinFrontImg = arrayOfProducts[selectedProduct].frontImage;
    } else {
        skinFrontImg = changeFrontImageInput.files[0].name;
    };




    arrayOfProducts[selectedProduct] = (
        {
            frontImage: `${skinFrontImg}`,
            backImage: `${skinBackImg}`,
            alt: `skin-from-badili`,
            name: `${skinName}`,
            description: `${skinDesc}`,
            price: `${skinPrice}`
        }
    );
    localStorage.setItem("arrayOfProducts", JSON.stringify(arrayOfProducts));
    window.location.reload();
});
