
// async/sync
const username = 'bilal'
const showConsole = () => {
    console.log('Set time out')
}
setTimeout(showConsole, 0)

//hoc
const number = [4, 9, 64, 25]
const square = (num) => num * num
const squareRoot = (num) => Math.sqrt(num)
const addRandomNumber = (num) => num + Math.round(Math.random() * 10)
// Array.prototype.calculate = function (logic) {
//     var output = []
//     for (var i = 0; i < this.length; i++) {
//         output.push(logic(this[i]))
//     }
//     return output
// }
 
console.log(number.map(square)) 
console.log(number.map(squareRoot)) 
console.log(number.map(addRandomNumber)) 
// console.log('square-->', calculate(number, square))
// console.log('square using map-->', number.map(square))




// console.log('squareRoot->',calculate(number , squareRoot))
// console.log('addRandomNumber->', calculate(number , addRandomNumber))

// const squareRoot = function (arr) {
//     var output = []
//     for (var i = 0; i < arr.length; i++) {
//         output.push(Math.sqrt(arr[i]))
//     }
//     return output
// }

// const addRandomNumber = function (arr) {
//     var output = []
//     for (var i = 0; i < arr.length; i++) {
//         output.push(arr[i] + Math.round(Math.random() * 10))
//     }
//     return output
// }










// console.log('username->', username)