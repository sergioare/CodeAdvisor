import './Modal.scss'

const Modal = ({children}) => {
    return (
        <article className='modal is-open'>
            <div className='modal-container'>
                <button className='modal-close'>X</button>
                {children}
            </div>
        </article>
    );
};

export default Modal;