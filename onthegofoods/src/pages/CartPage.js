import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from "../redux/CartActions";
import { Link } from "react-router-dom";
import Product from "../components/Product";


function CartPage() {
    const cart = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <div>
            <Product />
            <div className=" cart-cont">
            <div className="cart-list">
                <h1>Cart</h1>
                {/* cart items */}
                {cart && cart.map((item, index) => {
                    return (
                        <div
                        style={{ backgroundImage: `url(${item.image})` }}
                        className="cart"
                        key={index}
                        >
                        <h3>{item.name}</h3>
                        <p>{item.amount}$</p>
                        <button className="btn" onClick={(e)=>{
                            dispatch(removeFromCart(item));
                            // added a function to add the pizza to the cart
                            alert(`${item.name} has been removed from cart`);
                            // remove item from cart
                        }} >Remove Item</button>
                        </div>
                    )})}
                </div>
                <div className="total">
                    <h1>Total</h1>
                    <p>{cart.reduce((a, b) => a + b.amount, 0)}$</p>
                    <button>Check out</button>
                    <button className="btn" onClick={(e)=>{
                            dispatch(clearCart());
                            // added a function to add the pizza to the cart
                            alert(`Cart has been cleared`);
                            // remove item from cart
                        }} >Clear cart</button>
                    <Link to='/order'>Back to order</Link>
                </div>
            </div>
        </div>
      )
}


export default CartPage;
