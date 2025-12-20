const resposta = await fetch("https://viacep.com.br/ws/01001000/json/")
const dados = await resposta.json()
// const h1 = document.getElementById('cep')
// h1.textContent = dados
console.log(dados)
