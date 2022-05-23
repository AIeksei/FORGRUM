import validator from 'validator';

function valid(email, name, password, passwordConfirm, number, gender){ 
    let checked = true;
    if(!validator.isEmail(email)) {
    document.getElementById("emERR").innerHTML = "Не правильная почта";
    checked = false;
} else  {document.getElementById("emERR").innerHTML = "";}
if(name == "") {
  document.getElementById("nameERR").innerHTML = "Введите имя пользователя";
  checked = false;
}  else  {document.getElementById("nameERR").innerHTML = "";}
if(password !== passwordConfirm) {
    document.getElementById("passERR").innerHTML = "Введите одинаковые пароли";
    checked = false;
}  else  {document.getElementById("passERR").innerHTML = "";}
if(!validator.isStrongPassword(password, {minSymbols: 0})) {
    document.getElementById("passERR").innerHTML = "Пароль должен содержать маленькие, большие <br> буквы и число, минимум 8 символов";
    checked = false;
}  else  {document.getElementById("passERR").innerHTML = "";}
if(!validator.isMobilePhone(number)) {
  document.getElementById("phERR").innerHTML = "введите верный номер телефона";
  checked = false;
} else  {document.getElementById("phERR").innerHTML = "";}
if(gender == null) {
  document.getElementById("genERR").innerHTML = "Выберите пол";
  checked = false;
}  else  {document.getElementById("genERR").innerHTML = "";}
return checked;
}
export {valid};