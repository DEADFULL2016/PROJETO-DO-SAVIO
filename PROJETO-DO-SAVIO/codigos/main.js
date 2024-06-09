const input = document.getElementById('nome')
const button = document.getElementById('entrar')

button.addEventListener('click',(event)=>{
   event.preventDefault()
   if (input.value.length < 3){
       alert('nome muito curto!')
    if (input.value.length == 0){
        alert('digite seu nome para continuar!')
 }
}

})
entrar.addEventListener('click',(event)=>{
    event.preventDefault()
 
 })

 function entrar(){

    if (input.value.length < 3){
        alert('nome muito curto!')
     if (input.value.length == 0){
         alert('digite seu nome para continuar!')
  }     
  else{window.repa.location.href = 'menu inicial.html'}
}

 }
