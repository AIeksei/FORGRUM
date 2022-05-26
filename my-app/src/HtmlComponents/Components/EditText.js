
function EditText(nameDiv) {

    let newName;
   // let color = curName.classList.item(0);
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = nameDiv.textContent;
    input.id = nameDiv.id;
    
    input.addEventListener('keydown', (e) => {
        if (e.keyCode == 13) {
            if (input.value == "") {
                newName =  nameDiv.innerText;
            }
            else{
                newName =  input.value;
            }
            //let div = document.createElement("p");
            //div.id = input.id;
            nameDiv.textContent = newName;
            
            input.replaceWith(nameDiv);
        }
    });
    nameDiv.replaceWith(input);
    input.focus();   
}

    
  export {EditText};