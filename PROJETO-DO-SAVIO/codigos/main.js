const button = document.querySelector('.entrar')


button.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const username = document.querySelector("#username").value;
    console.log(email);
    if(username.length == 0 || username.length < 8) {
        alert('Por favor,\n preencha o campo de usuário com pelo menos 8 caracteres!');
    }
    
    else if(password.length == 0 || password.length < 7) {
        alert('Por favor,\n preencha o campo de senha com pelo menos 7 caracteres!');
    }

    else if(email.length == 0 || email.length < 23) {
        alert('Por favor,\n preencha o campo de email com pelo menos 23 caracteres!');
    }

    else{window.location.href = 'menu inicial.html'; }
})