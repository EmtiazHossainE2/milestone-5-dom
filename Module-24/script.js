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



const query = document.querySelectorAll('.blog p')
for (const num of query) {
    num.style.color = 'green'
}

// get and add element using js 
//create element 
const li = document.createElement('li')
li.innerText = 'blog-5';

// where to add 
const ul = document.getElementById('blog-list')

//append new element 
ul.appendChild(li)

// add article 
const article = document.createElement('article')
article.classList.add('blog')
// manually add  
/* const h2 = document.createElement('h2')
h2.innerText = 'My-Awesome-Blog-4'
const p = document.createElement('p')
p.innerText = 'ipsum dolor sit amet consectetur adipisicing elit. Error quisquam necessitatibus quidem aute';
article.appendChild(h2);
article.appendChild(p); */

// innerHTML 
article.innerHTML = `
    <h2>My-Awesome-Blog-4 </h2>
    <p>ipsum dolor sit amet consectetur adipisicing elit. Error quisquam necessitatibus quidem aute</p>
`

const blogsSection = document.getElementById('blogs')
blogsSection.appendChild(article)



// explore getElementByClassName 
const blogs = document.getElementsByClassName('blog')
for (const blog of blogs) {
    blog.style.border = '2px solid orange'
    blog.style.borderRadius = '10px'
    blog.style.margin = '6px'
    blog.style.padding = '10px'
}
