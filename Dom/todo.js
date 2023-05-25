var container = document.getElementById('container')
var addTodoBtn = document.getElementById('addTodoBtn')
var addTodoInput = document.getElementById('todoInput')
var listContainer = document.getElementById('todocontainer')

addTodoBtn.addEventListener('click', createTodoItem)

function createTodoItem() {

    var li = document.createElement('li')
    var btn = document.createElement('button')
    var todotxt = addTodoInput.value
    if (addTodoInput.value === "") {
        alert("please fill to do")
    } else {
        li.innerText = todotxt
        listContainer.appendChild(li)
        btn.innerText = 'Delete'
        li.appendChild(btn)
        btn.addEventListener('click', deleteListItem)
        addTodoInput.value = ''
    }
}

function deleteListItem() {
    this.parentNode.remove()
}





