import React from 'react';
import { AiFillBank } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/Transfer.css';

const Transfer = () => {
  const textToCopy = '777 1 02342 1';
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
  };
  return (
    <div className="checkout-con">
      <h1>CHECKOUT</h1>
      <div className="bar"></div>
      <div className="checkout-body">
        <h3>Bank Tranfer</h3>
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
            <div className="tel">
              <p>
                Account No: <span className="bank-num"> 777 1 02342 1</span>
              </p>
              <div className="copy">
                <p onClick={copyToClipboard}>copy</p>
              </div>
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
      </div>
      <form className="slip-form">
        <div className="slip-left">
          <input type="file" />
        </div>
        <div className="slip-right">
          <input type="text" placeholder="Transfer Date" />
          <input type="text" placeholder="Transfer Time" />
        </div>
      </form>
      <Link to={'/Success'}>
        <button className="proceed-btn">Proceed the Payment</button>
      </Link>
    </div>
  );
};

export default Transfer;
