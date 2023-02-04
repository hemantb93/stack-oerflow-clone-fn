import React from "react";
// import CheckoutForm from "../CheckoutForm";
import "./Subscriptions.css";
import key from "../../assets/circle-regular.svg";
import ruppes from "../../assets/indian-rupee-sign-solid.svg";
// import ToChecoutForm from "../ToChecoutForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Subscriptions = () => {
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUserReducer);

  const handleGoldSubscription = () => {
    if (User === null) {
      alert("First Login to procced");
      navigate("/Auth");
    } else {
      navigate("/ToChecoutForm");
    }
  };
  const handleSilverSubscription = () => {
    if (User === null) {
      alert("First Login to procced");
      navigate("/Auth");
    } else {
      navigate("/ToChecoutForm");
    }
  };
  return (
    <div className="payment-conatainer">
      <div className="box">
        <div className="payment-title">Free Plan</div>
        <div className="rupees">
          Free{"  "}
          {/* <img src={ruppes} alt="" className="rupees-img" />
            0/<h5> month</h5> */}
        </div>
        <p>No credit card required</p>
        <hr />
        <div className="box-containt">
          <div className="icon-2">
            <h4>
              <img src={key} alt="" />
              ChatOps integrations - Slack & Microsoft Teams
            </h4>
          </div>
          <div className="icon-2">
            <h4>
              <img src={key} alt="" />
              Your own private space hosted on stackoverflowteams.com
            </h4>
          </div>
          <div className="icon-2">
            <h4>
              <img src={key} alt="" />
              Structured and searchable knowledge base
            </h4>
          </div>
        </div>
        <div className="button">
          <button>Get Started</button>
        </div>{" "}
        <p>Post one Question Daily for free</p>
      </div>
      <div className="box">
        <div className="payment-title">Silver Plan</div>
        <div className="rupees">
          <img src={ruppes} alt="" className="rupees-img" />
          100/<h5> month</h5>
        </div>
        <p>per teammate / month</p>
        <hr />
        <div className="box-containt">
          <div className="icon-2">
            <h4>
              <img src={key} alt="" />
              Single sign-on (SSO) with SAML + Okta integration.
            </h4>
          </div>
          <div className="icon-2">
            <h4>
              <img src={key} alt="" />
              ChatOps integrations - Slack & Microsoft Teams.
            </h4>
          </div>
          <div className="icon-2">
            <h4>
              <img src={key} alt="" />
              Your own private space hosted on stackoverflowteams.com
            </h4>
          </div>
          <div className="icon-2">
            <h4>
              <img src={key} alt="" />
              Structured and searchable knowledge base.
            </h4>
          </div>
        </div>
        <div className="button">
          <button onClick={handleSilverSubscription}>Get Started</button>
        </div>
        <p>Post 5 Questions Daily</p>
      </div>
      <div className="box">
        <div className="payment-title">Gold Plan</div>
        <div className="rupees">
          <img src={ruppes} alt="" className="rupees-img" />
          1000/<h5> month</h5>
        </div>
        <p>per teammate / month</p>
        <hr />
        <div className="box-containt">
          <div className="icon-2">
            <h4>
              <img src={key} alt="" />
              Long-form knowledge with Articles.
            </h4>
          </div>
          <div className="icon-2">
            <h4>
              <img src={key} alt="" />
              Group content together into Collections.
            </h4>
          </div>
          <div className="icon-2">
            <h4>
              <img src={key} alt="" />
              Priority customer support
            </h4>
          </div>
        </div>
        <div className="button">
          <button onClick={handleGoldSubscription}>Get Started</button>
        </div>
        <p>Post Unlimited Question</p>
      </div>
    </div>
  );
};

export default Subscriptions;
