import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import { getTotalAmount, getTotalPrice } from "../features/cart/CartSlice";
import { openModal } from "../features/modal/ModalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart);
  const totalAmount = getTotalAmount(cartItems);
  const totalPrice = getTotalPrice(cartItems);

  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
        {totalAmount === 0 ? (
          <h4 className="empty-cart">何も入ってません・・・（ ; ; ）</h4>
        ) : (
          <div>
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        )}
      </header>
      {totalAmount !== 0 && (
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              合計 <span>{totalPrice}円</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(openModal())}
          >
            全削除
          </button>
        </footer>
      )}
    </section>
  );
};

export default CartContainer;
