const txt = document.getElementById('mensagem')
const botao = document.getElementById('mudar-texto')
botao.addEventListener('click', () => txt.textContent = 'O texto foi alterado!')
