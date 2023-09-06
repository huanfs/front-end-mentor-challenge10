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
//página 1: função que checa os inputs e alerta sobre dados invalidos ou faltosos
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
//página 2: função que seleciona o plano e o armazena em sessionStorage
let plan = document.querySelectorAll(".plan");
for(let i of plan){
    i.addEventListener("click",addPlan);
}
function addPlan(sPlan){
    for(let i of plan){
        i.removeAttribute("id");
    }
    sPlan.target.id="selectedPlan";
    //salvo o plano em sessionStorage
    sessionStorage.setItem("plan",sPlan.target.children[1].innerHTML);
}

//página 3: função que adiciona/remove adicionais
let checkAditionals = document.querySelectorAll(".checkMark");
let selectedPlans = [];
for(let i of checkAditionals){
    i.addEventListener("click",aditionals);
}
function aditionals(add){
    if(add.target.checked){
        let selectAPlan = add.target.nextElementSibling;
        selectedPlans.push(selectAPlan.children[0].innerHTML);
        sessionStorage.setItem("aditionals",selectedPlans);
    }
    else{
        let selectAPlan = add.target.nextElementSibling;
        let rmv = selectedPlans.indexOf(selectAPlan.children[0].innerHTML);
        selectedPlans.splice(rmv,1);
        //apos removidos ou adicionados. salva os planos num array em sessionStorage
        //que devo acessar atraves do método split(), onde transformarei a string
        //contendo os planos selecionados em dois arrays contendo apenas o plano cada 1
        //que erá dividido informando a virgula que separa os planos na string
        // let i = sessionStorage.aditionals.split(",") <---
        sessionStorage.setItem("aditionals",selectedPlans);
    }
    if(sessionStorage.aditionals==undefined){
        let options = document.querySelectorAll(".options");
        for(let i = 1; i<4; i++){
            options[i].style.display="none";
        }
    }
}
let reviewArea = document.querySelector("#finish");
let reviewInfo = document.querySelectorAll(".options");
function showPlans(){
    if(sessionStorage.getItem("plan")!=null){
        let planDescription = reviewInfo[0].children;
        planDescription[0].innerHTML=sessionStorage.plan;
        planDescription[1].innerHTML="+12$";
    }
    else if(sessionStorage.getItem("plan")==null){
        alert("volte e selecione um plano");
        cont=1;
        activeStep();
    }
    if(sessionStorage.getItem("aditionals")==null){
        for(let i=1; i<=reviewInfo.length; i++){
            reviewInfo[i].style.display="none";
        }
     }
     else if(sessionStorage.getItem("aditionals")!=null){
        let adds = sessionStorage.aditionals.split(",");
        showLists(adds);
     }
}
//funções que revelam as listas da tabela de plano
function showLists(adds) {
    console.log(adds);
    let options = document.querySelectorAll(".options");
    console.log(options);
    if(adds[0]!=undefined){
        options[1].style.display="flex";
        options[1].firstElementChild.innerHTML=adds[0];
        options[1].lastElementChild.innerHTML="+2 USD"
    }
    if(adds[1]!=undefined){
        options[2].style.display="flex";
        options[2].firstElementChild.innerHTML=adds[1];
        options[2].lastElementChild.innerHTML="+1 USD"
    }
    if(adds[2]!=undefined){
        options[3].style.display="flex";
        options[3].firstElementChild.innerHTML=adds[2];
        options[3].lastElementChild.innerHTML="+3 USD";
    }
    let total = document.querySelector("#total").lastElementChild.innerHTML;
    //preciso somar os valores dos planos que foram adicionados e exibir eles aqui
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
        case 0: caseZero();break;
        case 1: caseOne();break;
        case 2: caseTwo();break;
        case 3: caseTree();showPlans();break;
        case 4: caseFour();break;
    }
}
function caseZero(){
    for(let i=0; i<5; i++){
        spans[i].style.backgroundColor="transparent";
    }
    spans[0].style.backgroundColor="rgb(185, 227, 213)";
    for(let i=0; i<5; i++){
        field[i].style.display="none";
    }
    field[0].style.display="flex";
}
function caseOne(){
    for(let i=0; i<5; i++){
        spans[i].style.backgroundColor="transparent";
    }
    spans[1].style.backgroundColor="rgb(185, 227, 213)";
    for(let i=0; i<5; i++){
        field[i].style.display="none";
    }
    field[1].style.display="flex";
}
function caseTwo(){
    for(let i=0; i<5; i++){
        spans[i].style.backgroundColor="transparent";
    }
    spans[2].style.backgroundColor="rgb(185, 227, 213)";
    for(let i=0; i<5; i++){
        field[i].style.display="none";
    }
    field[2].style.display="flex";
}
function caseTree(){
    for(let i=0; i<5; i++){
        spans[i].style.backgroundColor="transparent";
    }
    spans[3].style.backgroundColor="rgb(185, 227, 213)";
    for(let i=0; i<5; i++){
        field[i].style.display="none";
    }
    field[3].style.display="flex";
}
function caseFour(){
    for(let i=0; i<5; i++){
        spans[i].style.backgroundColor="transparent";
    }
    spans[4].style.backgroundColor="rgb(185, 227, 213)";
    for(let i=0; i<5; i++){
        field[i].style.display="none";
    }
    field[4].style.display="flex";//
    let finalBtnArea = document.querySelector("#btns");
    finalBtnArea.style.display="none";
    setTimeout(x=>{
        sessionStorage.removeItem("aditionals");
        sessionStorage.removeItem("plan");
        window.location.reload();
    },3000);
}
//navegar pelo indice
for(let i=0;i<=4;i++){
    spans[i].addEventListener("click",navigation);
}
function navigation(index){
    cont = Number(index.target.innerHTML)-1;
    activeStep(cont);
}


