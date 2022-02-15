//common function 
function getValue(product, isIncrease) {
    const productInput = document.getElementById(product + '-value');
    let productValue = productInput.value;
    if (isIncrease) {
        productInput.value = parseInt(productValue) + 1;
    }
    else if (productValue > 0) {
        productInput.value = parseInt(productValue) - 1;
    }
}
//phone plus
document.getElementById('phone-plus').addEventListener('click', function () {
    getValue('phone', true)
})

//phone-minus 
document.getElementById('phone-minus').addEventListener('click', function () {
    getValue('phone', false)
})
//case plus
document.getElementById('case-plus').addEventListener('click', function () {
    getValue('case', true)
})

//case-minus 
document.getElementById('case-minus').addEventListener('click', function () {
    getValue('case', false)
})
