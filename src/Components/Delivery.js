import { useState } from "react";
import AddressForm from "./AddressForm";
import imageDelivery from "../delivery.png";





const Delivery =({shipping})=>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
        {isOpen && <AddressForm shipping={shipping}/>}
        <div className="delivery">
        <span className='btndelivery' onClick={() => setIsOpen(!isOpen)}>Delivery<img className='icondelivery' src={imageDelivery} alt="icon" width="20px"/></span>
     
        </div>
        </div>
    )
}


export default Delivery;