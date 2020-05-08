import '../scss/style.scss'
import menu from './modules/menu.js'

import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-lua.min.js'

window.addEventListener('DOMContentLoaded', function() {
  const $menu = document.querySelector('.menu__items')
  const $menu_btn = document.querySelector('.menu__btn')
  const $menu_bg = document.querySelector('.menu__bg')

  $menu_btn.addEventListener('click', () => { menu($menu, $menu_btn) })
  $menu_bg.addEventListener('click', () => { menu($menu, $menu_btn) })
  Prism.highlightAll()
})