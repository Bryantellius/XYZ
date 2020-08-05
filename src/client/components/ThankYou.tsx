import * as React from "react";
import { Alert } from "react-bootstrap";

const ThankYou: React.FC<IThankYouProps> = (props: any) => {
  return (
    <div className="container my-5 col-md-6">
      <Alert variant="success">Success</Alert>
      <h2>Welcome to TrueCoders, {props.name}!</h2>
      <p>
        You have signed up for the <em>{props.classDate}</em> class.
        <br />
        Be on the look out for an email with class prep materials and tutorials.
        We are excited that you are changing your life with us!
      </p>
      <p>
        Any addition questions from here on out can be directed to{" "}
        <u>support@truecoders.io</u>.
      </p>
    </div>
  );
};

interface IThankYouProps {
  name: string;
  classDate: string;
}

export default ThankYou;
