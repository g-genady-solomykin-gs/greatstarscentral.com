/* ===== БУРГЕР / НАВИГАЦИЯ ===== */
const burger = document.getElementById('burger')
const navLinks = document.getElementById('nav-links')
const tooltip = document.getElementById('burger-tooltip')
const tooltipOk = document.getElementById('tooltip-ok')

/* ===== АНИМАЦИЯ ФОНА ===== */
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

        setTimeout(() => {
            heroHeader.style.opacity = 1

            if (!localStorage.getItem('burgerTooltipSeen')) {
                tooltip.classList.add('show')
            }

        }, 500)

    }, fadeDuration)

}, gifDuration)

/* ===== БУРГЕР МЕНЮ ===== */
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navLinks.classList.toggle('active')
})

tooltipOk.addEventListener('click', () => {
    tooltip.classList.remove('show')
    localStorage.setItem('burgerTooltipSeen', 'true')
})

/* ===== TURBO MODAL ===== */
const openModal = document.getElementById('open-modal')
const modal = document.getElementById('turbo-modal')
const closeModal = document.getElementById('close-modal')
const checkBtn = document.getElementById('check-code')
const input = document.getElementById('turbo-code')
const errorMsg = document.getElementById('error-msg')
const successMsg = document.getElementById('success-msg')

openModal.addEventListener('click', () => {
    modal.style.display = 'flex'
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
    resetModal()
})

checkBtn.addEventListener('click', () => {
    if (input.value === '5931') {
        errorMsg.style.display = 'none'
        successMsg.style.display = 'block'
    } else {
        errorMsg.style.display = 'block'
        successMsg.style.display = 'none'
    }
})

function resetModal() {
    input.value = ''
    errorMsg.style.display = 'none'
    successMsg.style.display = 'none'
}

/* ===== ПОКАЗ TURBO-ПОДПИСКИ ПО КНОПКЕ ===== */
const showTurboBtn = document.getElementById('show-turbo')
const anniversaryBlock = document.querySelector('.uapohost-anniversary')

if (showTurboBtn && anniversaryBlock) {
    showTurboBtn.addEventListener('click', () => {
        anniversaryBlock.classList.add('show')

        anniversaryBlock.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


const brg = document.querySelector('#burger').addEventListener('click', (e) => {
  const show = document.querySelector('.uapohost-anniversary');
    if(show.classList.contains('show')) {
      show.classList.remove('show');
    } 
})