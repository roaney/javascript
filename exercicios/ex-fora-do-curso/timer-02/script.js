const h1 = document.querySelector('h1')
let soma = 0
function somar() {
    soma += 5
    return soma
}
setInterval(() => {
    h1.textContent = somar()
}, 5000)
