function updateProductNumber(product, isIncreasing, price) {
    const productValue = document.getElementById(product + '-value');
    let productNumber = productValue.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productValue.value = productNumber
    //product total 
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price

}
// phone increase decrease event 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1550)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1550)
})

//case total increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', true, 59)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', false, 59)
})