import * as React from "react";
import { useHistory } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const promise = loadStripe("pk_test_5kZ8Jqphhgho6KtqLWCQjeap001MKHsi38");

const BasicInfo: React.FC<IBasicInfoProps> = (props: any) => {
  const history = useHistory();

  const changePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push("/signup_completed");
  };

  return (
    <div className="input-group my-3 row col-md-8 col-sm-10 p-4 needs-validation">
      <div className="form-row col-md-8 mx-auto my-3">
        <label className="h6">Name</label>
        <input
          type="text"
          className="form-control"
          id="candidateFirstName"
          placeholder="Your Name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.methods.setName(e.target.value)
          }
          required
        />
        <div id="invalidFirstName" className="invalid-feedback" hidden>
          Please provide your first name.
        </div>
      </div>
      <div className="form-row col-md-8 mx-auto my-3">
        <label className="h6">Email address</label>
        <input
          type="email"
          className="form-control"
          id="candidateEmail"
          placeholder="name@example.com"
          value={props.status.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.methods.setEmail(e.target.value)
          }
          required
        />
        <div id="invalidEmail" className="invalid-feedback" hidden>
          Please provide your email.
        </div>
      </div>
      <div className="form-group">
        <hr />
      </div>

      {/* Stripe Element Provider */}
      <div className="form-row col-md-8 mx-auto">
        <Elements stripe={promise}>
          <CheckoutForm
            use={{ name: props.status.name, email: props.status.email }}
          />
        </Elements>
      </div>
    </div>
  );
};

interface IBasicInfoProps {
  status: any;
  methods: any;
}

export default BasicInfo;
