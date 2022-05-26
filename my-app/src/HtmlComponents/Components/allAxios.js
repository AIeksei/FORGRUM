
//обновление коментария
axios.put("http://localhost:8080/comments", {
	'id': title,
	'text' : text
 },
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
});

//запрос на блокировку пользователя
axios.get("http://localhost:8080/users/disable/{userId}",
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
});

//запрос на добавление аватаа
axios.put("http://localhost:8080/users/{id}/avatar", {
	'id': title,
	//параметры аватара
 },
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
});

//запрос на получение аватара
axios.get("http://localhost:8080/users/{id}/avatar",
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
});


//изменение имени
axios.put("http://localhost:8080/users", {
	'name': title,
	'id': id
 },
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
});


//обновление поста
axios.put("http://localhost:8080/posts/{id}", {
	'id': title,
	'text' : text,
	'title' : title
 },
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
});

