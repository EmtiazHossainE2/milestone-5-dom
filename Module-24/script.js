const blogTitle = document.getElementsByTagName('h2')
for (const h2 of blogTitle) {
    console.log(h2.innerText);
}
const blogPost = document.getElementsByTagName('p');
for (const p of blogPost) {
    console.log(p.innerText)
}