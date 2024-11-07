import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { useState } from 'react'

const Login = () => {
const {isAuth, setIsAuth} = useState();
    const login = (event) => {
        event.preventDefault();

    }
  return (
    <div>
      <h1> Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder='Введите логин'/>
        <MyInput type="password" placeholder='Введите пароль'/>
        <MyButton>
            Войти
        </MyButton>
      </form>
    </div>
  )
}

export default Login
