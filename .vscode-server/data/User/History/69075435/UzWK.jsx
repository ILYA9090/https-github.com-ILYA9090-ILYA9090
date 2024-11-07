import React, { useState } from 'react'
import Modal from '../comments/Modal'
import UserContext from '../Context/context'
import { useContext } from 'react'
const Login = () => {

    const [modal, setModal] = useState(false)
    const {setAuthorization} = useContext(UserContext)
  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
        <button onClick={() => setModal(true)}>Хотите войти?</button>
       <Modal visible={modal} setVisible={setModal}> 
      <form type='submit'>
        <p>login</p>
          <input placeholder='login'/>
          <p>password</p>
          <input placeholder='password'/>
      </form>
      <button onClick={()=> setAuthorization(true)}>войти</button>
      </Modal>
    </div>
  )
}

export default Login
