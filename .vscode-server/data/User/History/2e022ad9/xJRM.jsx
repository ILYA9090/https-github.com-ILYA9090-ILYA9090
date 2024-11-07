import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTasks, addUsersAx } from "../slices/tasksSlice";
import _ from "lodash";
import "./style.css";
const PostsApp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [clock, setClock] = useState(new Date());
  const dispatch = useDispatch();

  // создаю функцию, которая добовляет в начальное состояние из слайса обьект с полями text(из хука useState) и id
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, username, email, id: _.uniqueId(Math.random()) };
    if ((name && username).trim().length) {
      dispatch(addUsersAx({ userData }));
    }
    setName("");
    setUsername("");
    setEmail("");
  };

  useEffect(() => {
    setInterval(() => {
      setClock(new Date());
    }, 1000);
  });
  // сначала изменение отлавливаются в инпуте, изменяя состояние потом этот text уже в Task из функции Handle
  return (
    <div className="form">
      <div className="Clock">
          <h1>{clock.toLocaleTimeString()}</h1>
        </div>
      
        

        <div className='text'>
          <p>
            <span className="first-letter">T</span>HIS IS MY MINI-APPLICATION FOR LEARNING THE REDUX TOOLKIT AND RTK
            QUERY, AS WELL AS FOR A MORE IN-DEPTH STUDY OF REACT
          </p>
          <a href='https://vk.com/ovchinikov98' target="_blank">ЭТО МОЙ МИНИ САЙТ ДЛЯ РАБОТЫ С REDUX TOOLKIT AND RTK QUERY</a>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
        <p>введите имя</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="введите имя"
        />
        <p>введите фамилию</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="введите фамилию"
        />
        <p>введите вашу почту</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="введите почту"
        />

        <button type="submit" value="Add">
          add
        </button>
      </form>
      </div>
    </div>
  );
};
export default PostsApp;
