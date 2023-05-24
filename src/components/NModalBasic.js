import MyCharts from './Heatmap/heatmap';
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
            <SearchDate/>
            <MyCharts/>
            {/* <p className={styles.tablebody}>
          {data === 1 ? <p>{Array(1).fill(<Abox/>)}</p> : null}
          {data > 1 && data <= 4? <p>{Array(4).fill(<Bbox/>)}</p> : null}
          {data > 4 && data <= 9? <p>{Array(9).fill(<Cbox/>)}</p> : null}
          {data > 9 && data <= 16 ? <p>{Array(16).fill(<Dbox/>)}</p> : null}
          {data > 16 && data <= 25? <p>{Array(25).fill(<Ebox/>)}</p> : null}
          {data > 25 && data <= 36? <p>{Array(36).fill(<Fbox/>)}</p> : null}
          {data > 36 && data <= 49? <p>{Array(49).fill(<Gbox/>)}</p> : null}
          {data > 49 && data <= 64? <p>{Array(64).fill(<Hbox/>)}</p> : null}
          {data > 64? alert('개수를 초과하였습니다.') : null}
        </p> */}
        </div>
    );
}
export default ModalBasic;