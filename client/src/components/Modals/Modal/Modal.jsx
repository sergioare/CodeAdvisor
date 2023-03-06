import './Modal.scss'

const Modal = ({children, isOpen, closeModal, isRight, isProfile}) => {
    const handleModalContainerClick = event=> event.stopPropagation()
    return (
        <article className={`modal ${isOpen && "is-open"} ${isRight && "is-right"}`} onClick={closeModal}>
            <div className={`modal-container ${isRight && "is-right"} ${isProfile && "is-profile"}`} onClick={handleModalContainerClick}>
                <button className='modal-close' onClick={closeModal}>X</button>
                {children}
            </div> 
        </article>
    );
};

export default Modal;