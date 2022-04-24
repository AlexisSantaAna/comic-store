// Entrega tp eventos

const addCart = document.querySelectorAll('.btn-2,.btn-4')
console.log(addCart)

for (const cart of addCart) {
    cart.onclick = () => alert("Added to cart")
}