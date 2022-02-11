//deposit 
let depositValue = document.getElementById('deposit-value');
let depositOutput = document.getElementById('deposit-output');

//withdraw 
let withdrawValue = document.getElementById('withdraw-value');
let withdrawOutput = document.getElementById('withdraw-output');

//total balance
let balanceOutput = document.getElementById('balance-output');

//for addition 
function addMoney(currentAmount, inputAmount) {
    return parseFloat(currentAmount) + parseFloat(inputAmount)
}
//for subtraction 
function getMoney(currentAmount, inputAmount) {
    return parseFloat(currentAmount) - parseFloat(inputAmount)
}

function deposit() {
    const totalDeposit = addMoney(depositOutput.innerText, depositValue.value)
    //deposit output
    depositOutput.innerText = totalDeposit;
    //balance output
    const totalBalance = addMoney(balanceOutput.innerText, depositValue.value)
    balanceOutput.innerText = totalBalance;
    depositValue.value = '';
}

function withdraw() {
    const totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value)
    //withdrawoutput
    withdrawOutput.innerText = totalWithdraw;
    //balance output
    const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value)
    balanceOutput.innerText = totalBalance;

    withdrawValue.value = '';
}