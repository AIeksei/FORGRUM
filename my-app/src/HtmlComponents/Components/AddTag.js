function addTag(){
    let input = document.getElementById("inputTag"),
        tagsPlaceholder = document.getElementById("tagsPlaceholder"),
        inputedTag = input.value;
    input.value = "";
    if (tagsPlaceholder.innerText == "")
    tagsPlaceholder.innerText += inputedTag;
    else 
    tagsPlaceholder.innerText += ", " + inputedTag;
}

export {addTag};