<<<<<<< Updated upstream
import { Fragment } from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import {Routes , Route } from 'react-router-dom'
import Bites from './components/Bites/Bites'
import RestaurantSuggestion from './components/Bites/Suggestion/RestaurantSuggestion'
=======
import React , {Fragment}from 'react';
import {Routes , Route} from 'react-router-dom'
import Bites from './components/User/Bites/Bites'
import RestaurantSuggestion from "./components/User/Suggestion/RestaurantSuggestion";
import OrderHistory from "./components/User/OrderHistory/OrderHistory";
import AdminOrderHistory from "./components/Admin/AdminOrderHistory/AdminOrderHistory";
>>>>>>> Stashed changes


function App() {
  return (
<<<<<<< Updated upstream
   <Fragment>
    <Header />
      <Routes>
        <Route exact path='/bites' element={<Bites />} />
        {/* <Route exact path='/suggestions' element={<RestaurantSuggestion />} /> */}
      </Routes>
    <Footer />
   </Fragment>
  ); 
=======
  <Fragment>
    <Routes>
      <Route exact path="/bites" element={<Bites />} />
      <Route exact path="/suggestion" element={<RestaurantSuggestion />} />
      <Route exact path="/orderhistory" element={<OrderHistory />} />
      <Route exact path="/admin/orderhistory" element={<AdminOrderHistory />} />
    </Routes>
  </Fragment>
  );
>>>>>>> Stashed changes
}

export default App;
