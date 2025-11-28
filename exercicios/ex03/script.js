var p = document.createElement('p')
document.getElementById('resultado').appendChild(p)
function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        p.innerHTML = ""
        document.getElementById('txt').innerHTML = 'Impossível contar!'
    } else {
        var inicio_numero = Number(inicio)
        var fim_numero = Number(fim)
        var passo_numero = Number(passo)
        document.getElementById('txt').innerHTML = 'Contando:'
        p.innerHTML = ""
        if (passo_numero == 0) {
            window.alert('Passo inválido, considerando passo 1.')
            passo_numero = 1
            if (inicio_numero <= fim_numero) {
                for (inicio_numero; inicio_numero <= fim_numero; inicio_numero += passo_numero) {
                    p.innerHTML += `${inicio_numero} &#128073 `   
                }
            } else {
                for (inicio_numero; inicio_numero >= fim; inicio_numero -= passo_numero) {
                    p.innerHTML += `${inicio_numero} &#128073 `   
                }
            }
            p.innerHTML += '&#128308'
        } else if (inicio_numero <= fim_numero) {
            for (inicio_numero; inicio_numero <= fim_numero; inicio_numero += passo_numero) {
                p.innerHTML += `${inicio_numero} &#128073 `   
            }
            p.innerHTML += '&#128308'
        } else {
            for (inicio_numero; inicio_numero >= fim_numero; inicio_numero -= passo_numero) {
                p.innerHTML += `${inicio_numero} &#128073 `   
            }
            p.innerHTML += '&#128308'
        }
    }
}
