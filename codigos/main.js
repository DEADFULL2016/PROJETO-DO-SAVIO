const input = getElementById('nome')
const button = getElementById('entrar')

button.addEventListener('click',(event)=>{
   event.preventDefault()
   if (input.value.length <3){
       alert('nome muito curto!')
}

})
entrar.addEventListener('click',(event)=>{
    event.preventDefault()
    if (input.value.length == 0){
        alert('digite seu nome para continuar!')
 }
 })