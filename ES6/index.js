
// TDZ
// console.log('x->', x)

let x = 'x'

//we cannot reassign the variable with same name using let
let y = 'y'
y = 100


// var with keyword var has global scope , functional scope 
// but variable with keyword let has block scope

// function hello(val) {
//     if (val) {
//         let greeting = 'Hello'
//         console.log('greeting->', greeting)
//     } else {
//         let greeting = 'avc'
//         console.log('greeting1->', greeting)
//     }
// }

// hello(false)

// const lowestAge = 18

async function logJSONData() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=relativehumidity_2m&current_weather=true&forecast_days=1&start_date=2023-06-13&end_date=2023-06-13");
    const jsonData = await response.json();
    const labels = jsonData.hourly.time;
    const data = {
        labels: labels,
        datasets: [{
            label: 'Day Temperature',
            data: jsonData.hourly.relativehumidity_2m,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };


    document.getElementById('acquisitions').append(
        {
            type: 'line',
            data: data
        }
    )
        
};

logJSONData()