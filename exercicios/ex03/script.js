var p = document.createElement('p')
function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    document.getElementById('resultado').appendChild(p)
    if (inicio == false || fim == false || passo == false) {
        document.getElementById('txt').innerHTML = 'Impossível contar!'
    } else {
        document.getElementById('txt').innerHTML = 'Contando:'
        p.innerHTML = ""
        for (inicio; inicio <= fim; inicio += passo) {
            p.innerHTML += `${inicio} &#128073 `   
        }
        p.innerHTML += '&#128308'
    }
}