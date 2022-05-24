//запрос на удаление коментарий
axios.delete("http://localhost:8080/comments/{id}", {
	'id': title,
 },
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
});

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

//Количество элементов в посте
axios.put("http://localhost:8080/comments/count/{postId}", {
	'postId': title,
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

//запрос на + рейт
axios.get("http://localhost:8080/rating/up/{id}",
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
});

//запрос на - рейт
axios.get("http://localhost:8080/rating/down/{id}",
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

//добавление тега
axios.post("http://localhost:8080/tags", {
	'tag': title,
 },
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
});

//все теги в посте
axios.get("http://localhost:8080/tags/post/{id}",
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
});

//удаление поста
axios.delete("http://localhost:8080/posts/{id}", {
	'id': title,
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

//посты для пользователя
axios.put("http://localhost:8080/posts/user/{id}", 
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
});