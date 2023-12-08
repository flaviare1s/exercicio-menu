import './style.css'

const burgerMenu = document.querySelector('#burger-icone')
const LinksMenuPrincipal = document.querySelectorAll('.link-menu-principal')

burgerMenu.addEventListener('click', () => {
  for( const LinkMenuPrincipal of LinksMenuPrincipal) {
    if ( LinkMenuPrincipal.style.display === 'none') {
      LinkMenuPrincipal.style.display = 'block'
    } else {
      LinkMenuPrincipal.style.display = 'none'
    }
  }
})