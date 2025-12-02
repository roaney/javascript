document.getElementById('adicionar').addEventListener('click', add)
document.getElementById('finalizar').addEventListener('click', finish)
let valores = []
function add() {
    let novo_valor = Number(document.getElementById('numero').value)
    if (valores.indexOf(novo_valor) != -1 || novo_valor < 1 || novo_valor > 100 || novo_valor.length == 0) {
        window.alert('Valor inválido ou já inserido na lista.')
    } else {
        valores.push(novo_valor)
        document.getElementById('txtvalores').innerHTML += `Valor ${novo_valor} adicionado.<br>`
        document.getElementById('txtresultado').innerHTML = ""
    }
}
function finish() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        document.getElementById('txtresultado').innerHTML = "" 
        let results = [quant(), maior(), menor(), soma(), media()]
        results.forEach(elemento => {
            document.getElementById('txtresultado').innerHTML += elemento
        })
    }
}
function quant() {
    return `Ao todo, temos ${valores.length} números cadastrados.<br>`
}
function maior() {
    let maior_valor = valores[0]
    valores.forEach(elemento => {
        if (elemento > maior_valor) {
            maior_valor = elemento
        }
    })
    return `O maior valor informado foi ${maior_valor}.<br>`
}
function menor() {
    let menor_valor = valores[0]
    valores.forEach(elemento => {
        if (elemento < menor_valor) {
            menor_valor = elemento
        }
    })
    return `O menor valor informado foi ${menor_valor}.<br>`
}
function soma() {
    let soma_valores = 0
    valores.forEach(elemento => {
        soma_valores += elemento
    })
    return `Somando todos os valores, temos ${soma_valores}.<br>`
}
function media() {
    let soma_valores = 0
    valores.forEach(elemento => {
        soma_valores += elemento
    })
    let media_valores = soma_valores / valores.length
    return `A média dos valores digitados é ${media_valores.toFixed(2).replace('.', ',')}.`
}
