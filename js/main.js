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
