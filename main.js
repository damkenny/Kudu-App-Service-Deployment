let products = [
    {name:"Silver", image:"silver.jpg", price:120},
    {name:"Green", image:"green.jpg", price:230},
    {name:"Gold gown", image:"gold.jpg", price:270},
    {name:"Sets gown", image:"sets.jpg", price:250},
    {name:"Purple gown", image:"Purple.jpg", price:300},
    {name:"Black gown", image:"black.jpg", price:350}
];

let cart = []


function load() {
    products.forEach((i, index)=> {
        
        let item = document.createElement('div');
        item.innerHTML = `
        <div class="product">
        <img src="images/${i.image}">
        <p class="name">${i.name}</p>
        <p class="price">$${i.price}</p>
        <button class="add">Add to cart</button>
        </div>
        `
        const items = document.getElementById('items');

        item.getElementsByClassName('add')[0].addEventListener('click', ()=>{
            addTocart(index)
        });

        items.append(item)
    });
}

load();

function addTocart(index){
    cart.push(index)
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${products[index].name} added to cart`)
}

