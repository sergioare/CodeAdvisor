import Modal from "./Modal/Modal";
import useModal from "../../Hooks/useModal";
import './Modals.scss';
import './ModShopping.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems, clearCart, removeFromCart} from "../../redux/actions/actions"
import { useParams } from "react-router-dom";
import axios from "axios";

const ModShopping = () => {
    // const products = useSelector(state => state.cart)
    const productsIN = useSelector(state => state.productsInCart)
    const { id } = useParams();
    const dispatch = useDispatch();
    // const productsInCart = products.MyCart
    // const productsInCart = productsIN?.cart?.MyCart
    const productsInCart = [{
        Firstname: "Yoel",
        techskill: "Jss",
        Price: 50,
        Day: "5",
        Month:"12",
        Year:"2023",
        StartingHour: "13",
        EndingHour: "15",
        hours: 2,
    }]

    useEffect(() => {
        dispatch(getCartItems(id));
    }, [dispatch, id]);


    const handlerClear = () => {
        dispatch(clearCart())
    }
    // const handleRemove =()=>{
    //     dispatch(removeFromCart())
    // }

    const payHandler = (event) => {
        event.preventDefault()
        axios.post('https://code-advisor-xi.vercel.app/payment', prod)
            .then((res) =>
                (window.location.href = res.data.response.body.init_point));
    };

    const prod = {
        // idAdvisor: product.id,
        Title: "Yoel",
        Quantity: 2,
        Price: 500
    };
    console.log(prod)

    const [isOpenShop, openModalShop, closeModalShop] = useModal(false);
    return (
        <div>
            <button onClick={openModalShop} className="shopping-btn"> <ShoppingCartIcon /></button>
            <Modal isOpen={isOpenShop} closeModal={closeModalShop} isRight={true} >
                Let´s to Shopping

                {productsInCart?.length === 0 ? null : productsInCart?.map((p) => {
                    return (
                        <div className="itemsCart">
                            <h2> Advisor: <span>{p.Firstname} </span> </h2> 
                            <h2>Tech Skill: <span>{p.techskill}</span> </h2>
                            <h2>Price: <span>${p.Price}.00 / hr</span> </h2> 
                            <h2>Date: <span>{p.Month}/{p.Day}/{p.Year}</span> </h2>
                            <h2>Time: <span>{p.StartingHour}:00 hrs - {p.EndingHour}:00 hrs </span> </h2>
                            <h2>Hours: <span>{p.hours} hrs</span> </h2>
                            {/* <h2>Total: <span>{p.Price * p.hours}</span> </h2> */}
                            <div className="btnconteiner">
                            <button onClick={payHandler}> Pay ${p.Price * p.hours} </button>
                            <button className="btnDelete" onClick={()=>{removeFromCart(p.cId)}}> <i class="fa-solid fa-trash"></i> </button>
                            </div>
                          
                        </div>
                    )
                }
                ) }
                {productsInCart?.length !== 0 ? <button className="btnClear" onClick={handlerClear}> Clear Cart</button> : null}

            </Modal>

        </div>
    );
};

export default ModShopping;