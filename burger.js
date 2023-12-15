export function addBurgerMenuEvents() {
    const burgerMenuEl = document.querySelector('#burgerMenu')
    const menuOpenButtonEl = burgerMenuEl.querySelector('#menuOpenButton')
    const overlayEl = burgerMenuEl.querySelector('#menuOverlay')
    const botao1El = burgerMenuEl.querySelector('#botao1')
    const botao2El = burgerMenuEl.querySelector('#botao2')
    const menuChild1El = burgerMenuEl.querySelector('#menuChild1')
    const menuChild2El = burgerMenuEl.querySelector('#menuChild2')
  
    menuOpenButtonEl.addEventListener('click', () => {
      const menuBaseEl = burgerMenuEl.querySelector('#menuBase')
      menuBaseEl.style.left = '0px'
      overlayEl.classList.add('active')
    })
  
    overlayEl.addEventListener('click', () => {
      const menuBaseEl = burgerMenuEl.querySelector('#menuBase')
      menuBaseEl.style.left = '-300px'
      overlayEl.classList.remove('active')
    })

    botao1El.addEventListener('click', () => {
        menuChild1El.style.left = '0px'
    })

    botao2El.addEventListener('click', () => {
        menuChild2El.style.left = '0px'
    })
  }