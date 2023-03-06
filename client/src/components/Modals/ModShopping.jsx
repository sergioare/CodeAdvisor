import Modal from "./Modal/Modal";
import useModal from "../../Hooks/useModal";
import './Modals.scss';
import './ModShopping.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "../../redux/actions/actions"
import { clearCart } from "../../redux/actions/actions";
import { removeFromCart } from "../../redux/actions/actions";

const ModShopping = () => {
    // const products = useSelector(state => state.cart)
    const productsIN = useSelector(state => state.productsInCart)

    const dispatch = useDispatch();
    // const productsInCart = products.MyCart
    const productsInCart = productsIN?.cart?.MyCart
    // console.log(productsInCart)



    useEffect(() => {
        dispatch(getCartItems());
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(clearCart());
    // }, [dispatch]);

    const handlerClear = () => {
        dispatch(clearCart())
    }
    // const handleRemove =()=>{
    //     dispatch(removeFromCart())
    // }
    const [isOpenShop, openModalShop, closeModalShop] = useModal(false);
    return (
        <div>
            <button onClick={openModalShop} className="shopping-btn"> <ShoppingCartIcon /></button>
            <Modal isOpen={isOpenShop} closeModal={closeModalShop} isRight={true} >
                Let´s to Shopping

                {productsInCart?.length === 0 ? null : productsInCart?.map((p) => {
                    return (
                        <div className="itemsCart">
                            <h2> Advisor: </h2>
                            <p>{p.Firstname} </p>
                            <h2>Tech Skill: </h2>
                            <p>{p.techskill}</p>
                            <h2>Price: </h2>
                            <p>${p.Price}.00 / hr</p>
                            <h2>Date:</h2>
                            <p>{p.Month}/{p.Day}/{p.Year}</p>
                            <h2>Time:</h2>
                            <p>{p.StartingHour}:00 hrs - {p.EndingHour}:00 hrs </p>
                            <h2>Hours:</h2>
                            <p>{p.hours}</p>
                            <h2>Total:</h2>
                            <p>{p.Price * p.hours}</p>
                            <button onClick={()=>{
        dispatch(removeFromCart(p.cId))}}>Delete Meeting</button>
                            <button> Pay </button>
                        </div>
                    )

                }
                ) }
                {productsInCart?.length !== 0 ? <button onClick={handlerClear}> Clear Cart</button> : null}

            </Modal>

        </div>
    );
};

export default ModShopping;