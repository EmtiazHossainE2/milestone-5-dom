const products = [
    'HP Envy x360 13',
    'Dell XPS 13 2-in-1 laptop',
    'Lenovo ThinkPad X1 Nano. The best laptop for business travel.',
    'Razer Book 13 gaming Laptop',
    'Razer Blade Pro 17. A great choice for Gaming.'
]
const searching = 'laptop';
const output = []
for (const product of products) {
    if (product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1) {
        // output.push(product)
    }
}
// console.log(output);
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product)
    }
}

// console.log(output);

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product)
    }
}

console.log(output);