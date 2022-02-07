function button1() {
    const p = document.getElementById('clicking-method');
    // p.innerText = 'Click me1 using function call';
    p.innerHTML = `
        <h2>Click me1 using function call</h2>
    `
}
document.getElementById('button2').addEventListener('click', function () {
    const p = document.getElementById('clicking-method');
    p.innerHTML = `
        <h2>Click me2 using anonumous Function</h2>
    `
})

// update button 
document.getElementById('update-button').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const p = document.getElementById('clicking-method');
    p.innerText = nameField.value;
    nameField.value = ''
})