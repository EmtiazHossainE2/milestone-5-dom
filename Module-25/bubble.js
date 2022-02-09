//third item click 
document.getElementById('third-item').addEventListener('click', function (event) {
    console.log('li clicked');
    // event.stopPropagation()
    event.stopImmediatePropagation()
})
document.getElementById('third-item').addEventListener('click', function (event) {
    console.log('li 2 clicked');
})
document.getElementById('third-item').addEventListener('click', function (event) {
    console.log('li 3 clicked');
})

//ul click 
document.getElementById('list-container').addEventListener('click', function () {
    console.log('ul clicked')
})
//section  click 
document.getElementById('section-container').addEventListener('click', function () {
    console.log('section clicked')
})