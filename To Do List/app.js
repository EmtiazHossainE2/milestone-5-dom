let count = 0
document.getElementById('add-btn').addEventListener('click', function () {
    count++;
    const inputText = document.getElementById('input-value');
    const inputValue = inputText.value;
    if (inputValue == '') {
        alert('Write somthing to input field ')
    }
    else {
        const tableBody = document.getElementById('table-body');
        const tableContainer = document.createElement('tr');
        tableContainer.innerHTML = `
        <th scope="row">${count}</th>
        <td>${inputValue}</td>
        <td>
        <button class="btn-danger delete-btn">Delete</button>
        <button class="btn-success done-btn">Done</button>
        </td>
        `
        tableBody.appendChild(tableContainer);
        inputText.value = '';

        const deleteBtn = document.getElementsByClassName('delete-btn');
        const doneBtn = document.getElementsByClassName('done-btn');

        for (const button of deleteBtn) {
            button.addEventListener('click', function (event) {
                event.target.parentNode.parentNode.style.display = 'none';
            })
        }

        for (const button of doneBtn) {
            button.addEventListener('click', function (event) {
                event.target.parentNode.parentNode.style.textDecoration = "line-through";
            })
        }









    }
})