import Modal from "./Modal/Modal";

const Modals = () => {
  return (
    <div>
        <h2>Modals</h2>
        <button>Modal Login</button> 
       <Modal>
            <h3>Modal 1</h3>
            <p>Este es el modal 1</p>
            <img src="https://placeimg.com/400/400/animals" alt="nature"/>
       </Modal>
        <Modal>
            <h3>Modal 2</h3>
            <p>Este es otro modal</p>
            <img src="https://placeimg.com/400/400/nature" alt="nature"/>
       </Modal>
   
    </div>
   
  )
};
export default Modals;