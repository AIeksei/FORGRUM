import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function deleteComm(id){
    console.log(id)
    axios.delete(`http://localhost:8080/comments/${id}`,{
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
function deleteBranch(branchId){

    axios.delete(`http://localhost:8080/posts/${branchId}`,{
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
