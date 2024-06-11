import React, { useState } from 'react';
import style from "./Modal.module.scss";

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    const Modal = ({ children }) => {
        return (
            isShowing ? (
                <div className={style.modal_overlay}>
                    <div className={style.modal}>
                        <button className={style.close_button} onClick={toggle}>×</button>
                        {children}
                    </div>
                </div>
            ) : null
        );
    };

    return {
        isShowing,
        toggle,
        Modal,
    };
};

export default useModal;
