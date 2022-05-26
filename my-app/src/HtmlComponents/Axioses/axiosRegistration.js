import axios from "axios";
const Registr = (name, email, gender, number, password, passwordConfirm, navigate) => {
    let checked = true;

    axios.post("http://localhost:8080/users/", {
        'name': name,
        'email': email,
        'gender': gender,
        'phoneNumber': number,
        'password': password,
        'confirmPassword': passwordConfirm
    },
        {
            headers: {
                Authorization: 'Basic dXNlcjpwYXNz'
            }
        }).catch(function (e) {
            console.log(e)
            document.getElementById("emERR").innerHTML = e.data;
            checked = false;
        })
    if (checked) {
        navigate('/confirm', { replace: true })
    }
}
export { Registr }