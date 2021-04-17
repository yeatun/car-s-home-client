import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useForm } from 'react-hook-form';

const SimplePayment = ({handlePayment}) => {
    const { register,  watch, formState: { errors } } = useForm();
    const [paymentError, setPaymentError] = useState (null);
    const [paymentSuccess, setPaymentSuccess] = useState (null)
    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
        setPaymentError(error.message);
        setPaymentSuccess(null)
    } else {
        setPaymentSuccess(paymentMethod.id)
        setPaymentError(null)
        handlePayment(paymentMethod.id)
    }
  };
    return (
        <div className=''>
        <form {...register("email")} onSubmit={handleSubmit}>
        <CardElement />
        <div >
        <button  type="submit" disabled={!stripe}>
          Pay
        </button>
        </div>
      </form>
      {
        paymentError && <p style ={{color: ' red'}}>{paymentError}</p>
    }
    {
        
            paymentSuccess && <p style ={{color: ' green'}}>Thank you for your payment</p>
        
    }
      </div>
   
    );
};

export default SimplePayment;