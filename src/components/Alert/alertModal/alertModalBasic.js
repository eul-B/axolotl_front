import styles from './alertModalBasic.module.css';
import React from "react";
import Chat from '../Alert';

function AlertModalBasic({ setAlertModalOpen }) {
  // 모달 끄기 
  const closeModal = () => {
    setAlertModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
      <p>
        <Chat/>
      </p>
    </div>
  );
}

export default AlertModalBasic;