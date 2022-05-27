function IsTagExists(){
    let tagsPlaceholder = document.getElementById("tagsPlaceholder");

    if (tagsPlaceholder.innerText == ""){
        tagsPlaceholder.innerHTML = "Необходимо добавить тег!";
        tagsPlaceholder.classList.add("red");
    }
}
expo