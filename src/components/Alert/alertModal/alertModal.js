import { useState } from "react";
import styles from './alertModal.module.css';
import AlertModalBasic from './alertModalBasic';

function AlertModal() {
  // 모달창 노출 여부 state
  const [modalOpen, setAlertModalOpen] = useState(false);

  // 모달창 노출
  const showAlertModal = () => {
    setAlertModalOpen(true);
  };

  return (
    <div>
      <button className={styles.openalertmodal} onClick={showAlertModal}>open</button>
      {modalOpen && <AlertModalBasic setAlertModalOpen={setAlertModalOpen} />}
    </div>
  );
}

export default AlertModal;