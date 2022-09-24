const container = document.getElementById('container')

const api ='https://fakestoreapi.com/products/'
    
const createCard = (info) => {
    const card = document.createElement('div')
    card.classList.add('card')
    // card.innerHTML = info.title
    card.innerHTML = `<div class="title">
    <h1>${info.title}</h1>
    <p>${info.price}</p>
    </div>`

    return card
}

// for (let i=0; i < 10; i++) {
//     container.appendChild(createCard())
// }

const getProducts = async () => {
    const res = await fetch(api)
    const data = await res.json()
    console.log(data)
    data.forEach(e => {
        container.appendChild(createCard(e))
        
    });
}

getProducts()