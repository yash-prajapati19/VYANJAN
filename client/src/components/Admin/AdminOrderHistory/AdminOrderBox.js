import React from "react";
import AdminOrderSum from "./AdminOrderSum";

const AdminOrderBox = () => {
  return (
    <div className="orderBox">
      <div className="orderId">
        <p>Order Id:</p>
        <p>ORDER001</p>
      </div>
      <div className="orderFrom">
        <p>Ordered From: </p>
        <p>Haryali</p>
      </div>
      <div className="orderAddress">
        <p>Address: </p>
        <p>Address 1</p>
      </div>
      <div className="orderCall">
        <p>Call:</p>
        <p>9700012345</p>
      </div>
      <AdminOrderSum />
      <div className="cancel">
        <p>Order Placed</p>
          <button>Accept Order</button>
          <button>Cancel Order</button>
      </div>
    </div>
  );
};

export default AdminOrderBox;
