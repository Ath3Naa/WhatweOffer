import React, { useState } from 'react';
import Styles from '..PaymentPageModel/PaymentPageModel.css/'
import { useNavigate } from 'react-router-dom';

const PaymentPageModel = () => {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the payment information

    // Process the payment
  };

  return (
    <div>
      <h1>Payment</h1>

      <form onSubmit={handleSubmit}>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="upi">UPI</option>
          <option value="card">Card</option>
        </select>

        {paymentMethod === 'upi' && (
          <input
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="Enter UPI ID"
          />
        )}

        {paymentMethod === 'card' && (
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
          />
        )}

        <button type="submit">Verify and Pay</button>
      </form>
    </div>
  );
};

export default PaymentPageModel;
