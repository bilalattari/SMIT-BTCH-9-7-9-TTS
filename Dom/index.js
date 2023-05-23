var container = document.getElementById('container')
var allHeadings = document.getElementsByTagName('h2')
// var btn = document.getElementById('changeBtn')

// btn.addEventListener('click', chanegHeadingBtn)

// function chanegHeadingBtn() {
//     for (var i = 0; i < allHeadings.length; i++) {
//         if (i === 1) {
//             allHeadings[i].style.color = 'orange'
//         } else {
//             allHeadings[i].style.color = 'red'
//         }
//     }
// }

var addBoxBtn = document.getElementById('addBoxBtn')

addBoxBtn.addEventListener('click', addBox)


function addBox() {
    var div = document.createElement('div')
    div.className = 'newDabba'
    var h4 = document.createElement('h4')
    h4.innerText = 'Abcd'
    div.appendChild(h4)
    container.appendChild(div)
}   


