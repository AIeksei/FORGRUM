import axios from 'axios';

function deleteComm(id){
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

function like(id){
    axios.get(`http://localhost:8080/users/rating/up/${id}/1`,
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }}).then (function(res){
    alert("Пользователь с ID" + id + "Получил лайк")
    }).catch(function(e){
       alert("Проблема соединения с сервером")
    });
    
}

function dislike(id){
    axios.get(`http://localhost:8080/users/rating/down/${id}/1`,
    {
        headers: {
            Authorization: 'Basic dXNlcjpwYXNz' 
      }}).then (function(res){
           alert("Пользователь с ID" + id + "Получил дизлайк")
       }).catch(function(e){
        alert("Проблема соединения с сервером")
       });  
}

function deleteBranch(branchId, navigate){

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
    navigate('/main', {replace: true});
}

export {like, dislike, deleteBranch, deleteComm}
