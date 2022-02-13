function updateCaseNumber(isIncreasing) {
    const caseValue = document.getElementById('case-value');
    let caseNumber = caseValue.value;
    if (isIncreasing) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseValue.value = caseNumber
    //case total 
    const caseTotal = document.getElementById('case-total')
    caseTotal.innerText = caseNumber * 59

}
// phone increase decrease event 
document.getElementById('phone-plus').addEventListener('click', function () {
    console.log('clicked');
})

//case total increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false)
})