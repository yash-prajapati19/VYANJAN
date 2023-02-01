import { Fragment } from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import {Routes , Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import Shipping from './components/Shipping/Shipping'
import Order from './components/Order/Order'


function App() {
  return (
   <Fragment>
    <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/shipping' element={<Shipping />} />
        <Route exact path='/order' element={<Order />} />
      </Routes>
    <Footer />
   </Fragment>
  );
}

export default App;
