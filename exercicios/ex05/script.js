document.getElementById('adicionar').addEventListener('click', add)
document.getElementById('finalizar').addEventListener('click', finish)
let valores = []
function add() {
    let novo_valor = document.getElementById('numero').value
    if (valores.indexOf(novo_valor) != -1 || novo_valor < 1 || novo_valor > 100 || novo_valor.length == 0) {
        window.alert('Valor inválido ou já inserido na lista.')
    } else {
        valores.push(novo_valor)
        document.getElementById('txtvalores').innerHTML += `Valor ${novo_valor} adicionado.<br>`
    }
}
function finish() {
    document.getElementById('txtresultado').innerHTML = quant(), maior(), menor(), soma(), media()
}
function quant() {
    return `Ao todo, temos ${valores.length} números cadastrados.<br>`
}
