import React, { Fragment, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Admin/Login';
import Register from './components/Admin/Register';
import OTP from './components/Admin/OTP'
import CurrentOrderDetails from './components/User/CurrentOrderDetails'
import CurrentOrderStatus from './components/User/CurrentOrderStatus'


function App() {

  const [otpVerificationMail, setOtpVerificationMail] = useState('')
  const [tempLogin, setTempLogin] = useState({email:'', pw:''})


  return (
  <Fragment>
    <Routes>
      <Route exact path='/registerRestaurant' element={<Register />} />
      <Route exact path='/adminlogin' element={<Login setUrlMail={setOtpVerificationMail} setTempLogin={setTempLogin} />} />
      <Route exact path='/otp/*' element={<OTP urlMail={otpVerificationMail} tempLogin={tempLogin} setTempLogin={setTempLogin} />} />
      <Route exact path='/order/place' element={<CurrentOrderDetails />} />
      <Route exact path='/order/*' element={<CurrentOrderStatus />} />
    </Routes>
  </Fragment>
  );
}

export default App;