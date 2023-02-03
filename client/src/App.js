import React , {Fragment}from 'react';
import {Routes , Route} from 'react-router-dom'
import Bites from './components/User/Bites/Bites'
import RestaurantSuggestion from "./components/User/Suggestion/RestaurantSuggestion";
import OrderHistory from "./components/User/OrderHistory/OrderHistory";
import AdminOrderHistory from "./components/Admin/AdminOrderHistory/AdminOrderHistory";


function App() {
  return (
  <Fragment>
    <Routes>
      <Route exact path="/bites" element={<Bites />} />
      <Route exact path="/suggestion" element={<RestaurantSuggestion />} />
      <Route exact path="/orderhistory" element={<OrderHistory />} />
      <Route exact path="/admin/orderhistory" element={<AdminOrderHistory />} />
    </Routes>
  </Fragment>
  );
}

export default App;
