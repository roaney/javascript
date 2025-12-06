// 1. Definição do Array
const produtos = ["Monitor", "Mouse", "Teclado", "Webcam", "Cadeira Gamer"];
// 2. Uso do método forEach para iterar sobre o array
console.log("--- Lista de Produtos ---");
produtos.forEach(function(produto, indice) {
  // A função de callback é executada para cada item
  // 'produto' recebe o valor ("Monitor", "Mouse", etc.)
  // 'indice' recebe a posição (0, 1, 2, etc.)

  console.log(`[${indice + 1}] - O item é: ${produto}`);
});
console.log("--------------------------");