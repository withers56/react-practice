import {useState} from 'react'
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsopen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className={"card"}>
            <h2>{props.text}</h2>
            <div className={"actions"}>
                <button className={"btn"} onClick={deleteHandler}>DELETE</button>
            </div>
            {modalIsopen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
            {modalIsopen ? <Backdrop onCancel={closeModalHandler}/> : null}
        </div>
    )
}

export default Todo;