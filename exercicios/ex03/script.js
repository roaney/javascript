var p = document.createElement('p')
function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    document.getElementById('resultado').appendChild(p)
    document.getElementById('txt').innerHTML = `Contando: ${inicio} ${fim} ${passo}`
    /*for (inicio; inicio <= fim; inicio + 1) {
        p.innerHTML += `${inicio} &#128073 `
    }*/
}