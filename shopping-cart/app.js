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
    productTotal.innerText = productNumber * price;

    //calculate total call 
    calculateTotal()

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

//get input value 
function getInputValue(product) {
    const productInput = document.getElementById(product + '-value');
    const productValue = parseInt(productInput.value)
    return productValue;
}
// total price calculation 
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1550
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    // update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}




















