import Modal from "./Modal/Modal";
import useModal from "../../Hooks/useModal";
import './Modals.scss'
import CompleteProfUser from "../Forms/CompleteProfUser";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';


const ModUserProf = () => {
    const [isOpenProfile, openModalProfile,closeModalProfile]=useModal(false);
    return (
        <div>
            <button onClick={openModalProfile} className='edit-profile-btn'>Edit your profile <AutoFixHighIcon className="icon"/></button> 
            <Modal isOpen={isOpenProfile} closeModal={closeModalProfile} isProfile='true'>
                <CompleteProfUser/>
            </Modal>
        </div>
    )
};

export default ModUserProf;