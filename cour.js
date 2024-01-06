//code javascript pour faire la barre de recherche


//on commence par defnir une constante pour chaque jour

const date1=document.getElementById("06/09");
const date2=document.getElementById("07/09");
const date3=document.getElementById("13/09");
const date4=document.getElementById("14/09");
const date5=document.getElementById("20/09");
const date6=document.getElementById("21/09");
const date7=document.getElementById("27/09");
const date8=document.getElementById("28/09");
const date9=document.getElementById("04/10");
const date10=document.getElementById("05/10");
const date11=document.getElementById("11/10");
const date12=document.getElementById("12/10");
const date13=document.getElementById("16/10");
const date14=document.getElementById("18/10");
const date15=document.getElementById("19/10");
const date16=document.getElementById("05/11");
const date17=document.getElementById("08/11");
const date18=document.getElementById("09/11");
const date19=document.getElementById("15/11");
const date20=document.getElementById("16/11");
const date21=document.getElementById("22/11");
const bontonrecherche= document.getElementById("boutonrecherche");


//lorsqu'on clique sur le bouton on stoque la valeur tapé par l'utilisateur puis on la fait correspondre à une constante (une date) 

bontonrecherche.addEventListener("click", () => {
    const input_date = document.getElementById("input_date").value;
    // Affichage de la date et de la valeur saisie dans la console (à des fins de débogage)
    console.log(date1)
    console.log(input_date)
    // Utilisation de conditions pour faire correspondre la date saisie à une constante
    if (input_date == "06/09") {
        date1.scrollIntoView();
    }
    if (input_date == "07/09") {
        date2.scrollIntoView();
    }
    if (input_date == "13/09") {
        date3.scrollIntoView();
    }
    if (input_date == "14/09") {
        date4.scrollIntoView();
    }
    if (input_date == "20/09") {
        date5.scrollIntoView();
    }
    if (input_date == "21/09") {
        date6.scrollIntoView();
    }
    if (input_date == "27/09") {
        date7.scrollIntoView();
    }
    if (input_date == "28/09") {
        date8.scrollIntoView();
    }
    if (input_date == "04/10") {
        date9.scrollIntoView();
    }
    if (input_date == "05/10") {
        date10.scrollIntoView();
    }
    if (input_date == "11/10") {
        date11.scrollIntoView();
    }
    if (input_date == "12/10") {
        date12.scrollIntoView();
    }
    if (input_date == "16/10") {
        date13.scrollIntoView();
    }
    if (input_date == "18/10") {
        date14.scrollIntoView();
    }
    if (input_date == "19/10") {
        date15.scrollIntoView();
    }
    if (input_date == "05/11") {
        date16.scrollIntoView();
    }
    if (input_date == "08/11") {
        date17.scrollIntoView();
    }
    if (input_date == "09/11") {
        date18.scrollIntoView();
    }
    if (input_date == "15/11") {
        date19.scrollIntoView();
    }
    if (input_date == "16/11") {
        date20.scrollIntoView();
    }
    if (input_date == "22/11") {
        date21.scrollIntoView();
    }
    
    });





// Code JavaScript pour afficher/cacher un message d'aide
const bouton=document.querySelector('#bouton_aide2');
const message=document.querySelector('#message_aide2');
bouton.addEventListener('click',()=>{
    // Si le message est déjà affiché, le cacher ; sinon, l'afficher
    if(message.style.display == 'block'){
        message.style.display = 'none';
    }else{
        message.style.display = 'block';
    }
    

})
    