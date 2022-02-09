document.getElementById('delete-btn').addEventListener('click', function () {
    document.getElementById('delete-text').style.display = 'none'
})
//focus
document.getElementById('delete-confirm').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'red'
});
//blur
document.getElementById('delete-confirm').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white'
});
//keyup 
document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    /* const deleteConfirm = document.getElementById('delete-confirm');
    console.log(deleteConfirm.value); */
    let deleted = document.getElementById('delete-btn');
    if (event.target.value == 'delete') {
        deleted.removeAttribute('disabled')
    }
    else {
        deleted.setAttribute('disabled', true)
    }
})
//change 
document.getElementById('delete-confirm').addEventListener('change', function (event) {
    // const deleteConfirm = document.getElementById('delete-confirm');
    // console.log(deleteConfirm.value);
    let deleted = document.getElementById('delete-btn');
    if (event.target.value == 'delete') {
        deleted.removeAttribute('disabled')
    }
    else {
        deleted.setAttribute('disabled', true)
    }
})
