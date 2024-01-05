import { addBurgerMenuEvents } from './burger'
import './style.css'


async function fetchProducts() {
  const products = await fetch('https://6597ee73668d248edf23ba81.mockapi.io/Product')
  return products
}


async function main() {
  addBurgerMenuEvents()
  const products = await fetchProducts()
  console.log('### products:', products)
}

main()