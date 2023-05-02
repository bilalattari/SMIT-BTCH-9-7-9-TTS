

//Make function and pass data into it
// function login(email, password) {
//     console.log('password=>', password)
//     console.log('email=>', email)
// }

// login('abc@gmail.com', '123456')

// login('abcd@gmail.com', '12345678')

// login('abcdef@gmail.com', '123456789')


//check if user is valid for admission or not

// Use if else in the function

// function checkIfUserIsValidForAdmission() {
//     var userClass = +prompt('Last cleared class')
//     var age = +prompt('Age')
//     var gender = prompt('gender')
//     if (userClass == 8 && age <= 15 && gender === 'male') {
//         alert('Give him admission')
//     } else {
//         alert('Admission not allowed')

//     }
// }

// checkIfUserIsValidForAdmission()



//some examples 
function sum(a, b) {
    console.log(a + b)
}

function square(a) {
    console.log(a * a)
}
// square(10)
// square(50)
// square(80)
// square(120)

// sum(20 , 80)
// sum(30 , 80)
// sum(50 , 80)
// sum(120 , 80)
// sum(180 , 80)

// function getPercentage(total, disc) {
//     var amount = (disc * total) / 100
//     return amount
// }

// function getTotalAmount() {
//     var biryaniRate = +document.getElementById('biryani').value
//     var biryaniNo = +document.getElementById('biryaniNo').value
//     var coldDrink = +document.getElementById('cd').value
//     var coldDrinkNo = +document.getElementById('cdNo').value
//     var discount = +document.getElementById('disc').value

//     var total = (biryaniNo * biryaniRate) + (coldDrink * coldDrinkNo)
//     var discountAmount = getPercentage(total, discount)
//     var amountAfterDiscount = total - discountAmount

//     document.getElementById('total').innerText = 'Total Amount : ' + amountAfterDiscount

// }

function calculateRectangleArea() {
    var height = document.getElementById('height').value
    var width = document.getElementById('width').value
    if (height === '' || width === '') {
        alert('Please fill height and width')
    } else {
        var area = height * width
        document.getElementById('area').innerText = 'Area : ' + area
    }
}


function sum(a, b) {
    var total = a + b
    return total
}



console.log(sum(12, 10))

var totalOfTwoValue = sum(25, 50)

var numbers = [12, 20, 50, 18.90, 39, 20, 01, 180, 75, 60]

function giveLargestNumber() {
    var lgNumber = 0
    for (var i = 0; i < numbers.length; i++) {

        console.log(lgNumber, numbers[i])
        if (numbers[i] > lgNumber) {
            lgNumber = numbers[i]
        }
    }
    return lgNumber
}

var largestNumber = giveLargestNumber()
console.log('largestNumber->', largestNumber)

