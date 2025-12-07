function Temporizador() {
  this.segundos = 0;
  
  // Função tradicional em setTimeout:
  // 'this' aqui dentro apontaria para o objeto 'global'
  // (ou undefined em modo estrito), NÃO para o objeto Temporizador.
  // setTimeout(function() {
  //   this.segundos++; // Erro/Comportamento inesperado
  // }, 1000);
  
  // Arrow Function em setTimeout:
  // 'this' herda o 'this' da função Temporizador.
  // 'this.segundos' refere-se corretamente à propriedade do objeto Temporizador.
  setTimeout(() => {
    this.segundos++; 
    console.log(`Passou 1 segundo. Segundos: ${this.segundos}`);
  }, 1000);
}

const tempo = new Temporizador();
// (Se executarmos, 'tempo.segundos' será 1 após 1 segundo)