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

const blogText = document.getElementById('blog2');
blog2.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo blanditiis quaerat asperiores ratione doloremque iure laudantium harum velit temporibus nisi enim quam quas illum praesentium fugit, dolorum nihil tempora molestias similique nam eveniet necessitatibus sed. Itaque pariatur veritatis voluptatum?';
blog2.style.color = 'red'
blog2.style.fontSize = '20px'
blog2.style.fontWeight = 'blod'