import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function deleteComm(){
    axios.delete("http://localhost:8080/comments/5",{
         headers: {
             Authorization: 'Basic dXNlcjpwYXNz' 
       }
    }).then (function(res){
        alert(res.data);
    }).catch(function(e){
       alert(e)
    });
    
}
function like(){
    axios.get("http://localhost:8080/users/rating/up/2/5",
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }}).then (function(res){
    alert(res.data.gender);
    }).catch(function(e){
       alert(e)
    });
    
}
function dislike(){
    axios.get("http://localhost:8080/users/rating/down/2/5",
    {
        headers: {
            Authorization: 'Basic dXNlcjpwYXNz' 
      }}).then (function(res){
           alert(res.data.gender);
       }).catch(function(e){
          alert(e)
       });  
}
function deleteBranch(){

    axios.delete("http://localhost:8080/posts/5",{
         headers: {
             Authorization: 'Basic dXNlcjpwYXNz' 
       }
    }).then (function(res){
        alert(res.data);
    }
    ).catch(function(e){
       alert(e)
    });
    
}

export {like, dislike, deleteBranch, deleteComm}
