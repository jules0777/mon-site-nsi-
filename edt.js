// Code JavaScript pour afficher/cacher un message d'aide
const bouton=document.querySelector('#bouton_aide');
const message=document.querySelector('#message_aide');
bouton.addEventListener('click',()=>{
     // Si le message est déjà affiché, le cacher ; sinon, l'afficher
    if(message.style.display == 'block'){
        message.style.display = 'none';
    }else{
        message.style.display = 'block';
    }
    

})