document.addEventListener('DOMContentLoaded', horario)
function horario() {
    var hora = new Date().getHours()
    // var hora = 5
    var txt = window.document.getElementById('txthr')
    var fundo = window.document.querySelector('body')
    var imagem = window.document.querySelector('main img')
    txt.innerText = `Agora são ${hora} horas.`
    if (hora < 6 || hora >= 18) {
        fundo.style.backgroundColor = 'rgb(50, 50, 50)'
        imagem.src = 'noite.jpg'
        window.document.querySelector('body > p').style.color = 'white'
    } else if (hora < 12) {
        fundo.style.backgroundColor = 'rgb(111, 195, 250)'
        imagem.src = 'amanhecer.jpg'
    } else {
        fundo.style.backgroundColor = 'rgb(255, 169, 72)'
        imagem.src = 'tarde.jpg'
    }
}