const h1 = document.querySelector('h1')
let soma = 0
function somar() {
    soma += 5
    return soma
}
const intervalo = setInterval(() => {
    h1.textContent = somar()
    if (soma == 50) {
        clearInterval(intervalo)
    }
}, 2000)
