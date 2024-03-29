getPorducts()
// const container = document.getElementById('container')
// const tags = document.getElementById('tags')

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
        //desctructuring
        const { thumbnail, title, price } = data
        const card = `<div class='card' >
        <img src =${thumbnail} />
        <h4>${title} </h4>
        <h4>${price} </h4>
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


// function getProducts(callback) {
//     fetch('https://dummyjson.com/products')
//         .then(res => res.json())
//         .then(() => {
//             callback(res.products)
//         });
// }

// function renderDateToHtml(arr) {
//     arr.forEach((data, i) => {
//         const card = `<div class='card' >
//         <img src =${data.thumbnail} />
//         <h4>${data.title} </h4>
//         <h4>${data.price} </h4>
//         </div>`
//         container.innerHTML += card
//     })
// }

// getProducts(renderDateToHtml)


const products = [{ name: 'abc', price: 120 },
{ name: 'abc', price: 120 },]

// callback function was in another function
// function getProduct(callBack) {
//     setTimeout(() => {
//         callBack(products)
//     }, 1000);
// }

async function getProduct() {
    const products = await fetch('https://ddasdsadsadummyjson.com/products')
        .then(res => res.json())
    return products
}

function renderHtml(arr) {
    arr.forEach(element => {
        const card = `<div class='card' >
        <h4>${element.name} </h4>
        <h4>${element.price} </h4>
       </div>`
        container.innerHTML += card
    });
}

// getProduct()
//     .then((data) => {
//         console.log('data from async->', data)
//     }).catch((err) => {
//         console.log('err from async->', err)
//     })


// ternary operator
// condition ? true : false
function isEven(num) {
    let isEven = num % 2 == 0 ? true : false

    // if (num % 2 == 0) {
    //     isEven = true
    // }
    return isEven
}


var version = document.getElementById('version').value

// spread operator
let obj = {
    name: 'Moto',
    price: 120
}

let obj1 = {
    ...obj,
    isNew: false,
    version
}
console.log('obj=>', obj)
console.log('obj1=>', obj1)








