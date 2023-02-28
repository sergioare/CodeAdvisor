import Modal from "./Modal/Modal";
import useModal from "../../Hooks/useModal";
import './Modals.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ModShopping = () => {
    const [isOpenShop, openModalShop,closeModalShop]=useModal(false);
    return (
        <div>
            <button onClick={openModalShop} className="shopping-btn"> <ShoppingCartIcon /></button>
            <Modal isOpen={isOpenShop} closeModal={closeModalShop} isRight={true} >
                Let´s to Shopping
            </Modal>
        </div>
    );
};

export default ModShopping;