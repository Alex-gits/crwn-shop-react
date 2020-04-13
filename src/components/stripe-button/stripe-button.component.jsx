import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey = 'pk_test_IF0y7UAMV2VjouAF2KdGMiff00cscvU187';

  const onToken = token => {
    alert('Your payment was successful!')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Crwn CLothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;