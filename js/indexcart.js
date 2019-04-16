// Invoke the generateShopDOM() to render the DOM
generateShopDOM()

// Add an EventListener to every add-to-cart button in the shop and link it
// to the addToCart(itemID, quantity)
const buttons = document.getElementsByClassName('add-cart-btn')
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let quantity = buttons[i].previousElementSibling.value
        addToCart(event.target.dataset.productID, Number(quantity))
    })
}

// Link up the search field
document.getElementById('search-text').addEventListener('input', (e) => {
    console.log(e.target.value)
})


// console.log(findProductById('631220f1-cf75-4fe2-8ff2-8457873e1'))