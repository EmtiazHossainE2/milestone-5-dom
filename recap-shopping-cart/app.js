//common function 
function getValue(isIncrease) {
    const input = document.getElementById('input-value');
    const inputValue = input.value;
    if (isIncrease) {
        input.value = parseInt(inputValue) + 1;
    }
    else if (inputValue > 0) {
        input.value = parseInt(inputValue) - 1;
    }

}

//phone plus
document.getElementById('phone-plus').addEventListener('click', function () {
    getValue(true)
})

//phone-minus 
document.getElementById('phone-minus').addEventListener('click', function () {
    getValue(false)
})
