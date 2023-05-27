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

var container = document.getElementById('container')

var students = [
    {
        name: 'Faiz',
        age: 20,
        fatherName: 'Khan',
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'ABDUL',
        age: 15,
        fatherName: 'Khan',
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Abc',
        age: 15,
        fatherName: 'Khan',
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
]

for (var i = 0; i < students.length; i++) {

    var userBox = `<div class = 'userbox'>
    <img src=${students[i].image} class = 'userImg' />
    <h6>Name :  ${students[i].name}</h6>
    <h6>Father Name :  ${students[i].fatherName}</h6>
    <h6>Age :  ${students[i].age}</h6>
    </div>`

    container.innerHTML += userBox
}