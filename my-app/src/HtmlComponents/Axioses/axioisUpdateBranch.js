import axios from "axios";

function EditText(nameDiv, code, title, branchid, Ownerid) {
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
            AxiosUpdateBranch(code, title, branchid, usedText, Ownerid)
        }});
           
    nameDiv.replaceWith(input);
    input.focus();

}
export { EditText };


const AxiosUpdateBranch = (code, title, branchId, newText, Ownerid) => {
    alert(code + " " + title + " " +  branchId + " " + newText) 
    axios.put(`http://localhost:8080/posts`, {
        'id': branchId,
        'text': newText,
        'title': title,
        'postOwnerID': Ownerid
    },
        {
            headers: {
                Authorization: 'Basic ' + code
            }
        }).catch(function (res) {
            alert(res);
        });

}

