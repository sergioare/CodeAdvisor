import Modal from "./Modal/Modal";
import useModal from "../../Hooks/useModal";
import './Modals.scss'
import Inquiries from "../../Views/Inquiries/Inquiries";
const ModInquiries = () => {
  const [isOpenInquire, openModalInquire,closeModalInquire]=useModal(false);

  return (
    <div>
      <button onClick={openModalInquire} className='inquiries-btn'>Report a Problem</button> 
      <Modal isOpen={isOpenInquire} closeModal={closeModalInquire}>
        <Inquiries/>
      </Modal>

    
   
    </div>
   
  )
};
export default ModInquiries;