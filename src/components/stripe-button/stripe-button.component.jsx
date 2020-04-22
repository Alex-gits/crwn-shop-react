import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;

  const publishableKey = 'pk_test_IF0y7UAMV2VjouAF2KdGMiff00cscvU187';

  const onToken = token => {
    clearCart();

    alert('Your payment was successful!');
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

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);