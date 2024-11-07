import React, { useState } from 'react'
import Modal from '../comments/Modal'
const Login = () => {

    const [modal, setModal] = useState(false)

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <button onClick={() => setModal(true)}>Хотите войти?</button>
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
