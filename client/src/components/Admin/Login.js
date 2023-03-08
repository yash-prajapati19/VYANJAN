import React, { useState } from 'react';
import LoginImage from '../../images/access-control-system-abstract-concept/20944201.jpg'
import hider from '../../images/hide.png'
import viewer from '../../images/view.png'
import { useNavigate } from 'react-router'
import './AdminFont.css'


const Login = ( { setUrlMail, setTempLogin }) => {

  const navigate = useNavigate()

  const [show, setShow] = useState('password')
  const [showIcon, setShowIcon] = useState(hider)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const unhide = () => {
    if (show === 'password') {
      setShow('text')
      setShowIcon(viewer)
    } else if (show === 'text') {
      setShow('password')
      setShowIcon(hider)
    }
  }
  const clearAllInputs = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
      input.value = ''
    })
  }
  
  const verifyUser = async(e) => {
    e.preventDefault()
    if(email === '' || password === ''){
      return alert('All fields not filled')
    }
    
    const res = await fetch(`http://localhost:5000/adminlogin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, password
      })
    })
    
    const data = await res.json()
    if(data === 'Mail sent'){
      setUrlMail(email)
      setTempLogin({email:email, password:password})
      return navigate(`/otp/${email}`)
    } else {
      alert('Authorization Unsuccessful, please check your details properly')
      return clearAllInputs()
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: 'linear-gradient(115deg, #FEE2FE, #F2AA4CFF)' }}>
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome Back</span>
          <span className='font-light text-base text-gray-400 mb-8'>
            Welcome back! Please enter your details
          </span>
          <div className="py-4">
            <span className='mb-2 text-base'>Email</span>
            <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" required autoComplete='off' className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500' />
          </div>
          <div className='py-4 relative'>
            <span className='mb-3 text-base'>Password</span>
            <img src={showIcon} onClick={unhide} alt="" className='w-12 px-2 mt-1 absolute right-0 hover:cursor-pointer' />
            <input onChange={(e) => setPassword(e.target.value)} type={`${show}`} name="password" id="password" required className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500' />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <span className='font-bold text-base'>Forgot Password</span>
            </div>
          </div>
          <button onClick={verifyUser} className='w-full cursor-pointer bg-indigo-700/90 text-white p-2 rounded-lg mb-6 font-semibold'>
            Sign In
          </button>
        </div>
        <div className="relative">
          <img src={LoginImage} alt="" className='w-[400px] h-full hidden rounded-r-2xl md:block object-cover' />
        </div>
      </div>
    </div>
  );
}

export default Login;
