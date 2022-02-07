const blogTitle = document.getElementsByTagName('h2')
for (const h2 of blogTitle) {
    console.log(h2.innerText);
}
const blogPost = document.getElementsByTagName('p');
for (const p of blogPost) {
    console.log(p.innerText)
}

// get Element by id  

const title2 = document.getElementById('title-2')
title2.style.textAlign = 'center'
title2.style.color = '#fff'
title2.style.padding = '10px'
title2.style.margin = '50px'
title2.style.borderRadius = '10px'
title2.style.backgroundColor = 'red'

// tooltip js 
title2.setAttribute('title', 'This is tooltip using js ')

const blogText = document.getElementById('blog2');
blog2.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo blanditiis quaerat asperiores ratione doloremque iure laudantium harum velit temporibus nisi enim quam quas illum praesentium fugit, dolorum nihil tempora molestias similique nam eveniet necessitatibus sed. Itaque pariatur veritatis voluptatum?';
blog2.style.color = 'red'
blog2.style.fontSize = '20px'
blog2.style.fontWeight = 'blod'

// explore getElementByClassName 
const blogs = document.getElementsByClassName('blog')
for (const blog of blogs) {
    blog.style.border = '2px solid orange'
    blog.style.borderRadius = '10px'
    blog.style.margin = '6px'
    blog.style.padding = '10px'
}

/* const query = document.querySelectorAll('.blog p')
    .blog p.style.color = 'green' */

// get and add element using js 
//create element 
const li = document.createElement('li')
li.innerText = 'blog-5';

// where to add 
const ul = document.getElementById('blog-list')

//append new element 
ul.appendChild(li) 
