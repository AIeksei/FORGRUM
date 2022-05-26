import axios from 'axios';

function deleteComm(id, encoded){
    axios.delete(`http://localhost:8080/comments/${id}`,{
         headers: {
            Authorization: 'Basic ' + encoded
       }
    }).then (function(res){
        alert(res.data);
    }).catch(function(e){
       alert(e)
    });
    
}

function like(id, encoded){
    axios.get(`http://localhost:8080/users/rating/up/${id}/1`,
 {
	 headers: {
		 Authorization: 'Basic ' + encoded
   }}).then (function(res){
    alert("Пользователь с ID" + id + "Получил лайк")
    }).catch(function(e){
       alert("Проблема соединения с сервером")
    });
    
}

function dislike(id, encoded){
    axios.get(`http://localhost:8080/users/rating/down/${id}/1`,
    {
        headers: {
            Authorization: 'Basic ' + encoded 
      }}).then (function(res){
           alert("Пользователь с ID" + id + "Получил дизлайк")
       }).catch(function(e){
        alert("Проблема соединения с сервером")
       });  
}

function deleteBranch(branchId, encoded, navigate){

    axios.delete(`http://localhost:8080/posts/${branchId}`,
    {
         headers: {
             Authorization: 'Basic ' + encoded}
    }).then (function(res){
        alert(res.data);
    }
    ).catch(function(e){
       alert(e)
    });
    navigate('/main', {replace: true});
}

export {like, dislike, deleteBranch, deleteComm}
