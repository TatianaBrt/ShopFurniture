import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

import { useSelector } from "react-redux";
import { getTotalPrice } from "../redux/cartSlice";


export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSuccess, setMessageSuccess]=useState(false);


const totalPrice=useSelector(getTotalPrice)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: totalPrice*100,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSuccess(true)
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
  <div>
    {!messageSuccess ?
    <div className="stripe">
    
    <form className="stripeForm" onSubmit={handleSubmit} style={{ maxWidth: 300 }}  >
     
      <CardElement/> 
      <button  className="btnPay">Pay</button>
   

      
   
      </form>
  
    </div>
:
<div>
  <h2 className="success">Your payment was successful!</h2>
  </div>
}
    </div>
 
  );
};



