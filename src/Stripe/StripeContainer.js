import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51NmIDtAHbww9JJtkYLl37BqndbIUX0dYtrDI1MvHi8LUmlszdBCCZUcm4YXb1WwN64ssVwrFyFGKhgINAW3t4o6N00IAxRXK2L";


const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;