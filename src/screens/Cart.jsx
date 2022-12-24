import React, { useState } from 'react';
import { ImBin } from 'react-icons/im';
import { Link } from 'react-router-dom';
const Cart = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <h1>Cart</h1>
      <div>
        <div className="cart">
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
              <button
                onClick={() => {
                  if (quantity > 0) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                className="qty-num"
                onChange={(event) => setQuantity(event.target.value)}
              />
              <button
                className="qty-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
