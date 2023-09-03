import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice, getTotalQuantity} from "../redux/cartSlice";
import StripeContainer from "../Stripe/StripeContainer";
import '../App.css';

import Delivery from "./Delivery";



const  Cart=({shipping})=>{
const cartItems=useSelector(getCartItems);
const totalPrice=useSelector(getTotalPrice);
const totalQuantity=useSelector(getTotalQuantity);



    return (

        <div>
        <div className="totalQuantity">
       <span className="totalPrice">Total: $ {totalPrice} </span>
       <span className="totalPrice"> Quantity: {totalQuantity} </span>
       <Delivery shipping={shipping} />
   
        </div>
     
      <StripeContainer/>
  
      <div className="cartList">
      {cartItems.map(cartItem=> <CartItem cartItem={cartItem} key={cartItem.id}/>)}
     
  </div>


    </div>
    )
}



  export default Cart;



