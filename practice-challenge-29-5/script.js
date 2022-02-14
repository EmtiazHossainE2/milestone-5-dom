//1
/* const sections = document.getElementsByClassName('section-title')
for (const section of sections) {
    section.style.color = 'red';
} */
/* document.getElementById('top-player').style.color = '#1B9D99';
document.getElementById('top-blog').style.color = '#1B9D99'
document.getElementById('latest-course').style.color = '#1B9D99'

//2 
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(122, 52, 187, 0.69)';
    player.style.borderRadius = '10%';
    player.style.padding = '10px';
    player.style.marginRight = '10px';
} */

//3 event bubble 
document.getElementById('add-list').addEventListener('click', function () {
    // console.log('clicked');
    const listParent = document.getElementById('list-parent');
    const li = document.createElement('li')
    li.innerText = 'New List Added';
    // console.log(listParent);
    listParent.appendChild(li)
})
//event delegate 
document.getElementById('list-parent').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target)
})

//4 
function plusBtn() {
    let inputField = document.getElementById('input-field');
    const plus = inputField.value;
    if (inputField.value < 5) {
        inputField.value = parseInt(plus) + 1;
    }

}
function minusBtn() {
    let inputField = document.getElementById('input-field');
    const minus = inputField.value;
    if (inputField.value > 0) {
        inputField.value = parseInt(minus) - 1;
    }
}


//৮. একটা array এর মধ্যে অনেকগুলা ইংরেজি জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম (স্ট্রিং) আছে। জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম না জানলে, গুগলে সার্চ দিয়ে বের করো। তারপর একটা লুপ চালিয়ে দেখো কোন কোন বইয়ের নামের মধ্যে "javascript" আছে। তাহলে সেই বইগুলার নাম আরেকটা array এর মধ্যে রাখবে। আর হ্যাঁ, যখন javascript আছে কিনা চেক করবে তখন খেয়াল করবে বড়হাতের নাকি ছোট হাতের অক্ষর সেটা বাদ দিয়ে চেক করতে। অর্থাৎ কেইস ইনসেন্সিটিভ হবে। 



function jsBookList(list) {
    let searching = 'javascript';
    let jsBook = []
    for (const book of list) {
        if (book.toLowerCase().includes(searching.toLowerCase())) {
            jsBook.push(book)
        }
    }
    return jsBook;
}

const bookList = [
    'A Smarter Way to Learn JavaScript',
    'JavaScript: The Definitive Guide',
    'Head First JavaScript Programming: A Brain-Friendly Guide',
    'Eloquent 3rd Edition',
    'JavaScript: The Good Parts',
    'High-Performance Browser Networking'
]
console.log(jsBookList(bookList));

// ৯. অনেকগুলা সংখ্যাওয়ালা একটা array নাও। তারপর সেই array কে sort করো। sort হবে ছোট থেকে বড় সংখ্যার সিরিয়াল অনুসারে। 

const numbers = [5, 2, 1, 7, 3, 9, 15, 8, 4, 6, 10, 20, 33, 21, 22, 33, 44, 38, 43, 29, 49, 59, 99, 111, 2223, 434, 3434, 3333, 3311, 1112]

const sort = numbers.sort(function (a, b) {
    return a - b;
})
console.log(sort)