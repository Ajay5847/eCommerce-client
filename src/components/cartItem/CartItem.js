import React from 'react'
import dummyImage from '../../assets/poster.jpg';
import { AiOutlineCloseCircle } from "react-icons/ai";
import './CartItem.scss'
import { addToCart, removeCartItem, removeFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

function CartItem({cart}) {
    const dispatch = useDispatch();

  return (
    <div className='cartItem'>
        <div className="img-info">
            <img src={cart.image} alt="" />
        </div>
        <div className="item-info-wrapper">
            <div className="item-info">
                <h4 className="title">{cart.title}</h4>
                <div className="price">₹ {cart.price}</div>
                <div className="quantity-selector">
                    <span className="btn decrement" onClick={() => dispatch(removeFromCart(cart))}>-</span>
                    <span className="quantity">{cart.quantity}</span>
                    <span className="btn increment" onClick={() => dispatch(addToCart(cart))}>+</span>
                </div>
                <div className="total-price">Subtotal: ₹ {(cart.price)*(cart.quantity)}</div>
            </div>
            <div className="item-remove" onClick={() => dispatch(removeCartItem(cart))}>
                <div className="icon">
                    <AiOutlineCloseCircle />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem