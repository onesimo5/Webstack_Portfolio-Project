import React from "react";
import "./App.css";
import CartButton from "./CartButton";

function ProductHeader({showing}) {
  
    // const [show, setShow] = React.useState(false);
  return (
    <div>
      <div className="d">
        <h1 className="header">WELCOME TO OnTheGo Foods</h1>
        {/* view cart button */}
        <CartButton />
        {/* <CartButton href="/cart" className="cart-btn" onClick={()=>{setShow(!show)
        showing(!show)
        }}>
          {show? "close": "View Cart"}
        </CartButton> */}
      </div>

    </div>
  );
}

export default ProductHeader;i
