async function buscarPreco() {
    try {
        const resposta = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        const preco = await resposta.json()
        const h1 = document.getElementById('cotacao')
        h1.textContent = preco.bitcoin.usd
    }
    catch(erro) {
        alert(erro)
    }
}
buscarPreco()
setInterval(buscarPreco, 10000)
