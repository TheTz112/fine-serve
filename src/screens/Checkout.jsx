import React from 'react';
import '../styles/Checkout.css';
import { AiFillBank } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Checkout = () => {
  return (
    <div className="checkout-con">
      <h1>CHECKOUT</h1>
      <div className="bar"></div>

      <div className="checkout-body">
        <div className="address-con">
          <div className="address-header">
            <h3>Address</h3>
            <p>Change</p>
          </div>

          <div className="address">
            <h2>
              Warintorn
              <br /> Tawatlupinyo
            </h2>
            <p>
              The Exel Hidea Sukumwit 71
              <br />
              090-280-3678
            </p>
          </div>
        </div>
        <div className="bank-transfer-con">
          <h3>Bank Transfer</h3>
          <div className="bank-transfer">
            <div className="bank-left">
              <AiFillBank />
            </div>
            <div className="bank-right">
              <h2>KBANK</h2>
              <div className="bank-name">
                <p>
                  Accout Name: บริษัท ไฟน์เสริฟ จำกัด
                  <br />
                  Fineserve Co.,Ltd
                </p>
              </div>
              <p>
                Account No: <span className="bank-num"> 777 1 02342 1</span>
              </p>
            </div>
          </div>
        </div>

        <div className="instructions">
          <p>Bank Transfer Instructions</p>
          <p>
            1. Transfer money to following Bank account number below. <br />
            2. Affter transfer the money please attach slip and fill in transfer
            date and time.
          </p>
        </div>

        <div className="check-total">
          <h2>TOTAL</h2>
          <h2>3,000 Bath</h2>
        </div>
        <Link to={'Transfer'} className="attach">
          <button className="attach-btn">Attach Transfer Slip</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
