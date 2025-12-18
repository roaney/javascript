const h1 = document.querySelector('h1')
const contador = setInterval(() => h1.textContent += 'Tic... ', 1000)
const botao = document.getElementById('parar')
botao.addEventListener('click', () => clearInterval(contador))
/*
    const contador = setInterval(() => console.log("Tic..."), 1000)
    const botao = document.getElementById('parar')
    botao.addEventListener('click', () => clearInterval(contador))
*/