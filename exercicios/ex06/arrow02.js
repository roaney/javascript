const relogio = {
    segundos: 0,
    iniciar: function() {
        // 🧠 'this' aqui é o objeto 'relogio'.
        // Tentativa 1: Usando uma Função Tradicional como callback
        // O que acontecerá com 'this' aqui dentro?
        // setTimeout(function() {
        //   this.segundos++ // Problema! 'this' será o escopo global.
        // }, 1000)
        
        // Tentativa 2: Usando uma Arrow Function como callback
        console.log("Iniciando relógio...")
        setTimeout(() => {
            // ✅ A Arrow Function herda o 'this' da função 'iniciar' que a contém.
            this.segundos++
            console.log(`Segundos: ${this.segundos}`)
        }, 1000)
    }
}
