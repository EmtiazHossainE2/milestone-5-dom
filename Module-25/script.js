function backgroundRed() {
    document.body.style.backgroundColor = 'red'
}
function backgroundGreen() {
    document.body.style.backgroundColor = 'green'
}

//blue button 
const blueButton = document.getElementById('blue-button');
blueButton.onclick = backgroundBlue;
function backgroundBlue() {
    document.body.style.backgroundColor = 'blue'
}

// orange button 
const orangeButton = document.getElementById('orange-button')

/* orangeButton.onclick = function backgroundorange() {
    document.body.style.backgroundColor = '#675B45'
} */
//anonumous function (function name nai jar )
orangeButton.onclick = function () {
    document.body.style.backgroundColor = '#675B45'
}

// addEventListener (function name use korci )
const yellowGreen = document.getElementById('yellow-green-button')
yellowGreen.addEventListener('click', backgroundYellowGreen);

function backgroundYellowGreen() {
    document.body.style.backgroundColor = 'yellowgreen';
}

//hotpink-button (direct function use korci )
const hotPinkButton = document.getElementById('hotpink-button')
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink'
})

// direct use without variable 
document.getElementById('lighter-button').addEventListener('click', function () {
    document.body.style.backgroundColor = '#b3da65';
})






//button style using js 
const buttons = document.getElementsByTagName('button')
for (const button of buttons) {
    button.style.padding = '20px'
    button.style.borderRadius = '10px'
    button.style.fontSize = '20px'
    button.style.backgroundColor = '#afce71'
}
