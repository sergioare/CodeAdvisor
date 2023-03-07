import Modal from "./Modal/Modal";
import useModal from "../../Hooks/useModal";
import './Modals.scss';
import './ModShopping.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems, clearCart} from "../../redux/actions/actions"
import { useParams } from "react-router-dom";
import axios from "axios";
import { getAuth } from 'firebase/auth'



const ModShopping = () => {
    
    const dispatch = useDispatch();

    //------------------- auth User --------------------------//
    const auth = getAuth();
    const idClient = auth.currentUser ? auth.currentUser.uid : null;

//-------------------------- Data Source------------------------//
    const productsIN = useSelector(state => state.productsInCart)
    const productsInCart = productsIN.cart?.MyCart

//----------------- filter to choose the Product -------------//
    const productStatusPending = productsInCart?.filter((s)=>s.status === "pending")
    
    const { id } = useParams();
   
   
    useEffect(() => {
        dispatch(getCartItems(idClient));
    }, [dispatch, idClient, productStatusPending]);


    const handlerClear = () => {
        dispatch(clearCart())
    }
    // const handleRemove =(event)=>{
    //     event.preventDefault()
    //     axios.put(`https://code-advisor-back.vercel.app/User/${idClient}/MyCart/${}`, fail)
    // }

    const handleRemove =(event)=>{
        event.preventDefault()
        axios.put(`https://code-advisor-back.vercel.app/User/ALgS5hpPocTCHveuuzNHXdqUu0w2/MyCart/2hOuoKCMJrEcEcARifku`, deleted)
    }

    // const payHandler = (event) => {
    //     event.preventDefault()
    //     axios.post('https://code-advisor-xi.vercel.app/payment', prod)
    //         .then((res) =>
    //             (window.location.href = res.data.response.body.init_point));
    // };

    // const prod = {
    //     // idAdvisor: product.id,
    //     Title: "Yoel",
    //     Quantity: 2,
    //     Price: 500
    // };
    // console.log(prod)

    const deleted = {
        status: "success"
    }

    const [isOpenShop, openModalShop, closeModalShop] = useModal(false);

    var sumaPriceTotal = 0
    return (
        <div>
            <button onClick={openModalShop} className="shopping-btn"> <ShoppingCartIcon /></button>
            <Modal isOpen={isOpenShop} closeModal={closeModalShop} isRight={true} >
                Let´s to Shopping

                {productStatusPending?.length === 0 ? null : productStatusPending?.map((p) => {
                    
                    return (
                        
                        <div className="itemsCart">
                            <h2> Advisor: <span>{p.Firstname} </span> </h2> 
                            <h2>Tech Skill: <span>{p.techskill}</span> </h2>
                            <h2>Price: <span>${p.Price}.00 / hr</span> </h2> 
                            <h2>Date: <span>{p.Month}/{p.Day}/{p.Year}</span> </h2>
                            <h2>Time: <span>{p.StartingHour}:00 hrs - {p.EndingHour}:00 hrs </span> </h2>
                            <h2>Hours: <span>{p.hours} hrs</span> </h2>
                            {/* <h2>Total: <span>{p.Price * p.hours}</span> </h2> */}

                                {sumaPriceTotal += p.Price * p.hours}

                                
                            <div className="btnconteiner">
                            <button onClick={        
                                (event) => {
                                    event.preventDefault()
                                    axios.post('https://code-advisor-xi.vercel.app/payment', {Title: p.Firstname, Quantity: p.hours, Price: p.Price})
                                    .then((res) =>
                                    (window.location.href = res.data.response.body.init_point));
                                }
                            }> 
                            
                            Pay ${p.Price * p.hours} </button>
                            
                            
                            </div>
                            <button className="btnDelete" onClick={handleRemove}> <i class="fa-solid fa-trash"></i> </button>
                            
                        </div>
                    )
                }
                ) }
                <p> Total Pay ${sumaPriceTotal} </p>
                {productStatusPending?.length !== 0 ? <button className="btnClear" onClick={handlerClear}> Clear Cart</button> : null}

            </Modal>

        </div>
    );
};

export default ModShopping;