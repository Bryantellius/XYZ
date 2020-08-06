import * as React from "react";
import ReactTooltip from "react-tooltip";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import config from "../../server/config";

const promise: any = loadStripe(process.env.PUBLISHABLE_KEY || config.stripe.stripe_pk);

const BasicInfo: React.FC<IBasicInfoProps> = (props: any) => {
  return (
    <div className="input-group my-3 row col-md-8 col-sm-10 p-4 needs-validation shadow-sm rounded">
      <div className="form-row col-md-8 mx-auto my-3">
        <label className="h6">
          <span>Name</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-help-circle mx-2"
            data-tip
            data-for="nameTip"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <ReactTooltip id="nameTip" place="top" effect="solid">
            Your first and last name.
          </ReactTooltip>
        </label>
        <input
          type="text"
          className="form-control"
          id="candidateName"
          placeholder="Your Name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.methods.setName(e.target.value)
          }
          required
        />
        <div id="invalidName" className="invalid-feedback" hidden>
          Please provide your name.
        </div>
      </div>
      <div className="form-row col-md-8 mx-auto my-3">
        <label className="h6">
          <span>Email address</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-help-circle mx-2"
            data-tip
            data-for="emailTip"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <ReactTooltip id="emailTip" place="top" effect="solid">
            We will email the Zoom link to this email.
          </ReactTooltip>
        </label>
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
