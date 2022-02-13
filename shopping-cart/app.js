function updateCaseNumber(isIncreasing) {
    const caseValue = document.getElementById('case-value');
    const caseNumber = caseValue.value;
    if (isIncreasing) {
        caseValue.value = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseValue.value = parseInt(caseNumber) - 1;
    }
}

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false)
})