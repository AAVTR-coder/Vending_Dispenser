import React from 'react';
import { useSearchParams } from "react-router-dom";

const containerStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const referenceNum = searchParams.get("reference");

  return (
    <div style={containerStyle}>
      <h1 style={{ textTransform: 'uppercase' }}>Order Successful</h1>
      <p>Reference No.: {referenceNum}</p>
    </div>
  );
};

export default PaymentSuccess;
