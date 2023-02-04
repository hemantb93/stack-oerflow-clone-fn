import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import './CheckoutForm.css'

const stripePromise = loadStripe(
  "pk_test_51MQqhnSCnqAZPyzHejJHlI9yVQIl8gsBoAvmwm5j8uQ7ssoC2PGcnC8x5qlfNbd0BbrRPik3EmRZMFbdsSaJepH600b1D5uiBZ"
);

const successMessage = () => {
  return (
    <div className="success-msg">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-check2"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
        />
      </svg>
      <div className="title">Payment Successful</div>
    </div>
  );
};
// App component
const ToChecoutForm = () => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <div className="container">
      <div className="row s-box">
        {paymentCompleted ? (
          successMessage()
        ) : (
          <React.Fragment>
            <div className="col-md-7 order-md-1">
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  amount={2000}
                  setPaymentCompleted={setPaymentCompleted}
                />
              </Elements>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ToChecoutForm;
