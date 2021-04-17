import React, { useState } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimplePayment from './SimplePayment';
const Payment = ({handlePayment}) => {
   
const stripePromise = loadStripe('pk_test_51IeFbyB9GZIXDCxSahg31yeeSglIZOouUMM8UT68J516dBUJiIkyVHiIvMIL2dHzC2A3Wr0QSOey8x9CoIJoB9m100cMkPH2re');
    return (
        <div>
             <Elements stripe={stripePromise}>
            <SimplePayment handlePayment={handlePayment}></SimplePayment>
    </Elements>
        </div>
    );
};

export default Payment;