
const title = document.getElementById('previewProductNameInput')
const description = document.getElementById('previewProductDescriptionInput')
const price = document.getElementById('previewProductPriceInput')




const previewFrontIMG = document.getElementById("frontImagePreview")
const previewBackIMG = document.getElementById("backImagePreview")
const previewProductName = document.getElementById("previewProductName")
const previewProductDescription = document.getElementById("previewProductDescription")
const previewProductPrice = document.getElementById('previewProductPrice')

const defaultBackFrontIMG = 'UnloadedProduct.png'

// frontIMG.addEventListener("input", (e) => {
//     console.log(typeof(previewFrontIMG.getAttribute('src')))
//     a = `/static/siteapp/images/backgrounds/${frontIMG.files[0].name}`
//     previewFrontIMG.setAttribute('src', a)
//     console.log(typeof(previewFrontIMG.getAttribute('src')))
// })
// backIMG.addEventListener("input", (e) => {
//     previewBackIMG.setAttribute('src', `{% static 'siteapp/images/backgrounds/${backIMG.files[0].name}'%}`)
// })

// title.addEventListener("input", (e) => {
//     previewProductName.innerText = `${e.target.value}`
// })

// description.addEventListener("input", (e) => {
//     previewProductDescription.innerText = `${e.target.value}`
// })

// price.addEventListener("input", (e) => {
//     previewProductPrice.innerText = `${e.target.value}$`
// })


const frontIMG = document.getElementById('frontImageInput')
const backIMG = document.getElementById('backImageInput')
const frontIMGfileText = document.querySelector('.frontIMG-file-text')
const backIMGfileText = document.querySelector('.backIMG-file-text')

frontIMG.addEventListener('input', ()=> {
    frontIMGfileText.innerHTML = `${frontIMG.files[0].name}`
})
backIMG.addEventListener('input', ()=> {
    backIMGfileText.innerHTML = `${backIMG.files[0].name}`
})





