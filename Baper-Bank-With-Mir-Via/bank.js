/* *****   ----   potibar console log kora valo  ----  ***
1.jei btn ke click korbo oi btn ke onclick diye dhore niye asci .
2.input value ta lagbe tai id diye nici . 
3.value set korte hobe jonne depositoutput e id diye niye asci . eta html tag jonne inner text diye dhorte hobe . 
4. depositOutput er innerText ke  = depositValue.value set kore dici . 
5. value 2 ta adition korar jonne depositOutput er innerText e = parsefloat korci depositOutput.innerText & depositValue.value ke . 
6. sesh e deposit value ke empty korci 

*/

function deposit() {
    let depositValue = document.getElementById('deposit-value');
    let depositOutput = document.getElementById('deposit-output');
    let balanceOutput = document.getElementById('balance-output');
    //deposit output
    depositOutput.innerText = parseFloat(depositOutput.innerText) + parseFloat(depositValue.value);
    //balance output
    balanceOutput.innerText = parseFloat(balanceOutput.innerText) + parseFloat(depositValue.value)
    depositValue.value = '';
}

function withdraw() {
    let withdrawValue = document.getElementById('withdraw-value');
    let withdrawOutput = document.getElementById('withdraw-output');
    let balanceOutput = document.getElementById('balance-output');
    //withdrawoutput
    withdrawOutput.innerText = parseFloat(withdrawOutput.innerText) + parseFloat(withdrawValue.value);
    //balance output
    balanceOutput.innerText = parseFloat(balanceOutput.innerText) - parseFloat(withdrawValue.value)

    withdrawValue.value = '';
}