const burger = document.getElementById('burger')
const navLinks = document.getElementById('nav-links')
const tooltip = document.getElementById('burger-tooltip')
const tooltipOk = document.getElementById('tooltip-ok')

// Фоновая смена (уже есть)
const banner = document.querySelector('.diff-banner')
const heroHeader = document.querySelector('.hero-header')
const gif = 'img/kolcevim.gif'
const img = 'img/final.jpeg'
const gifDuration = 2000
const fadeDuration = 1500

banner.style.backgroundImage = `url(${gif})`
banner.style.opacity = 1
heroHeader.style.opacity = 0

setTimeout(() => {
  banner.style.opacity = 0
  setTimeout(() => {
    banner.style.backgroundImage = `url(${img})`
    banner.style.opacity = 1

    // Плавное появление hero-header
    setTimeout(() => {
      heroHeader.style.opacity = 1

      // Показываем подсказку, если первый визит
      if(!localStorage.getItem('burgerTooltipSeen')) {
        tooltip.classList.add('show')
      }
    }, 500)
  }, fadeDuration)
}, gifDuration)

// Бургер меню
burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  navLinks.classList.toggle('active')
})

// Кнопка OK для подсказки
tooltipOk.addEventListener('click', () => {
  tooltip.classList.remove('show')
  localStorage.setItem('burgerTooltipSeen', 'true')
})
