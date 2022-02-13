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