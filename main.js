import './style.css'

const burgerMenu = document.querySelector('#burger-icone1')
const LinksMenuPrincipal = document.querySelectorAll('.link-menu-principal')
const link2 = document.querySelector('#link2')
const LinksMenuLink2 = document.querySelectorAll('.link-menu-link2')
const burgerMenu2 = document.querySelector('#buger-icone2')

burgerMenu.addEventListener('click', () => {
  for( const LinkMenuPrincipal of LinksMenuPrincipal) {
    if ( LinkMenuPrincipal.style.display === 'none') {
      LinkMenuPrincipal.style.display = 'block'
    } else {
      LinkMenuPrincipal.style.display = 'none'
    }
  }
})

link2.addEventListener('click', () => {
  alert ('Teste')
  // for ( const LinkMenuLink2 of LinksMenuLink2) {
  //   if ( LinkMenuLink2.style.display === 'none') {
  //     LinkMenuLink2.style.display === 'block'
  //   } else {
  //     LinkMenuLink2.style.display === 'none'
  //   }
  // }
})