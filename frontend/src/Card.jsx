import React from 'react';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  width: '250px',
  margin: '10px',
};

const imageStyle = {
  width: '200px',
  height: '200px',
  objectFit: 'cover',
};

const buttonStyle = {
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <div style={cardStyle}>
      <img src={img} alt="product" style={imageStyle} />
      <p>₹{amount}</p>
      <button style={buttonStyle} onClick={() => checkoutHandler(amount)}>Buy Now</button>
    </div>
  );
};

export default Card;
