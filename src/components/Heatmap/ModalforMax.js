import styles from './max.module.css'

const MaxModalBasic = ({ setMaxModalOpen, nodeName, dataType }) => {
    const closeModal = () => {
      setMaxModalOpen(false);
    };
  
    return (
      <div className={styles.container}>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        {/* 모달 내용 */}
        <div>
          <p>{`The ${dataType} value of ${nodeName} has exceeded the threshold.`}</p>
          {/* 추가적인 내용 */}
        </div>
      </div>
    );
  };

  export default MaxModalBasic