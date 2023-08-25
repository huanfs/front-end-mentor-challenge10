let field = document.querySelectorAll("article");
let inputs = document.querySelectorAll(".userData");
let spans = document.querySelectorAll("span");
let btn = document.querySelectorAll("#btns button")[1];
let cont = 0;
let btnGoBack = document.querySelectorAll("#btns button")[0];
//ADIÇÃO DOS EVENTOS
btn.addEventListener("click", nextStep);
for(let item of inputs){
    item.addEventListener("blur",dataCheck);
}
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
    console.log(cont);
    //switch case observa qual a contagem de CONT
    //se for 1 define que a primeira tela suma e a proxima apreça,
    //sendo assim sucessivamente
    //*preciso fazer com que já de inicio o número 1 de step localizado,
    //em aside fique com background destacado pois está com a contagem avançada
    switch(cont){
        case 1: field[0].style.display="none";field[1].style.display="flex";spans[0].style.backgroundColor="rgb(150, 246, 248)";break;
        case 2: field[1].style.display="none";field[2].style.display="flex";spans[1].style.backgroundColor="rgb(150, 246, 248)";spans[0].style.backgroundColor="transparent";break;
        case 3: field[2].style.display="none";field[3].style.display="flex";spans[2].style.backgroundColor="rgb(150, 246, 248)";spans[1].style.backgroundColor="transparent";break;
        case 4: field[3].style.display="none";field[4].style.display="flex";spans[3].style.backgroundColor="rgb(150, 246, 248)";spans[2].style.backgroundColor="transparent";break;
    }
}

