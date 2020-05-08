export default function menuToggle(menu, trigger) {
  const $body = document.getElementsByTagName('body')[0]
  const $menu_bg = document.querySelector('.menu__bg')

  $body.style.overflow ? $body.style.overflow = '' : $body.style.overflow = 'hidden'
  $menu_bg.classList.toggle('is-active')
  menu.classList.toggle('is-active')
  trigger.classList.toggle('is-active')
}