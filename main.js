import { addBurgerMenuEvents } from './burger'
import './style.css'


async function fetchProducts() {
  const rawProducts = await fetch('https://6597ee73668d248edf23ba81.mockapi.io/Product')
  const products = await rawProducts.json()
  return products
}

async function fetchUsers() {
  const rawUsers = await fetch('https://6597ee73668d248edf23ba81.mockapi.io/User')
  const users = await rawUsers.json()
  return users
}


async function main() {
  addBurgerMenuEvents()
  const products = await fetchProducts()
  console.log('### Products:', products)
  const users = await fetchUsers()
  console.log('### Users:', users)
  
  const productsContainerEl = document.querySelector('#productsContainer')

  for (const product of products) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productInformation = document.createElement('div')
    productInformation.classList.add('product-information')

    const imageContainer = document.createElement('div')
    imageContainer.classList.add('image-container')

    const imageEl = document.createElement('img')
    imageEl.src = product.image

    const productNameEl = document.createElement('div')
    productNameEl.classList.add('product-name')
    productNameEl.innerHTML = product.name
    
    const productPriceEl = document.createElement('div')
    productPriceEl.classList.add('product-price')
    productPriceEl.innerHTML = 'R$' + ' ' + product.price

    productsContainerEl.appendChild(productCard)
    productCard.appendChild(imageContainer)
    imageContainer.appendChild(imageEl)
    productCard.appendChild(productInformation)
    productInformation.appendChild(productNameEl)
    productInformation.appendChild(productPriceEl)
  }
}

main()