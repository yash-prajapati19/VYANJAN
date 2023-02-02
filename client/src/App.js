import React, { Fragment, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Admin/Login';
import Register from './components/Admin/Register';
import OTP from './components/Admin/OTP'


function App() {

  const [otpVerificationMail, setOtpVerificationMail] = useState('')
  const [tempLogin, setTempLogin] = useState({email:'', pw:''})


  return (
  <Fragment>
    <Routes>
      <Route exact path='/registerRestaurant' element={<Register />} />
      <Route exact path='/adminlogin' element={<Login setUrlMail={setOtpVerificationMail} setTempLogin={setTempLogin} tempLogin={tempLogin} />} />
      <Route exact path='/otp/*' element={<OTP urlMail={otpVerificationMail} tempLogin={tempLogin} />} />
    </Routes>
  </Fragment>
  );
}

export default App;