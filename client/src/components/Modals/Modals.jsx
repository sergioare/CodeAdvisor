import Modal from "./Modal/Modal";
import Login from '../Login/Login'
import useModal from "../../Hooks/useModal";
import './Modals.scss'
const Modals = () => {
  const [isOpenModalLogin, openModalLogin,closeModalLogin]=useModal(false);

  return (
    <div>
      <button onClick={openModalLogin} className='login-btn'>Login</button> 
      <Modal isOpen={isOpenModalLogin} closeModal={closeModalLogin}>
        <Login/>
      </Modal>

    
   
    </div>
   
  )
};
export default Modals;