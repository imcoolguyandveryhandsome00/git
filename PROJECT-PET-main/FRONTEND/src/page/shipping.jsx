// src/ShippingStatus.js

import React from 'react';

const ShippingStatus = ({ shipments }) => {
  return (
    <div>
      <h1>Shipping Status</h1>
      <ul>
        {shipments.map((shipment) => (
          <li key={shipment.id}>
            ID: {shipment.id} <br />
            Status: {shipment.status} <br />
            {/* แสดงข้อมูลสถานะอื่น ๆ ตามที่คุณต้องการ */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShippingStatus;
