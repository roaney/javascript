const precos = [50, 15, 8, 120, 40, 9]
const precosBaixos = precos.filter(valor => valor < 30)
// Resultado: [15, 8, 9]
console.log(precosBaixos)
