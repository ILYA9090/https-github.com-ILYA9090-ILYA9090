import React from 'react'
import Modal from '../comments/Modal'
const Login = () => {
  return (
    <div>
       <Modal>
      <form type='submit'>
        <p>login</p>
          <input placeholder='login'/>
          <p>password</p>
          <input placeholder='password'/>
      </form>
      <button>войти</button>
      </Modal>
    </div>
  )
}

export default Login
