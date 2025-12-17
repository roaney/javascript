// DESESTRUTURAÇÃO DE OBJETO EM FUNÇÃO
const produto = { nome: 'Teclado', preco: 150, marca: 'Logitech' }
function mostrarEtiqueta({nome, preco}) {
    console.log(`Produto: ${nome} | Preço: ${preco}`)
}
mostrarEtiqueta(produto)

// DESESTRUTURAÇÃO DE ARRAY EM FUNÇÃO
const products = [ 'Teclado', 150, 'Logitech' ]
function mostrarEtiquetaProduto([nome, preco]) {
    console.log(`Produto: ${nome} | Preço: ${preco}`)
}
mostrarEtiquetaProduto(products)
