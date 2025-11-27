const botoes = document.querySelectorAll('.acao-btn')
const CLASSE_SELECIONADA = 'selecionado'
botoes.forEach(button => {
    button.addEventListener('click', function(e) {
        // --- Passo de Desseleção (Remover a borda de TODOS) ---
        // Itera novamente sobre todos os botões...
        botoes.forEach(button => {
            // ...e remove a classe 'selecionado' de cada um.
            // Se o botão não tiver a classe, .remove() não faz nada, o que é seguro.
            button.classList.remove(CLASSE_SELECIONADA)
        })
        // --- Passo de Seleção (Adicionar a borda ao botão clicado) ---
        // 'this' refere-se ao botão específico que foi clicado.
        this.classList.add(CLASSE_SELECIONADA)
        const valorPressionado = e.target.dataset.valor
        var contador = 1
        document.querySelector('#dois p').innerHTML = ""
        for (contador; contador <=10; contador++) {
            var resultado = Number(valorPressionado) * Number(contador)
            document.querySelector('#dois p').innerHTML += `${valorPressionado} x ${contador} = ${resultado}<br>`
        }
    })
})
