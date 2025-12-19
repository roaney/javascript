function iniciarCronometro(dataObjetivo, idElemento) {
    const display = document.getElementById(idElemento);
    // Verificação de segurança: se o elemento não existir, paramos aqui.
    if (!display) {
        alert(`Elemento com id "${idElemento}" não encontrado!`);
        return;
    }
    const intervalo = setInterval(() => {
        const agora = new Date();
        const diferenca = dataObjetivo - agora;
        if (diferenca <= 0) {
            clearInterval(intervalo);
            display.textContent = "Tempo esgotado!";
            return;
        }
        const dias = Math.floor(diferenca / 86400000);
        const horas = String(Math.floor((diferenca % 86400000) / 3600000)).padStart(2, "0");
        const minutos = String(Math.floor((diferenca % 3600000) / 60000)).padStart(2, "0");
        const segundos = String(Math.floor((diferenca % 60000) / 1000)).padStart(2, "0");
        display.textContent = `${dias}d ${horas}:${minutos}:${segundos}`;
    }, 1000);
}
iniciarCronometro(new Date(2025, 11, 19), 'timer1')
iniciarCronometro(new Date(2025, 11, 20), 'timer2')
