import React from "react";


function rename(curName){
    let color = curName.classList.item(0);
    let input=document.createElement("input");
    input.type="text";
    input.placeholder=curName.textContent;
    input.id=curName.id;  
    curName.replaceWith(input);
    
    input.addEventListener('focusout', ()=>{let div=document.createElement("p");
        div.id=input.id;
        div.textContent=input.value;
        div.classList.add(color);
        input.replaceWith(div);
        div.addEventListener('click' ,()=>{ rename(div) });
    });
    input.focus();
    }
    
  export {rename};