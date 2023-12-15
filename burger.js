export function addBurgerMenuEvents() {
    const burgerMenuEl = document.querySelector('#burgerMenu')
    const menuOpenButtonEl = burgerMenuEl.querySelector('#menuOpenButton')
    const overlayEl = burgerMenuEl.querySelector('#menuOverlay')
    const botao1El = burgerMenuEl.querySelector('#botao1')
    const botao2El = burgerMenuEl.querySelector('#botao2')
    const menuChild1El = burgerMenuEl.querySelector('#menuChild1')
    const menuChild2El = burgerMenuEl.querySelector('#menuChild2')
    const closeButton1El = burgerMenuEl.querySelector('#closeButton1')
    const closeButton2El = burgerMenuEl.querySelector('#closeButton2')
    const botoesPaisEl = Array.from(burgerMenuEl.querySelectorAll('.botaoPai'))
    const menuFilhoEl = Array.from(burgerMenuEl.querySelectorAll('.child'))
  
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

    closeButton1El.addEventListener('click', () => {
        menuChild1El.style.left = '-300px'
    })

    closeButton2El.addEventListener('click', () => {
        menuChild2El.style.left = '-300px'
    })

    for (const botaoPaiEl of botoesPaisEl) {
        botaoPaiEl.addEventListener('click', () => {
            menuFilhoEl.style.left = '0px'
        })
    }
  }