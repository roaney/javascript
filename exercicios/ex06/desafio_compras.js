const carrinho = [
    { nome: 'Maçã', categoria: 'Alimento', preco: 5 },
    { nome: 'Mouse', categoria: 'Eletrônicos', preco: 20 },
    { nome: 'Pão', categoria: 'Alimento', preco: 3 },
    { nome: 'Monitor', categoria: 'Eletrônicos', preco: 150 },
    { nome: 'Leite', categoria: 'Alimento', preco: 4 }
]

const alimentos = carrinho.filter(item => item.categoria == 'Alimento')
console.log(alimentos)
const precosComTaxa = alimentos.map(item => item.preco + 2)
console.log(precosComTaxa)
const total = precosComTaxa.reduce((total, item_atual) => total + item_atual, 0)
console.log(total)

/*
    const total = carrinho.filter(item => item.categoria == 'Alimento').map(item => item.preco + 2).reduce((total, item_atual) => total + item_atual, 0)
    console.log(total)
*/