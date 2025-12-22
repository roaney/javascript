async function buscarPreco() {
    const h1 = document.getElementById('cotacao')
    try {
        const resposta = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        // Se o fetch falhar (ex: erro 404), podemos forçar um erro aqui
        if (!resposta.ok) {
            throw new Error("Não foi possível conectar com o servidor.");
        }
        const preco = await resposta.json()
        h1.textContent = preco.bitcoin.usd
    } catch(erro) {
        alert(erro)
        h1.textContent = 'Indisponível'
    }
}
buscarPreco()
setInterval(buscarPreco, 10000)
