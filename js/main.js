//Show menu on click

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

//Remove menu mobile

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  document.getElementById('nav-menu').classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//Scroll sections active link

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

//Change background header 

function scrollHeader() {
  const header = document.getElementById('header')
  if (window.scrollY > 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

//Show scroll up button

function showScroll() {
  const scrollUp = document.getElementById('scroll-up')
  if (window.scrollY > window.innerHeight) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', showScroll)

//dark light theme 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// const selectTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => document.getElementById('theme-button').classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// if (selectTheme) {
//   document.body.classList[selectTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectTheme === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
// }

const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')

if (darkThemeMq.matches) {
  document.body.classList.add(darkTheme)
  themeButton.classList.add(iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // localStorage.setItem('selected-theme', getCurrentTheme())
  // localStorage.setItem('selected-icon', getCurrentIcon())
})