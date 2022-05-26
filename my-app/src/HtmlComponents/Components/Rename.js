import React from "react";
import { UseAuth } from "../Hook/UseAuth";
import { useState } from "react";
import axios from "axios";

function Rename(curName){
    let newName
    let color = curName.classList.item(0);
    let input=document.createElement("input");
    input.type="text";
    input.placeholder=curName.textContent;
    input.id=curName.id;  
    curName.replaceWith(input);
    
    input.addEventListener('focusout', ()=>{let div=document.createElement("p");
        div.id=input.id;
        div.textContent=input.value;
        newName = input.value
        div.classList.add(color);
        input.replaceWith(div);
        div.addEventListener('click' ,()=>{ Rename(div) });
    });
    input.focus();
    
    }
    
  export {Rename};