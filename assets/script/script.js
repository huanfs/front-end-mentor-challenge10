let field = document.querySelectorAll("article");
let inputs = document.querySelectorAll(".userData");
let spans = document.querySelectorAll("span");
let btn = document.querySelectorAll("#btns button")[1];
let cont = 0;
let btnGoBack = document.querySelectorAll("#btns button")[0];
//ADIÇÃO DOS EVENTOS
btn.addEventListener("click", nextStep);
btnGoBack.addEventListener("click", previousStep);
for(let item of inputs){
    item.addEventListener("blur",dataCheck);
}
//função que checa os inputs e alerta sobre dados invalidos ou faltosos
function dataCheck(aria){
    let label = aria.target.previousElementSibling;
    let errorMsg = document.createElement("span");
    if(aria.target.value==''){
    errorMsg.innerText='this field isrequired';
    label.appendChild(errorMsg);
    label.style.color='red';
    aria.target.style.border="1px solid red";
    errorMsg.style.color="red";
    }
    else if(aria.target.focus&&aria.target.value!=''){
        label.style.color='blue';
        aria.target.style.border='1px solid gray';
        label.lastChild.tagName==='SPAN'?label.lastChild.remove():aria.target.removeEventListener("blur", dataCheck);
    } 
}
//instruções de avanco dos steps
btn.addEventListener("click", nextStep);
function nextStep(item){
    cont++
    if(cont>5){
        cont=5;
    }
    activeStep();
}
function previousStep(item){
    cont--;
    if(cont<0){
        cont=0;
    }
    activeStep();
}
//função que verifica os steps
function activeStep(){
    cont>0?btnGoBack.style.display="flex":btnGoBack.style.display="none";
    switch(cont){
        //preciso arrumar esta secão para que o botão de previa e d proximo exibam corretamente os articles com o conteudo da tela;
        // case 0: field[2].style.display="none";field[0].style.display="flex";spans[0].style.backgroundColor="rgb(185, 227, 213)";spans[3].style.backgroundColor="transparent";
        // case 1: field[0].style.display="none";field[1].style.display="flex";spans[1].style.backgroundColor="rgb(185, 227, 213)";break;
        // case 2: field[1].style.display="none";field[2].style.display="flex";spans[2].style.backgroundColor="rgb(185, 227, 213)";spans[1].style.backgroundColor="transparent";break;
        // case 3: field[2].style.display="none";field[3].style.display="flex";spans[3].style.backgroundColor="rgb(185, 227, 213)";spans[2].style.backgroundColor="transparent";break;
        // case 4: field[3].style.display="none";field[4].style.display="flex";spans[3].style.backgroundColor="transparent";spans[2].style.backgroundColor="transparent";break;
        //pra cada case uma função especifica
        case 0: caseZero();break;
        case 1: caseOne();break;
        case 2: caseTwo();break;
        case 3: caseTree();break;
        case 4: caseFour();break;
    }
}
function caseZero(){
    for(let i=0; i<5; i++){
        spans[i].style.backgroundColor="transparent";
    }
    spans[0].style.backgroundColor="rgb(185, 227, 213)"//
    for(let i=0; i<5; i++){
        field[i].style.display="none";
    }
    field[0].style.display="flex";
}
function caseOne(){
    for(let i=0; i<5; i++){
        spans[i].style.backgroundColor="transparent";
    }
    spans[1].style.backgroundColor="rgb(185, 227, 213)";//
    for(let i=0; i<5; i++){
        field[i].style.display="none";
    }
    field[1].style.display="flex";
}
function caseTwo(){
    for(let i=0; i<5; i++){
        spans[i].style.backgroundColor="transparent";
    }
    spans[2].style.backgroundColor="rgb(185, 227, 213)";//
    for(let i=0; i<5; i++){
        field[i].style.display="none";
    }
    field[2].style.display="flex";
}
function caseTree(){
    for(let i=0; i<5; i++){
        spans[i].style.backgroundColor="transparent";
    }
    spans[3].style.backgroundColor="rgb(185, 227, 213)";//
    for(let i=0; i<5; i++){
        field[i].style.display="none";
    }
    field[3].style.display="flex";
}
function caseFour(){
    for(let i=0; i<5; i++){
        spans[i].style.backgroundColor="transparent";
    }
    spans[4].style.backgroundColor="rgb(185, 227, 213)";//
    for(let i=0; i<5; i++){
        field[i].style.display="none";
    }
    field[4].style.display="flex";
}


