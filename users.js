import { addBurgerMenuEvents } from './burger'
import './style.css'
import './users.css'

async function fetchUsers() {
  const rawUsers = await fetch('https://6597ee73668d248edf23ba81.mockapi.io/User')
  const users = await rawUsers.json()
  return users
}


async function users() {
  addBurgerMenuEvents()
  const users = await fetchUsers()
  console.log('Users:', users)

 
  const usersContainerEl = document.querySelector('#usersContainer')


    for (const user of users) {
      const userCard = document.createElement('div')
      userCard.classList.add('user-card')
  
      const userInformation = document.createElement('div')
      userInformation.classList.add('user-information')
  
      const userImageContainer = document.createElement('div')
      userImageContainer.classList.add('user-image-container')
  
      const userImageEl = document.createElement('img')
      userImageEl.src = user.avatar
      userImageEl.classList.add('user-image')
  
      const userNameEl = document.createElement('div')
      userNameEl.classList.add('user-name')
      userNameEl.innerHTML = user.name
  
  
      usersContainerEl.appendChild(userCard)
      userCard.appendChild(userInformation)
      userCard.appendChild(userImageContainer)
      userImageContainer.appendChild(userImageEl)
      userInformation.appendChild(userNameEl)
    }
  } 

users()