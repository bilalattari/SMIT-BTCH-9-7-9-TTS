

var arr = [
    {
        abc: 'asda'
    },
    {
        abc: 'asdsda'
    }
]
localStorage.setItem('batch', JSON.stringify(arr))

var batch = localStorage.getItem('batch')

// localStorage.clear()
console.log(batch)
console.log('PARSE-->' , JSON.parse(batch) )