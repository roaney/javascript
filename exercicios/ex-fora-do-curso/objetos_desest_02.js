const usuario = {
    id: 101,
    username: 'coder_master',
    email: 'cm@example.com'
    // falta a propriedade "condicao"
}
const { id, username, email: emailUsuario, condicao = 'Ativo' } = usuario
console.log(id, username, emailUsuario, condicao)
