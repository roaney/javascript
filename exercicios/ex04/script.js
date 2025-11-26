const botoes = document.querySelectorAll('.acao-btn');
botoes.forEach(button => {
    button.addEventListener('click', function(e) {
        const valorPressionado = e.target.dataset.valor;
        var contador = 1
        document.querySelector('#dois p').innerHTML = ""
        for (contador; contador <=10; contador++) {
            var resultado = Number(valorPressionado) * Number(contador)
            document.querySelector('#dois p').innerHTML += `${valorPressionado} x ${contador} = ${resultado}<br>`
        }
    });
});
