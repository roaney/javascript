var p = document.createElement('p')
function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    document.getElementById('resultado').appendChild(p)
    if (inicio == false || fim == false) {
        p.innerHTML = ""
        document.getElementById('txt').innerHTML = 'Impossível contar!'
    } else if (passo == 0) {
        window.alert('Passo inválido, considerando passo 1.')
        passo = 1
        document.getElementById('txt').innerHTML = 'Contando:'
        p.innerHTML = ""
        if (inicio <= fim) {
            for (inicio; inicio <= fim; inicio += passo) {
                p.innerHTML += `${inicio} &#128073 `   
            }
        } else {
            for (inicio; inicio >= fim; inicio -= passo) {
                p.innerHTML += `${inicio} &#128073 `   
            }
        }
        p.innerHTML += '&#128308'
    } else if (inicio <= fim) {
        document.getElementById('txt').innerHTML = 'Contando:'
        p.innerHTML = ""
        for (inicio; inicio <= fim; inicio += passo) {
            p.innerHTML += `${inicio} &#128073 `   
        }
        p.innerHTML += '&#128308'
    } else {
        document.getElementById('txt').innerHTML = 'Contando:'
        p.innerHTML = ""
        for (inicio; inicio >= fim; inicio -= passo) {
            p.innerHTML += `${inicio} &#128073 `   
        }
        p.innerHTML += '&#128308'
    }
}
