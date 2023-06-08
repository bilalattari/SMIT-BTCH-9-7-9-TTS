var cartItems = []
var container = document.getElementById('container')

getItemsFromLocalStorage()

function getItemsFromLocalStorage() {
    var item = localStorage.getItem('cartItems')
    console.log('item from local storge=>', item)
    if (item) {
        item = JSON.parse(item)

        cartItems = item
        cart.innerText = `Cart (${item.length})`
    }
}

for (var i = 0; i < cartItems.length; i++) {
    var foodObj = cartItems[i]
    var card = `<div class='cartCard'">
      <div>
        <h5 class="card-title">${foodObj.title}</h5>
        <p class="card-text">
        ${foodObj.description}
        </p>
      </div>
    </div>
  </div>`

    container.innerHTML += card
}

function clearCart() {
    cartItems = []
    localStorage.clear()
    cart.innerText = `Cart`
    container.innerHTML = ''
}


console.log(cartItems)