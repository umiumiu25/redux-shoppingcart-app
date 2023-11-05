import { useSelector } from "react-redux";

import { CartIcon } from "../HeroIcons";
import { getTotalAmount } from "../features/cart/CartSlice";

const Navbar = () => {
  const totalAmount = getTotalAmount(useSelector(store => store.cart));

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shopping</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
