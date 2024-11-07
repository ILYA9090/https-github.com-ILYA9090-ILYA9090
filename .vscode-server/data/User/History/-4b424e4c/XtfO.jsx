import React from "react";
import cl from "./MyModal.module.css";
const MyModal = ({children}) => {
  return (
    <div className={[cl.MyModal, cl.myModal.active].join(' ')}>
      <div className={cl.myModalContent}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
