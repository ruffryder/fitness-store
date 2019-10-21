import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/logo.svg";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_c4NlzsBKXZuoiXk5M3fVNDAX00lSUzTrLi";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Royal Fitness Supplements Ltd."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
}

export default StripeButton;
