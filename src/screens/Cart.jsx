import React, { useState } from 'react';
import { ImBin } from 'react-icons/im';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';
const Cart = () => {
  const [quantity, setQuantity] = useState(0);
  function increaseQuantity(quantity, setQuantity) {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity(quantity, setQuantity) {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-cont">
        <div className="cart-card">
          <div className="cart-left">
            <img src="/images/sm1.png" alt="" />
          </div>
          <div className="cart-right">
            <Link to={`/Product/`}>
              {/* ${product._id} */}
              <h2>KING SALMON</h2>
            </Link>
            <p>670 Bath</p>
            <div className="qty">
              <button onClick={() => decreaseQuantity(quantity, setQuantity)}>
                -
              </button>
              <input
                type="number"
                value={quantity}
                className="qty-num"
                onChange={(event) => setQuantity(event.target.value)}
              />
              <button onClick={() => increaseQuantity(quantity, setQuantity)}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="cart-card">
          <div className="cart-left">
            <img src="/images/sm1.png" alt="" />
          </div>
          <div className="cart-right">
            <Link to={`/Product/`}>
              {/* ${product._id} */}
              <h2>KING SALMON</h2>
            </Link>
            <p>670 Bath</p>
            <div className="qty">
              <button onClick={() => decreaseQuantity(quantity, setQuantity)}>
                -
              </button>
              <input
                type="number"
                value={quantity}
                className="qty-num"
                onChange={(event) => setQuantity(event.target.value)}
              />
              <button onClick={() => increaseQuantity(quantity, setQuantity)}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="total">
        <h2>TOTAL</h2>
        <h3>3,000 Bath</h3>
      </div>

      <button className="check-out">CHECK OUT</button>
    </div>
  );
};

export default Cart;
