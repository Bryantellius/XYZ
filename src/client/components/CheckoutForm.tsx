import * as React from "react";
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
  const [succeeded, setSucceeded] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  React.useEffect(() => {
    if (props.use.email.length > 0) {
      history.push("/signup");
    }
  }, []);

  const handleChange = async (event: any) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setCheckoutError(event.error ? event.error.message : "");
  };

  const handleFormSubmit = async (ev: any) => {
    ev.preventDefault();

    if (props.use.name == "") {
      document.getElementById("candidateName").style.borderColor = "red";
      alert("Please enter your name.");
      return;
    }
    if (props.use.email == "") {
      document.getElementById("candidateEmail").style.borderColor = "red";
      alert("Please enter your email.");
      return;
    }

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

    if (confirmCardPayment.error) {
      setCheckoutError(`Payment failed ${confirmCardPayment.error.message}`);
      setProcessingTo(false);
      console.log(`Payment failed ${confirmCardPayment.error.message}`);
    } else {
      setCheckoutError(null);
      setProcessingTo(false);
      setSucceeded(true);
      // Redirect function HERE
      history.push("/signup_completed");
    }
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
        onChange={handleChange}
      />
      {checkoutError && (
        <div className="alert alert-danger">{checkoutError}</div>
      )}
      <button
        className="btn btn-lg btn-primary my-3"
        disabled={isProcessing || disabled || succeeded}
      >
        {isProcessing ? "Processing..." : `Pay $500`}
      </button>
    </form>
  );
};

interface ICheckoutFormProps {
  use: any;
}
export default CheckoutForm;
