import * as React from "react";
import { Alert, InputGroup, FormControl } from "react-bootstrap";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_5kZ8Jqphhgho6KtqLWCQjeap001MKHsi38");

const BillingInfo: React.FC<IBillingInfoProps> = (props: any) => {
  const [name, setName] = React.useState<string>("");
  const [amount, setAmount] = React.useState<string>("3588");
  const [error, setError] = React.useState<string>("An Error has occurred.");

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.updateBar(100);
    props.method(100);
  };

  return (
    <Elements stripe={stripePromise}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
    </Elements>
  );
};

interface IBillingInfoProps {
  status: number;
  method: any;
  updateBar: any;
}

export default BillingInfo;
