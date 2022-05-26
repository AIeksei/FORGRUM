import axios from "axios";

function EditText(nameDiv, user) {

    let newName;
    // let color = curName.classList.item(0);
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = nameDiv.textContent;
    input.id = nameDiv.id;

    input.addEventListener('keydown', (e) => {
        if (e.keyCode == 13) {
            if (input.value == "") {
                newName = nameDiv.innerText;
            }
            else {
                newName = input.value;
            }
            nameDiv.textContent = newName;
            input.replaceWith(nameDiv);
            let usedName = newName;
             AxiosRename(user, usedName);
        
        }});
           
    nameDiv.replaceWith(input);
    input.focus();

}
export { EditText };

const AxiosRename = (user, newName) => {
    axios.put("http://localhost:8080/users", {
        'id': user.id,
        'name': newName,
        'email': user.email,
        'gender': user.gender,
        'phoneNumber': user.numb,
        'country': user.country,
        'language': user.language,
        'enabled': user.enabled,
        'rating': user.rate,
        'moderator': user.moderator,
        'nameColor': user.nameColor
    },
        {
            headers: {
                Authorization: 'Basic ' + user.code
            }
        }).catch(function (res) {
            alert(res);
        });

}
