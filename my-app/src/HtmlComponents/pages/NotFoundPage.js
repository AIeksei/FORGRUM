import { Link } from 'react-router-dom'
import React from 'react';

const Notfoundpage = () => {
    return (
        <div>
           Такой страницы не существует <Link to="/main">Вернуться на форум</Link>
        </div>
    )
}

export {Notfoundpage};
