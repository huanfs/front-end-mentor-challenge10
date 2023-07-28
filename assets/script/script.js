let field = document.querySelectorAll("article");
let inputs = document.querySelectorAll(".userData");
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
function nextStep(){
    //adicionar um bloco de código que detecte qual elemento está article
    //está visivel no momento, para esconder os outros
}

