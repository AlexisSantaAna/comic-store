// template items //

// items arriba de todo
const items = document.getElementById('items')
const products = document.getElementById('products')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
// template modals //
const modals = document.getElementById('all-modals')
const templateModals = document.getElementById('template-modals').content
//Carrito
let carrito = {}


// ejecuta todo al cargar DOM - Carga de datos
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})

// func. consumo los datos del archivo JSON
const fetchData = async () => {
    try {
        const res = await fetch('../api.json')
        const data = await res.json()
        pintarCards(data)
        pintarModals(data)
    } catch (error) {
        console.log(error)
    }
}

// Agregar al carrito
items.addEventListener('click', e => {
    addCarrito(e)
})

products.addEventListener('click', e => {
    btnAccion(e)
})

const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('h5').textContent = item.title
        templateCard.querySelector('span').textContent = item.price
        templateCard.querySelector('img').setAttribute('src', item.thumbnailUrl)
        templateCard.querySelector('img').setAttribute('data-mdb-target', item.modal)
        templateCard.querySelector('button').setAttribute('data-id', item.id)
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}

const pintarModals = data => {
    data.forEach(item => {
        templateModals.querySelector('h5').textContent = item.title
        templateModals.querySelector('img').setAttribute('src', item.thumbnailUrl)
        templateModals.querySelector('.modal').setAttribute('id', item.modal_id)
        templateModals.querySelector('.modal-text').textContent = item.info
        const clone = templateModals.cloneNode(true)
        fragment.appendChild(clone)
    })
    modals.appendChild(fragment)
}

// Acción click en botón comprar

const addCarrito = e => {
    // operador lógico AND
    e.target.classList.contains('btn-2') && setCarrito(e.target.parentElement)
    e.stopPropagation() // detiene cualquier otro evento que pueda generarse en nuestros items (que provengan del padre)
}

// Cuando hago click en comprar empujo todos esos elementos en el carrito
const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-2').dataset.id,
        title: objeto.querySelector('h5').textContent,
        price: objeto.querySelector('span').textContent,
        quantity: 1,
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.quantity = carrito[producto.id].quantity + 1
    }

    carrito[producto.id] = { ...producto }

    // Toastify
    const selectedComic = objeto.querySelector('h5').textContent
    Toastify({
        text: `${selectedComic}\nADDED TO CART!`,
        duration: 2400,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #ba0101, #e64949)",
        },
        onClick: function () { } // Callback after click
    }).showToast();

    pintarCarrito()
}

const pintarCarrito = () => {
    products.innerHTML = ""
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.quantity // accedo al segundo elemento td
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.quantity * producto.price

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    products.appendChild(fragment)

    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))

    //Probando...
    if (document.getElementById('quantity-total') == null) {
        let totalItems = 0
        localStorage.setItem('carritoTotal', totalItems)
        document.getElementById('total-cart').textContent = totalItems
    } else {
        totalItems = document.getElementById('quantity-total').textContent
        localStorage.setItem('carritoTotal', totalItems)
        document.getElementById('total-cart').textContent = totalItems         
    }
}

const pintarFooter = () => {
    footer.innerHTML = ""
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
      <th scope="row" colspan="5">Empty cart - Get some comics!</th>
      `
        return
    }

    const nCantidad = Object.values(carrito).reduce((acc, { quantity }) => acc + quantity, 0)
    const nPrecio = Object.values(carrito).reduce((acc, { price, quantity }) => acc + price * quantity, 0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })
}

const btnAccion = (e) => {
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.quantity++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    } else if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.quantity--
        // operador AND
        producto.quantity === 0 && delete carrito[e.target.dataset.id]
        pintarCarrito()
    }

    e.stopPropagation()
}