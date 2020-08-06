import * as React from "react";
import styled from "@emotion/styled";
import axios from "axios";

import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";

const CheckoutForm = (props: any) => {
  const [isProcessing, setProcessingTo] = React.useState<boolean>(false);
  const [checkoutError, setCheckoutError] = React.useState<any>();

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const handleFormSubmit = async (ev: any) => {
    ev.preventDefault();

    const billingDetails = {
      name: props.use.name,
      email: props.use.email,
    };

    setProcessingTo(true);
    const { data: client_secret } = await axios.post(
      "/api/stripe/payment_intents",
      {
        amount: 500 * 100,
      }
    );

    const cardElement = elements.getElement(CardElement);

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: billingDetails,
    });

    const confirmCardPayment = await stripe.confirmCardPayment(client_secret, {
      payment_method: paymentMethodReq.paymentMethod.id,
    });

    // Redirect function HERE
    history.push("/signup_completed");
  };

  const cardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <form onSubmit={handleFormSubmit} className="mx-auto w-100">
      <CardElement
        options={cardElementOptions}
        className="border rounded p-2 my-3"
      />
      {checkoutError && (
        <div className="alert alert-danger">{checkoutError}</div>
      )}
      <button className="btn btn-lg btn-primary my-3" disabled={isProcessing}>
        {isProcessing ? "Processing..." : `Pay $500`}
      </button>
    </form>
  );
};

interface ICheckoutFormProps {
  use: any;
}
export default CheckoutForm;
