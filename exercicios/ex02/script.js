var img = window.document.createElement('img')
function verificar_idade() {
    var ano_atual = new Date().getFullYear()
    var nascimento = window.document.getElementById('ano').value
    var idade = ano_atual - nascimento
    var selecionado = document.querySelector('input[name="sex"]:checked').value
    window.document.getElementById('dois').appendChild(img)
    if (idade < 1 || idade >= 130) {
        window.alert('Verifique os dados e tente novamente!')
    } else if (selecionado == 'mulher') {
        document.getElementById('txtidade').innerText = `Detectamos ${selecionado} com ${idade} anos.`
        if (idade < 12) {
            img.src = 'menina.jpg'
        } else if (idade < 18) {
            img.src = 'menina_adolescente.jpg'
        } else if (idade < 60) {
            img.src = 'mulher_adulta.jpg'
        } else {
            img.src = 'mulher_idosa.jpg'
        }
    } else if (selecionado == 'homem') {
        document.getElementById('txtidade').innerText = `Detectamos ${selecionado} com ${idade} anos.`
        if (idade < 12) {
            document.querySelector('#dois img').src = 'menino.jpg'
        } else if (idade < 18) {
            document.querySelector('#dois img').src = 'menino_adolescente.jpg'
        } else if (idade < 60) {
            document.querySelector('#dois img').src = 'homem_adulto.jpg'
        } else {
            document.querySelector('#dois img').src = 'homem_idoso.jpg'
        }
    }
}