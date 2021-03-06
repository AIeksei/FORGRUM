import axios from 'axios';

function deleteComm(ownerId, id, encoded) {
    axios.delete(`http://localhost:8080/comments/${id}`, {
        headers: {
            Authorization: 'Basic ' + encoded
        }
    }).then(function (res) {
        alert(res.data);
        rateDown(ownerId, 10, encoded)
    }).catch(function (e) {
        alert("сообщение уже удалено")
    });

}

function rateUp(id, rate, user) {
    user.updateRate(user.rate - rate)
    axios.get(`http://localhost:8080/users/rating/up/${id}/${rate}`,
        {
            headers: {
                Authorization: 'Basic ' + user.code
            }
        }).then(function (res) {
            alert("Пользователь с ID " + id + " Получил лайк")
        }).catch(function (e) {
            alert("Проблема соединения с сервером")
        });

}

function rateDown(id, rate, user) {
    user.updateRate(user.rate - rate)
    axios.get(`http://localhost:8080/users/rating/down/${id}/${rate}`,
        {
            headers: {
                Authorization: 'Basic ' + user.code
            }
        }).then(function (res) {
            alert("Пользователь с ID " + id + " Получил дизлайк")
        }).catch(function (e) {
            alert("Проблема соединения с сервером")
        });
}

function deleteBranch(ownerId, branchId, encoded, navigate) {

    axios.delete(`http://localhost:8080/posts/${branchId}`,
        {
            headers: {
                Authorization: 'Basic ' + encoded
            }
        }).then(function (res) {
            alert(res.data);
        }
        ).then(function () {
            rateDown(ownerId, 10, encoded)
        }).then(function () {
            navigate('/main', { replace: true });
        }).catch(function (e) {
            alert(e)
        });

}

export { rateUp, rateDown, deleteBranch, deleteComm }
