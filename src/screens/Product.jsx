import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import '../styles/Product.css';

const Product = () => {
  const items = ['12 g', '21 g', '55 mg', '1.3K mg'];
  const [selectedItem, setSelectedItem] = useState(null);

  function handleClick(item) {
    setSelectedItem(item);
  }

  const [quantity, setQuantity] = useState(0);
  //   const handleQuantity = (type) => {
  //     if (type === 'dec') {
  //       quantity > 1 && setQuantity(quantity - 1);
  //     } else {
  //       setQuantity(quantity + 1);
  //     }
  //   };

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
      <header>
        <img className="header-img" src="/images/kingsalmon.png" alt="" />
        <div className="icon-con">
          <div className="shopping-list-icon">
            <AiOutlineHeart />
          </div>
        </div>
      </header>
      <div>
        <h1>KING SALMON</h1>
        <h3>670 Bath / 270-300 g</h3>
        <p>
          King Salmon is the largest of the Pacific salmon species It's often
          considered the most delicious and is prized for its thick, moist and
          buttery smooth texture, which makes it feel like a total treat.
        </p>
        <div>
          <h3>Nutrition Facts</h3>
          <ul>
            {items.map((item) => (
              <li
                key={item}
                onClick={() => handleClick(item)}
                style={{
                  backgroundColor:
                    item === selectedItem ? 'lightblue' : 'white',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
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
        <div>
          <button className="add-to-cart" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
