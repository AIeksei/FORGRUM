import './MainPage.css';
import React from 'react';
const MainPage =({ToBranch})=> {
    return (
        <div className='bodyMain'>
            <div className='space_beetwen search'>
                <div className='search'>
                    <img className='searchImg' src='search.png' ></img>
                    <input type="text" className="searchInput" placeholder="Поиск по тегу"></input>
                </div>
                <div className='search'>
                    <img className='searchImg' src='search.png' ></img>
                    <input type="text" className="searchInput" placeholder="Поиск по заголовку"></input>
                </div>
            </div>
            <div className="Sort">
                <select name="select" className="select">
                    <option value="value1">Сортировка 1</option>
                    <option value="value2" selected>Сортировка 2</option>
                    <option value="value3">Сортировка 3</option>
                </select>
            </div>
            <div className="root">
                <p className="count">Количество сообщений : 10</p>
                <p className="NameRoot">Title</p>
                <p className="AutorRoot">Autor</p>
            </div>
            <div className="root">
                <p className="count">Количество сообщений : 100</p>
                <p className="NameRoot">Title</p>
                <p className="AutorRoot">Autor</p>
            </div>
            <div className="root">
                <p className="count">Количество сообщений : 50</p>
                <p className="NameRoot">Title</p>
                <p className="AutorRoot">Autor</p>
            </div>
            <div className="root">
                <p className="count">Количество сообщений : 30</p>
                <p className="NameRoot">Title</p>
                <p className="AutorRoot">Autor</p>
            </div>
            <div className="root">
                <p className="count">Количество сообщений : 80</p>
                <p className="NameRoot">Title</p>
                <p className="AutorRoot">Autor</p>
            </div>
            <div className="root">
                <p className="count">Количество сообщений : 34</p>
                <p className="NameRoot">Title</p>
                <p className="AutorRoot">Autor</p>
            </div>
            <div className="root">
                <p className="count">Количество сообщений : 28</p>
                <p className="NameRoot">Title</p>
                <p className="AutorRoot">Autor</p>
            </div>
        </div>
    )
}

export default MainPage;