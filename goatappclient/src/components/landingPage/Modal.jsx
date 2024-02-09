import PropTypes from "prop-types";
import '../../styles/Modal.css'
import { useState } from 'react';

import { Login } from "./Login";
import { Register } from "./Register";

function Modal( {isOpen, closeModal}) {
const modalClassName = isOpen ? "modal modal-open" : "modal";
const [currentForm, setCurrentForm] = useState('login');

const toggleForm = (formName) => {
    setCurrentForm(formName);
}
    return(
        <div className={modalClassName}>
            {isOpen && (
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>
                        &times;
                    </span>
                    {
                        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
                    }
                </div>
            )}
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
}

export default Modal