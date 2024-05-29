import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartButton() {
  const cart = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <button>
        <Link to='/cart'>Cart({cart.length})</Link>
      </button>
    </div>
  );
}

export default CartButton;
