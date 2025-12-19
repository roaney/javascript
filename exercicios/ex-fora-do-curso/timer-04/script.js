const dataAlvo = new Date(2025, 11, 25);
const display = document.getElementById('timer');
const contagem = setInterval(() => {
    const agora = new Date();
    const diferenca = dataAlvo - agora;
    if (diferenca <= 0) {
        clearInterval(contagem);
        display.textContent = "Feliz Aniversário! 🎉";
        return;
    }
    // Cálculos que fizemos juntos 📐
    const dias = Math.floor(diferenca / 86400000);
    const horas = String(Math.floor((diferenca % 86400000) / 3600000)).padStart(2, "0");
    const minutos = String(Math.floor((diferenca % 3600000) / 60000)).padStart(2, "0");
    const segundos = String(Math.floor((diferenca % 60000) / 1000)).padStart(2, "0");
    // Atualizando o DOM 🖥️
    display.textContent = `${dias}d ${horas}:${minutos}:${segundos}`;
}, 1000);
