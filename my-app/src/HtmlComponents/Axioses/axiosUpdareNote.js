import axios from "axios";

function EditText(nameDiv, branchId, note, code ) {

    let newText;
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = nameDiv.textContent;
    input.id = nameDiv.id;

    input.addEventListener('keydown', (e) => {
        if (e.keyCode == 13) {
            if (input.value == "") {
                newText = nameDiv.innerText;
            }
            else {
                newText = input.value;
            }
            nameDiv.textContent = newText;
            input.replaceWith(nameDiv);
            let usedText = newText;
            AxiosUpdateNote(branchId, usedText, note, code)
        
        }});
           
    nameDiv.replaceWith(input);
    input.focus();

}
export { EditText };


const AxiosUpdateNote = (branchId, newText, note, code) => {
    axios.put(`http://localhost:8080/comments`, {
        'commentOwnerID': note.commentOwnerID,
        'text': newText,
        'postID': branchId,
        'id': note.id
    },
        {
            headers: {
                Authorization: 'Basic ' + code
            }
        }).catch(function (res) {
            alert(res);
        });

}


export { AxiosUpdateNote }
