import { useState } from "react";
import { DefaultLegendContent } from "recharts/types/component/DefaultLegendContent";
import 

function Modal(){
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () =>{
        setModalOpen(true);
    };

    return(
        <div>
            <button onClick={showModal}> Realtime status </button>
            {modalOpen && <ModalBasic setModalOpen={setModalOpen}/>}
        </div>
    )
}

export default Modal;