function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStr = pin + '';
    if (pinStr.length == 4) {
        return pin;
    }
    else {
        return getPin()
    }
}

function generateBtn() {
    const pin = getPin()
    document.getElementById('show-pin').value = pin
}

//calculator body 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }
        else if (number == '<') {
            calcInput.value = '-'
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number
        calcInput.value = newNumber;
    }
})

//verify pin 
document.getElementById('verify-btn').addEventListener('click', function () {
    const showPin = document.getElementById('show-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const verifySuccess = document.getElementById('verify-success');
    const error = document.getElementById('verify-error');
    if (showPin == typedNumbers) {
        verifySuccess.style.display = 'block';
        error.style.display = 'none'
        typedNumbers = ''
    }
    else {
        verifySuccess.style.display = 'none';
        error.style.display = 'block'
    }

})