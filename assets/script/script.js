let steps = document.querySelectorAll(".steps");
let ariaStage = document.querySelector("section article");
let title = document.querySelector("h1");
let subtittle = document.querySelector("p");
let ariaForm = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let btn = document.querySelectorAll("#btns button");
//ADIÇÃO DOS EVENTOS
btn[1].addEventListener("click", nextStep);
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
//     let layout = stepOne;
//    for(let x of Object.values(layout)){
//     ariaStage.appendChild(x);
//    }

   let layout = stepOne;
   for(let x of Object.values(layout)){
       let element = document.createElement(x.tagName);
       element.textContent = x.textContent;
       ariaStage.appendChild(element);
   }
}
