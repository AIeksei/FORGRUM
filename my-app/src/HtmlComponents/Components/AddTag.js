function addTag(){

    let input = document.getElementById("inputTag"), 
        tagsPlaceholder = document.getElementById("tagsPlaceholder"),
        inputedTag = input.value;
        if(input.value.trim()!=""){
    input.value = "";
    tagsPlaceholder.classList.remove("red");
    if (tagsPlaceholder.innerText == "")
    tagsPlaceholder.innerText += inputedTag;
    else 
    tagsPlaceholder.innerText += ", " + inputedTag;
    let tagsArray =tagsPlaceholder.innerText
    return(tagsArray)
    }
}

export {addTag};