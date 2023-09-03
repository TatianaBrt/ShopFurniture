import {data} from '../data';
import { useDispatch } from 'react-redux';
import { removeItemFromCart} from '../redux/cartSlice';



    const  CartItem=({cartItem})=>{
    const furnitures=data.find(item=>item.id === cartItem.furnitureId);
    const dispatch=useDispatch();

    return (
    <div className='incart'>
      <img className="furnImg" src={furnitures.image} alt="furniture"/>
      <p>{furnitures.namef}</p>
      <p>{cartItem.quantity} thing</p>
      <p>Price: $ {furnitures.price * cartItem.quantity}</p>


      
      <span onClick={()=>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
      <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="20px" alt="icon"/> 
      </span>
      </div>
      )
}

export default CartItem;
