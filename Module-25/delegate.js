const items = document.getElementsByClassName('item')
for (const item of items) {
    item.addEventListener('click', function (event) {
        // document.getElementById('item-container').removeChild(item)
        event.target.parentNode.removeChild(event.target)
    })
}

document.getElementById('add-button').addEventListener('click', function () {
    const li = document.createElement('li')
    li.innerText = 'New Button Added'
    li.classList.add('item')
    const itemContainer = document.getElementById('item-container');
    itemContainer.appendChild(li)
})

document.getElementById('item-container').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})