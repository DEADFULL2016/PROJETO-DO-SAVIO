const button = document.querySelector('.entrar')

const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;
console.log(email)

button.addEventListener('click',(e) => {
    e.preventDefault()
    if (password.value.lengh==0){
        alert('nao') 
    }
    else{window.location.href = 'menu inicial.html'; }

    
})
