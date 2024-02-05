const overlay = document.querySelector('.overlay')
const nav = document.querySelector('.nav')
const nav__menu = nav.querySelector('.nav__menu')
const menuOpen = nav.querySelector('.nav__btn')
const menuClose = nav.querySelector('.nav__menu--close_btn')


nav.addEventListener('click', function(e) {
  if(e.target.closest('.nav__btn')) {
    overlay.classList.remove('hidden')
    nav__menu.style.transform = 'translateX(-100%)'
    console.log('open menu')
  }
  if(e.target.closest('.nav__menu--close_btn')) {
    overlay.classList.add('hidden')
    nav__menu.style.transform = 'translateX(100%)'
  }


  // console.log(e.target)
})