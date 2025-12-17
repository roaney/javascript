const usuario = {
    nome: "Júlia",
    idade: 30,
    // Método usando função tradicional
    apresentarTradicional: function() {
        console.log(`Função Tradicional - this.nome: ${this.nome}`) // "Júlia"
    },
    // Método usando Arrow Function
    apresentarArrow: () => {
        // ESTE é o erro comum! 'this' herda do escopo global/do módulo,
        // onde 'this.nome' não está definido.
        console.log(`Arrow Function - this.nome: ${this.nome}`) // undefined (ou outro valor, dependendo do ambiente)
    }
}
usuario.apresentarTradicional() // Output: Função Tradicional - this.nome: Júlia
usuario.apresentarArrow()       // Output: Arrow Function - this.nome: undefined