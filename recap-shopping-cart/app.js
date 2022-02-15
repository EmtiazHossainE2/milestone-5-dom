//common function 
function getValue(product, isIncrease, price) {
    const productInput = document.getElementById(product + '-value');
    let productValue = productInput.value;
    if (isIncrease) {
        productValue = parseInt(productValue) + 1;
    }
    else if (productValue > 0) {
        productValue = parseInt(productValue) - 1;
    }
    productInput.value = productValue;

    //update product total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productValue * price
}
//phone plus
document.getElementById('phone-plus').addEventListener('click', function () {
    getValue('phone', true, 1500)
})

//phone-minus 
document.getElementById('phone-minus').addEventListener('click', function () {
    getValue('phone', false, 1500)
})
//case plus
document.getElementById('case-plus').addEventListener('click', function () {
    getValue('case', true, 100)
})

//case-minus 
document.getElementById('case-minus').addEventListener('click', function () {
    getValue('case', false, 100)
})
