// items arriba de todo
const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

// ejecuta todo al cargar DOM - Carga de datos
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

// func. consumo los datos del archivo JSON
const fetchData = async () => {
    try {
        const res = await fetch('../api.json')
        const data = await res.json()
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}


const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('h5').textContent = item.title
        templateCard.querySelector('p').textContent = `$${item.price}`
        templateCard.querySelector('img').setAttribute('src', item.thumbnailUrl)
        templateCard.querySelector('img').setAttribute('data-mdb-target', item.modal)
        templateCard.querySelector('button').setAttribute('data-id', item.id)
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}