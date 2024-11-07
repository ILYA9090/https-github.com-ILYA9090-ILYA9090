import React from "react";
import cl from "./Modal.module.css";
const Modal = ({ children, visible, setVisible }) => {
  
  const rootClasses = [cl.Modal];
  if (visible) {
    rootClasses.push(cl.active).join(' ');
  }

  return (
    <div className={rootClasses} onClick={() => setVisible(false)}>
      <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
