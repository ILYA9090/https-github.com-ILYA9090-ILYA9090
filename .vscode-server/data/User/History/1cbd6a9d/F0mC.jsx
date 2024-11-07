import React from 'react'
import cl from './Modal.module.css';
const Modal = () => {
  return (
    <div className={[cl.Modal, cl.active].join(' ')}>
      <div className={cl.ModalContent}>
        
      </div>
    </div>
  )
}

export default Modal
