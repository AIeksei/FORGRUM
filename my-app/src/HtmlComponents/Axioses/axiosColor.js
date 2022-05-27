import axios from "axios";
const AxiosColor = (newColor, user)=>{
axios.put("http://localhost:8080/users", {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'gender': user.gender,
            'phoneNumber': user.numb,
            'country': user.country,
            'language': user.language,
            'enabled': user.enabled,
            'rating': user.rate,
            'moderator': user.moderator,
            'nameColor': newColor
        },
            {
                headers: {
                    Authorization: 'Basic ' + user.code
                }
            }).catch(function(res){
                alert(res);
            });
}
export {AxiosColor};