

// function sayHelloWorld() {
//     alert('Hello World')
// }

function getImageName() {
    var diceNumber = Math.floor((Math.random() * 6) + 1)
    console.log(diceNumber)
    switch (diceNumber) {
        case 1:
            return 'https://images.unsplash.com/photo-1646354380497-92a78ba8dcd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlJTIwZGljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        case 2:
            return 'https://images.unsplash.com/photo-1666870747605-cca30ed154c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2xlJTIwZGljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        case 3:
            return 'https://media.istockphoto.com/id/1021776274/photo/says.jpg?b=1&s=170667a&w=0&k=20&c=4Q_Dnf0oQ1r0IVZDNiERAtAffm913TTqeJ5OkGfac_E='
        default:
            return 'https://media.istockphoto.com/id/1295862598/photo/pokers-cube.jpg?b=1&s=170667a&w=0&k=20&c=uHMQrNJyAGUx5wiD-KRNjXsfWxkJeDzcu_lUaIlRfnw='
    }
}

// var imgBox = document.getElementById('img_box')
// var img = document.getElementById('img')
// var checkBtn = document.getElementById('check_btn')

// imgBox.addEventListener('mouseover', onMouseOnBox)
// imgBox.addEventListener('mouseout', onMouseOutOnBox)
// checkBtn.addEventListener('click' , function(){alert('Click on Button')})
// function onMouseOnBox() {


//     imgBox.className = imgBox.className + ' ' + 'img_box_large'
//     img.src = 'https://media.istockphoto.com/id/1021776274/photo/says.jpg?b=1&s=170667a&w=0&k=20&c=4Q_Dnf0oQ1r0IVZDNiERAtAffm913TTqeJ5OkGfac_E='

// }
// function onMouseOutOnBox() {



//     imgBox.className = 'img_box'
//     img.src = 'https://images.unsplash.com/photo-1646354380497-92a78ba8dcd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlJTIwZGljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

// }
// getImageName(1)


// var div = document.getElementById('box').style.width = '600px'

// console.log(div)

// function question4() {
//     var dice = Math.floor(Math.random() * 6 + 1);
//     document.getElementById("q4OP").innerHTML = dice;
//     return dice
// }

// // Dice Roll
// //select the classes we require
// var cube = document.querySelector('.cube');
// var currentClass = '';

// //our main roll dice function on click
// function rollDice() {

//     var randNum = question4()
//     //generate a class with the random number between 1 - 6 called showClass
//     var showClass = 'show-' + randNum;
//     // if there is a class already selected remove it
//     if (currentClass) {
//         cube.classList.remove(currentClass);
//     }

//     console.log('cube.classList->' , cube.classList)
//     // add the new showclass with the generated number
//     cube.classList.add(showClass);
//     //set the current class to the randomly generated number
//     currentClass = showClass;
// }


//increment decrement example

// var plus = document.getElementById('plus')
// var minus = document.getElementById('minus')
// var num = document.getElementById('num')

// var number = 0

// plus.addEventListener('click', increment)
// minus.addEventListener('click', decrement)

// function increment() {
//     number = number + 1
//     num.innerText = number
// }
// function decrement() {
//     if(number > 0){
//         number = number - 1
//         num.innerText = number
//     }
//  }

// var colors = ['red', 'black', 'orange',
//     'red', 'black', 'orange',
//     'red', 'black', 'orange',
//     'red', 'black', 'orange',
//     'red', 'black', 'orange',
//     'red', 'black', 'orange']

// document.getElementById('abc').style.backgroundColor = ''

  