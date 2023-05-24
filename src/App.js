
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Modal from './components/Modal';
import Side from './components/Side'
/*
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

const modal = document.querySelector(".modal-wrapper");

closeModal.onclick = () => {
  modal.style.display = "none";
};

openModal.onclick = () => {
  modal.style.display = "flex";
};
*/
function App() {
  return (
    <div>
    <Header/>
    <Body/>
    <Side/>

    </div>
  );
}
/* <Modal/>
 * Side 대신 사용하려고 Modal로 구현해뒀으나 오류 발생.
 * 주석 처리는 모두 관련 내용
 * 추후에 오류 확인 후 주석 내용으로 바꾸면 됨
*/
export default App;
