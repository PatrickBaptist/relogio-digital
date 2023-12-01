    const clock = document.createElement('span')
    clock.className = 'clock'
    const minutes = document.createElement('span')
    minutes.className = 'minutes'
    const seconds = document.createElement('span')
    seconds.className = 'seconds'

const relogio = setInterval(function time() {
    const horas = document.getElementById('horas')
    const minutos = document.getElementById('minutos')
    const segundos = document.getElementById('segundos')

    horas.appendChild(clock)
    minutos.appendChild(minutes)
    segundos.appendChild(seconds)

    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (s < 10) s = '0' + s

    clock.textContent = hr
    minutes.textContent = min
    seconds.textContent = s
    
})

function carregar() {
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()

if (hora >= 6 && hora < 12) {
    img.src = './imagens/manha.jpg'
    document.body.style.background = '#fce891'
} else if (hora >= 12 && hora <= 18) {
    img.src = './imagens/tarde.jpg'
    document.body.style.background = '#b72c03'
} else {
    img.src = './imagens/noite.jpg'
    document.body.style.background = '#0a191c'
}
}

setInterval( function() { carregar(); }, 60 );
    carregar(); //carrega a função a cada min
