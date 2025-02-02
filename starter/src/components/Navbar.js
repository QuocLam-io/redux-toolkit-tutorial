import { CartIcon, Testing } from "../icons";
import { useSelector } from "react-redux";

import React from "react";

const Navbar = () => {
const amount = useSelector(store=>{ return store.cart.amount})


  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <Testing />
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
