import React from 'react'
import cl from './Modal.module.css';
const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.Modal];
    if(visible) {
        rootClasses.push(cl.active);
    }

  return (
    <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
      <div className={cl.ModalContent}>
        {children}
      </div>
    </div>
  )
}

export default Modal
