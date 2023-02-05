import React, { Fragment } from "react";
import AdminOrderBox from "./AdminOrderBox";
import './AdminOrderHistory.css'

const AdminOrderHistory = () => {
  return (
    <Fragment>
      <div className="order">
        <div className="adminOrderTitle">
          <h2>Admin Order History</h2>
        </div>
        <div className="orderBoxDiv">
          <AdminOrderBox />
          <AdminOrderBox />
          <AdminOrderBox />
        </div>
      </div>
    </Fragment>
  );
};

export default AdminOrderHistory;
