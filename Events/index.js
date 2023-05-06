

function sayHelloWorld() {
    alert('Hello World')
}

function getImageName() {
    var diceNumber = Math.floor((Math.random() * 6) + 1)
    console.log(diceNumber)
    switch (diceNumber) {
        case 1:
            return 'https://images.unsplash.com/photo-1646354380497-92a78ba8dcd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlJTIwZGljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        case 2:
            return 'https://images.unsplash.com/photo-1666870747605-cca30ed154c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2xlJTIwZGljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        case 3 : 
            return 'https://media.istockphoto.com/id/1021776274/photo/says.jpg?b=1&s=170667a&w=0&k=20&c=4Q_Dnf0oQ1r0IVZDNiERAtAffm913TTqeJ5OkGfac_E='
        default : 
           return 'https://media.istockphoto.com/id/1295862598/photo/pokers-cube.jpg?b=1&s=170667a&w=0&k=20&c=uHMQrNJyAGUx5wiD-KRNjXsfWxkJeDzcu_lUaIlRfnw='
    }
}

getImageName(1)