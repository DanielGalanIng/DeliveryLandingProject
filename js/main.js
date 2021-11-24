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