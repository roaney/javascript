function exemploLet() {
  let a = 10; // Escopo de função
  if (true) {
    let a = 20; // Variável diferente (com escopo próprio dentro do 'if')
    let b = 30; // Escopo limitado ao 'if'
    console.log("Dentro do if (a):", a); // 20
    console.log("Dentro do if (b):", b); // 30
  }
  // let a = 50; // ERRO: Redeclaração não permitida no mesmo escopo
  a = 50; // OK: Reatribuição permitida
  console.log("Fora do if (a):", a); // 50 (o valor do bloco 'if' não afetou esta)
  // console.log("Fora do if (b):", b); // ERRO: 'b' não está definido fora do 'if'
}
exemploLet();
// Dentro do if (a): 20
// Dentro do if (b): 30
// Fora do if (a): 50