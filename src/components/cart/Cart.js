import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCartXFill } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "../cartItem/CartItem";
import { useSelector } from "react-redux";
import {axiosClient} from '../../utils/axiosClient'
import { useNavigate } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';


function Cart({ onClose }) {
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalPrice = 0;
  cart.forEach((item) => (totalPrice += item.price * item.quantity));
  const isCartEmpty = cart.length === 0;
  const navigate = useNavigate();
  async function handleCheckout() {
    try {
        const response = await axiosClient.post('/orders', {
            products: cart
        });
        const stripe = await loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);
        const data = await stripe.redirectToCheckout({
            sessionId: response.data.stripeId
        })

    } catch (error) {
        console.log(error);
    }
    
}

  return (
    <div className="Cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shopping Cart</h3>
          <div className="close-btn" onClick={onClose}>
            <div className="icon">
              <AiOutlineCloseCircle />
            </div>
            <p>close</p>
          </div>
        </div>
        {cart.map((item) => (
          <CartItem key={item.key} cart={item} />
        ))}
        {isCartEmpty && (
          <div className="empty-cart-info">
            <div className="icon">
              <BsCartXFill />
            </div>
            <h3>Cart is Empty</h3>
          </div>
        )}
        {!isCartEmpty && (
          <div className="checkout-info">
            <div className="total-amount">
              <div className="total-message">Total</div>
              <div className="total-value">₹ {totalPrice}</div>
            </div>
            <div className="checkout primary-btn" onClick={handleCheckout}>Checkout Now</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
