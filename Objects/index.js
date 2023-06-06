// var student = {
//     name: 'Ahmed',
//     fatherName: 'Abdul',
//     age: 12,
//     lastClass: 6,
//     welcomeStudent: function () {
//         alert('Welcome ' + student.name)
//     },
//     isAdmitted: false
// }

// //update property
// student.isAdmitted = true

// //add property
// student.motherName = 'Amina'

// // delete propery
// delete student.lastClass

// var isLastAgePropertyExist = "motherName" in student
// console.log('isLastAgePropertyExist->', isLastAgePropertyExist)

// console.log(student)


// var x = {
//     name: 'bilal'
// }

// var y = x

// x.age = 25

// console.log('x->', x)
// console.log('y->', y)

// var container = document.getElementById('container')

// var students = [
//     {
//         name: 'Faiz',
//         age: 20,
//         fatherName: 'Khan',
//         image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
//     },
//     {
//         name: 'ABDUL',
//         age: 15,
//         fatherName: 'Khan',
//         image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
//     },
//     {
//         name: 'Abc',
//         age: 15,
//         fatherName: 'Khan',
//         image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     }
// ]

// for (var i = 0; i < students.length; i++) {

//     var userBox = `<div class = 'userbox'>
//     <img src=${students[i].image} class = 'userImg' />
//     <h6>Name :  ${students[i].name}</h6>
//     <h6>Father Name :  ${students[i].fatherName}</h6>
//     <h6>Age :  ${students[i].age}</h6>
//     </div>`

//     container.innerHTML += userBox
// }



function Plan(name, price) {
    this.planName = name
    this.price = price
}
Plan.prototype.hello = function () {
    console.log(`Hello ${this.planName}`)
}
Plan.prototype.abc = 'Proto'

console.log('Plan Constructor-->', Plan.prototype)
let plan1 = new Plan('Basic', 500)
let plan2 = new Plan('', 1000)
let plan3 = new Plan('Premium', 1400)

console.log('plan2->', plan2)
var isAbcPropertyExist = "hello" in plan2
console.log(isAbcPropertyExist)

var obj = {}
var prop = 'dadads'
plan1[prop]
for (var prop in plan2) {
    if (plan2[prop]) {
        obj[prop] = plan2[prop]
    }
}
console.log('new object-->', obj)


// console.log('plan2->', plan2, plan3)
// plan3.newProperty = 'New Property'



// var obj = {}

// var studentChart = document.getElementById('chart')

// var x = {
//     one: 'one'
// }
// var y = x

// y.two = 'two'

// var userResult = [
//     {
//         name: "John Doe",
//         results: [
//             { subject: "Math", marks: 85 },
//             { subject: "English", marks: 92 },
//             { subject: "Science", marks: 78 },
//             // Add more subjects and marks for John Doe
//         ]
//     },
//     {
//         name: "Jane Smith",
//         results: [
//             { subject: "Math", marks: 90 },
//             { subject: "English", marks: 88 },
//             { subject: "Science", marks: 76 },
//             // Add more subjects and marks for Jane Smith
//         ]
//     },
//     {
//         name: "Alice Johnson",
//         results: [
//             { subject: "Math", marks: 82 },
//             { subject: "English", marks: 95 },
//             { subject: "Science", marks: 88 },
//             // Add more subjects and marks for Alice Johnson
//         ]
//     },
//     {
//         name: "Robert Davis",
//         results: [
//             { subject: "Math", marks: 78 },
//             { subject: "English", marks: 82 },
//             { subject: "Science", marks: 79 },
//             // Add more subjects and marks for Robert Davis
//         ]
//     },
//     {
//         name: "Emily Wilson",
//         results: [
//             { subject: "Math", marks: 92 },
//             { subject: "English", marks: 86 },
//             { subject: "Science", marks: 94 },
//             // Add more subjects and marks for Emily Wilson
//         ]
//     },
//     {
//         name: "Michael Brown",
//         results: [
//             { subject: "Math", marks: 87 },
//             { subject: "English", marks: 90 },
//             { subject: "Science", marks: 83 },
//             // Add more subjects and marks for Michael Brown
//         ]
//     },
//     {
//         name: "Olivia Taylor",
//         results: [
//             { subject: "Math", marks: 79 },
//             { subject: "English", marks: 91 },
//             { subject: "Science", marks: 84 },
//             // Add more subjects and marks for Olivia Taylor
//         ]
//     },
//     {
//         name: "James Anderson",
//         results: [
//             { subject: "Math", marks: 86 },
//             { subject: "English", marks: 84 },
//             { subject: "Science", marks: 90 },
//             // Add more subjects and marks for James Anderson
//         ]
//     },
//     {
//         name: "Sophia Martinez",
//         results: [
//             { subject: "Math", marks: 93 },
//             { subject: "English", marks: 79 },
//             { subject: "Science", marks: 88 },
//             // Add more subjects and marks for Sophia Martinez
//         ]
//     },
//     {
//         name: "Benjamin Thomas",
//         results: [
//             { subject: "Math", marks: 88 },
//             { subject: "English", marks: 83 },
//             { subject: "Science", marks: 91 },
//             // Add more subjects and marks for Benjamin Thomas
//         ]
//     }
// ];

// for (var i = 0; i < userResult.length; i++) {

//     var result = userResult[i]

//     var mathsNumber = result.results[0].marks
//     var engNumber = result.results[1].marks
//     var sciNumber = result.results[2].marks

//     var total = mathsNumber + engNumber + sciNumber

//     result.total = total

//     var perc = (total / 300) * 100

//     var resultRow = `<tr>
//     <td>${i + 1}</td>
//     <td>${result.name}</td>
//     <td>${mathsNumber}</td>
//     <td>${engNumber}</td>
//     <td>${sciNumber}</td>
//     <td>${total}</td>
//     <td>${perc.toFixed(2)}</td>
// </tr>`

//     studentChart.innerHTML += resultRow
// }

// function abc() {
//     return 'abc'
// }

// console.log(abc())

// var arrow = () => 'return in arrow function'

// console.log(arrow())

// var sortedArray = userResult.sort(function (a, b) {
//     return b.total - a.total
// })
// document.getElementById('first').innerText = '1st :' + sortedArray[0].name
// document.getElementById('second').innerText = '2nd :' + sortedArray[1].name
// document.getElementById('third').innerText = 'Third :' + sortedArray[2].name

// console.log('sortedArray->', sortedArray)



// object.prototype.prop = 'Proto'

// console.log('object->', object)


// console.log(object.prop)


