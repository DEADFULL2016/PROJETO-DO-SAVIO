document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('nome');
    const button = document.getElementById('entrar');

    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (input.value.length == 0) {
            alert('Digite seu nome para continuar!');
        } else if (input.value.length < 3) {
            alert('Nome muito curto!');
        } else {
            window.location.href = 'menu inicial.html'; 
        }
    });
});
