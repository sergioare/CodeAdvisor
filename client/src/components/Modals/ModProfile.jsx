import Modal from "./Modal/Modal";
import useModal from "../../Hooks/useModal";
import './Modals.scss'
import AdvisorProfile from "../Forms/AdvisorProfile/AdvisorProfile";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';


    const ModProfile = () => {
    const [isOpenProfile, openModalProfile,closeModalProfile]=useModal(false);
    return (
        <div>
            <button onClick={openModalProfile} className='edit-profile-btn'>Edit your profile <AutoFixHighIcon className="icon"/></button> 
            <Modal isOpen={isOpenProfile} closeModal={closeModalProfile} isProfile='true'>
                <AdvisorProfile/>
            </Modal>
        </div>
    );
};

export default ModProfile;