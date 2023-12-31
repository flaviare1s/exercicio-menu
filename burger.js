export function addBurgerMenuEvents() {
    const burgerMenuEl = document.querySelector('#burgerMenu')
    const menuOpenButtonEl = burgerMenuEl.querySelector('#menuOpenButton')
    const overlayEl = burgerMenuEl.querySelector('#menuOverlay')
    
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

    menuFilhoEl.forEach((childMenu, index) => {
        const botaoPaiEl = botoesPaisEl[index]
        const closeButtonEl = burgerMenuEl.querySelector(`#closeButton${index + 1}`)

        botaoPaiEl.addEventListener('click', () => {
            childMenu.style.left = '0px'
        })

        closeButtonEl.addEventListener('click', () => {
            childMenu.style.left = '-300px'
        })
    })
}