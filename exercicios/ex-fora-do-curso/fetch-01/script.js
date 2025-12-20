async function buscar() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const dados = await resposta.json()
        const h1 = document.getElementById('cep')
        h1.textContent = dados.id
    }
    catch(error) {
        alert(error)
    }
}
buscar()
