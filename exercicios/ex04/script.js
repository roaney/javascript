const botoes = document.querySelectorAll('.acao-btn');
botoes.forEach(button => {
    button.addEventListener('click', function(e) {
        const valorPressionado = e.target.dataset.valor;
        document.querySelector('div p').innerHTML = valorPressionado
    });
});
