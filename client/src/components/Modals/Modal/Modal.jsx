import './Modal.scss'

const Modal = ({children}) => {
    return (
        <article className=''>
            <div className=''>
                <button className=''>X</button>
                {children}
            </div>
        </article>
    );
};

export default Modal;