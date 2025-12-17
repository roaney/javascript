const itensDoCarrinho = document.querySelectorAll('.produto-carrinho')
const [item1, item2, item3] = itensDoCarrinho
item3.style.color = 'red'
/*
item1.addEventListener('click', function() {
    return alert('Clicou!')
})
*/
item1.addEventListener('click', () => alert('Clicou!'))
item1.style.cursor = 'pointer'
