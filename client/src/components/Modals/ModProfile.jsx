import Modal from "./Modal/Modal";
import useModal from "../../Hooks/useModal";
import './Modals.scss'
import AdvisorProfile from "../Forms/AdvisorProfile/AdvisorProfile";

    const ModProfile = () => {
    const [isOpenProfile, openModalProfile,closeModalProfile]=useModal(false);
    return (
        <div>
            <button onClick={openModalProfile} className='inquiries-btn'>Complete your Profile</button> 
            <Modal isOpen={isOpenProfile} closeModal={closeModalProfile}>
                <AdvisorProfile/>
            </Modal>
        </div>
    );
};

export default ModProfile;