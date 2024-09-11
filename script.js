// Recuperation de données ....
let input   = document.querySelector('input');
let btn     = document.getElementById('btn');
let error   = document.getElementById('error');
let succes  = document.getElementById('succes');
let list    = document.getElementById('list');
//Declaration Des Variables
let content;
let listDiv
error.style.display = 'none';
succes.style.display = 'none';
// Fonction pour l'affichage des Todo List dans le container 
function add(e){
    listDiv = document.createElement('div');
    listDiv.textContent = e;
    listDiv.className = 'list listBackground';
    document.getElementById('list').append(listDiv);
}
// Les diiferent évenement 
btn.addEventListener('click', () => {
    if(input.value == ""){
        input.style.border= "solid red";
        error.style.display = 'inline';
        setTimeout(() =>{
            error.style.display = 'none';
        },2000);
        setTimeout(() =>{
            input.style.border= "none";
        },2000);
    }else{
        succes.style.display = 'inline';
        setTimeout(() =>{
            succes.style.display = 'none';
        },2000);
        content = input.value;
        input.value = '';
        add(content)
    }
})


