const menu = document.querySelector('#menu')
const headerList = document.querySelector('.c-header__list')
const burgerButton = document.querySelector('#burger-button')

const toggle = () => {
  menu.classList.toggle('c-header__nav--active')
}

burgerButton.addEventListener('click', toggle)

headerList.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    toggle()
  }
})

