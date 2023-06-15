getPorducts()
const container = document.getElementById('container')
const tags = document.getElementById('tags')

async function getPorducts() {
    const productsResponse = await fetch('https://dummyjson.com/products')
        .then(res => res.json())

    let products = productsResponse.products

    //if we do it thruofh for loop

    // for (var i = 0; i < products.length; i++) {
    //     const card = `<div class='card' >
    //     <img src =${products[i].thumbnail} />
    //     <h4>${products[i].title} </h4>
    //     </div>`
    // }

    //map
    // let categories = products.map((obj, i) => {
    //     var prod = obj
    //     prod.available = true
    //     return prod
    // })



    //For Each
    products.forEach((data, i) => {
        const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <h4>${data.title} </h4>
        <h4>${data.price} </h4>
        </div>`
        container.innerHTML += card
    })

    //map
    var categories = []
    products.map((obj, i) => {
        if (!categories.includes(obj.category)) {
            categories.push(obj.category)
        }
    })
    categories.forEach((cat, i) => {
        const chip = `<div class = 'chip' id = 'chip'> <span> ${cat}</span> </div>`
        tags.innerHTML += chip
    })

    // filter
    const smartphones = products.filter((data) => data.category == 'laptops')
    console.log('smartphones->', smartphones)

    //find
    const iphone = products.find((data) => data.title == 'iPhone X')
    console.log('iphone->', iphone)

}





//for each
//map
//filter
//find
//findbyindex
//reduce
//sort