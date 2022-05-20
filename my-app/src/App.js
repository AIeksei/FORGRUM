import './App.css';
import React from 'react';
let style = "style";
function App() {

  let addInfo = React.createRef();
  function Add() {
alert(",j,")
    return (
      <div>
        <label>Введите название книги<input type="text"></input></label>
      </div>
    );

  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Библиотека</h1>
        </div>
        <ol>
          <li className={style} ref={addInfo} onClick={Add}>Добавить информацию о книгах и авторах</li>
          <li className={style} id="change">Изменить название книги</li>
          <li className={style} id="remove">Удалить из базы книгу</li>
          <li className={style} id="print">Вывести все книги заданного автора</li>
          <li className={style} id="rating">Рассчитать рейтинг автора</li>
        </ol>
      </header>
    </div>
  );
}


export default  App ;
