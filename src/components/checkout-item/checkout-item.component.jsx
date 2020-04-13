import React from 'react';
import { connect } from 'react-redux';

import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ addItem, clearItem, removeItem, cartItem }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={cartItem.imageUrl} alt='item' />
    </div>
    <span className='name'>{cartItem.name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
      <span className='value'>{cartItem.quantity}</span>
      <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
    </span> 
    <span className='price'>{cartItem.price}</span>
    <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: cartItem => dispatch(addItem(cartItem)),
  clearItem: cartItem => dispatch(clearItemFromCart(cartItem)),
  removeItem: cartItem => dispatch(removeItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);