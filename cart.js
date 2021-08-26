let products = [
    {name:"Silver", image:"silver.jpg", price:120},
    {name:"green", image:"green.jpg", price:230},
    {name:"Gold gown", image:"gold.jpg", price:270},
    {name:"Sets gown", image:"sets.jpg", price:250},
    {name:"Purple gown", image:"Purple.jpg", price:300},
    {name:"Black gown", image:"black.jpg", price:350}
];

let cart = []

function load() {
    const cartData = localStorage.getItem('cart');
    cart = JSON.parse(cartData)

    cart.forEach((i)=> {
        
        let item = document.createElement('div');
        item.innerHTML = `
        <div class="product">
        <img src="images/${products[i].image}">
        <p class="name">${products[i].name}</p>
        <p class="price">$${products[i].price}</p>
        <button class="remove">Remove</button>
        </div>
        `
        const items = document.getElementById('items');

        item.getElementsByClassName('remove')[0].addEventListener('click', (e)=>{
            remove(i, e)
        });

        items.append(item)
    });
    tot();
}

load();

function tot(){
    let total = 0;
    cart.forEach((i)=> {
        total += products[i].price
    });
    document.getElementById('total').innerText = total;
}

function remove(i, e){
    for (let j = 0; j < cart.length; j++) {
        if(cart[j] === i){
            cart.splice(j, 1)
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    
    e.target.parentElement.remove();
    tot();
    alert(`${products[i].name} removed from cart`)
    
}
