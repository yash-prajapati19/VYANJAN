import React, { useState } from 'react';
import { useNavigate } from 'react-router'

const OTP = ({ urlMail, tempLogin }) => {

  const navigate = useNavigate()

  const [otp, setOtp] = useState('')

  const nextHopInput = (e, first, last) => {
    if (e.key >= 0 && e.key <= 9) {
      document.getElementById(last).focus()
    } else if (e.key === 'Backspace') {
      document.getElementById(first).focus()
    }
  }

  const resendOTP = async () => {
    const res = await fetch(`http://localhost:5000/adminlogin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
      })
    })

    const data = await res.json()
    if(data === 'Mail sent'){
      return navigate(`/otp/${tempLogin.email}`)
    } else {
      alert('Authorization Unsuccessful, please try again')
    }
  }

  const validateOTP = async (e) => {
    e.preventDefault()
    if (otp === '') {
      return alert('Otp field is empty!!!')
    }

    const res = await fetch(`http://localhost:5000/otp/${urlMail}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp
      })
    })

    const data = await res.json()

    if (data === 'Otp verification successfull') {
      return navigate('/adminHome')
    } else {
      return alert('Otp verification unsuccessfull. Try again or request another otp')
    }
  }

  return (
    <div
      className='flex items-center overflow-hidden justify-center h-[100vh] w-full' style={{ backgroundImage: 'linear-gradient(115deg, #F2AA4CFF, #FEE2FE)' }}>
      <div className="bg-kindaTransparent border rounded-lg p-6 max-w-[1000px] text-center">
        <h2>Verify your Account</h2>
        <p>
          We have mailed you the six digit code to {urlMail} <br />
          Enter the code below to confirm your email address.
        </p>
        <div className="flex justify-center space-x-2 items-center my-8">
          <input
            onKeyUp={(e) => nextHopInput(e, e.target, 'second')}
            type="number"
            autoFocus
            onChange={(e) => setOtp(e.target.value)}
            className='bg-kindaSimilarToTransparent rounded-lg border md:text-2xl text-xl md:w-16 w-14 md:h-14 h-12 shadow text-center font-semibold'
            name="otp"
            id="first"
            required />
          <input
            type="number"
            onChange={(e) => setOtp((prev) => prev + e.target.value)}
            onKeyUp={(e) => nextHopInput(e, e.target, 'third')}
            className='bg-kindaSimilarToTransparent rounded-lg border md:text-2xl text-xl md:w-16 w-14 md:h-14 h-12 shadow text-center font-semibold'
            name="otp"
            id="second"
            required />
          <input
            type="number"
            onChange={(e) => setOtp((prev) => prev + e.target.value)}
            onKeyUp={(e) => nextHopInput(e, e.target, 'forth')}
            className='bg-kindaSimilarToTransparent rounded-lg border md:text-2xl text-xl md:w-16 w-14 md:h-14 h-12 shadow text-center font-semibold'
            name="otp"
            id="third"
            required />
          <input
            type="number"
            onChange={(e) => setOtp((prev) => prev + e.target.value)}
            onKeyUp={(e) => nextHopInput(e, e.target, 'verify')}
            className='bg-kindaSimilarToTransparent rounded-lg border md:text-2xl text-xl md:w-16 w-14 md:h-14 h-12 shadow text-center font-semibold'
            name="otp"
            id="forth"
            required />
        </div>
        <button id='verify' className='focus:border-none focus:outline-none focus:bg-violet-700/90 w-full bg-violet-500/80 mb-4 cursor-pointer text-white p-2 rounded-lg font-semibold' onClick={validateOTP}>VERIFY</button>
        <small>
          If you didn't recieve a code !! <strong className='text-violet-600 text-lg cursor-pointer' onClick={resendOTP}>RESEND</strong>
        </small>
      </div>
    </div>
  );
}

export default OTP;
