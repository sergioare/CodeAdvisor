import Modal from "./Modal/Modal";
import Login from '../Login/Login'
import useModal from "../../Hooks/useModal";
const Modals = () => {
  const [isOpenModalLogin, openModalLogin,closeModalLogin]=useModal(false);
  const [isOpenModal1, openModal1,closeModal1]=useModal(false);
  const [isOpenModal2, openModal2,closeModal2]=useModal(false);
  return (
    <div>
        <h2>Modals</h2>
       <button onClick={openModal1}>Modal 1</button> 
       <Modal isOpen={isOpenModal1}  closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Este es el modal 1</p>
            <img src="https://placeimg.com/400/400/animals" alt="nature"/>
       </Modal>

      <button onClick={openModal2}>Modal 2</button> 
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Modal 2</h3>
            <p>Este es otro modal</p>
            <img src="https://placeimg.com/400/400/nature" alt="nature"/>
       </Modal>

      <button onClick={openModalLogin}>Modal Login</button> 
      <Modal isOpen={isOpenModalLogin} closeModal={closeModalLogin}>
        <Login/>
      </Modal>

    
   
    </div>
   
  )
};
export default Modals;