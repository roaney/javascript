const precos = [50, 15, 8, 120, 40, 9]
const soma_precos = precos.reduce((soma, atual) => soma + atual, 0)
console.log(soma_precos)
