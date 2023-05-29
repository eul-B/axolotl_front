import AlertModal from './Alert/alertModal/alertModal';
import MyCharts from './Heatmap/heatmap';
import MaxInput from './Heatmap/maxInput';
import SearchDate from './Heatmap/searchDate';
import styles from './NModalBasic.module.css';

var data;
data = 20;

function ModalBasic({ setModalOpen, id, title, content, writer }) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={closeModal}>
                X
            </button>
            <h1>Image Table</h1>
            <MyCharts/>
            <MaxInput/>
            <AlertModal/>
        </div>
    );
}
export default ModalBasic;