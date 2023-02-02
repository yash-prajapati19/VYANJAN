import React, { useState } from 'react';
import Donut from '../../images/undraw_donut_love_kau1.svg'
import hider from '../../images/hide.png'
import { useNavigate } from 'react-router'
import viewer from '../../images/view.png'

const Register = () => {
  //<a href="https://www.freepik.com/free-vector/hand-drawn-food-elements_1159027.htm#query=food&position=10&from_view=search&track=sph">Image by bimbimkha</a> on Freepik      


  // <a href="https://www.flaticon.com/free-icons/eye" title="eye icons">Eye icons created by exomoon design studio - Flaticon</a>

  // <a href="https://www.flaticon.com/free-icons/eyes" title="eyes icons">Eyes icons created by Tanah Basah - Flaticon</a>

  // footer link to be mentioned


  const navigate = useNavigate()

  const [show, setShow] = useState('password')
  const [showIcon, setShowIcon] = useState(hider)

  const [registerData, setRegisterData] = useState({ name: '', email: '', tags: [], imageUrl: [], address: { floorApartment: '', locality: '', street: '', zipcode: 0 }, number: 0, password: '', confirmPassword: '', tnc: false })

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
    const textArea = document.querySelector('textarea')
    textArea.value = ''
    inputs.forEach(input => {
      input.value = ''
    })
  }

  const sendData = async (e) => {
    e.preventDefault()
    if (registerData.name === '' || registerData.email === '' || registerData.address === {} || registerData.password === '') {
      return alert('Fields empty')
    } else if (registerData.address.zipcode.toString().length !== 6) {
      clearAllInputs()
      return alert('Wrong Zip Code!!!')
    } else if (registerData.number.toString().length !== 10) {
      clearAllInputs()
      return alert('Invalid phone number!!!')
    } else if (registerData.password !== registerData.confirmPassword) {
      clearAllInputs()
      return alert('Passwords don\'t match, try again!!!')
    } else if (!registerData.tnc) {
      clearAllInputs()
      return alert('Please Accept the terms and conditions!!!')
    }

    const res = await fetch('http://localhost:5000/registerRestaurant', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registerData
      })
    })

    const data = await res.json()
    if (data === 'success') {
      navigate('/adminlogin')
    } else {
      alert('An error occurred while logging you in, please try again')
      clearAllInputs()
    }
  }


  return (
    <div
      className='min-h-screen py-16' style={{ backgroundImage: 'linear-gradient(115deg, #101820FF, #FEE2FE)' }}>
      <div
        className='container mx-auto'>
        <div
          className='lg:w-8/12 w-10/12 flex-col lg:flex-row flex bg-white rounded-xl  mx-auto shadow-lg overflow-hidden'>
          <div
            className="w-full lg:w-1/2 flex flex-col items-center bg-no-repeat bg-cover bg-center justify-center p-12" style={{ backgroundImage: `url(${Donut})` }}>
            <h1
              className='text-black -z-10 text-3xl mb-3'>
              Welcome
            </h1>
            <div
              className='-z-20'>
              <p
                className='text-black'>
                Image url left
              </p>
            </div>
          </div>
          <div
            className='w-full text-center lg:w-1/2 py-16 px-12'>
            <h2
              className='text-4xl mb-4'>
              Register
            </h2>
            <p
              className='mb-4 text-xl'>
              A tag line
            </p>
            <form method='post'>
              <div>
                <input onChange={(e) => setRegisterData({ name: e.target.value })} required type="text" name="restaurantName" id="restaurantName" placeholder='Name your Restaurant' className='border border-gray-400 py-1 w-full px-2' />
              </div>
              <div
                className='mt-5'>
                <input onChange={(e) => setRegisterData(prevState => ({ ...prevState, email: e.target.value }))} required type="email" name="email" id="email" placeholder='Provide an email' className='border border-gray-400 py-1 w-full px-2' />
              </div>
              <div
                className='mt-5'>
                <textarea onChange={(e) => { setRegisterData(prevState => ({ ...prevState, tags: [e.target.value].toString().split(',') })) }} name="tags" id="tags" placeholder="Tags(separate with a ',' if multiple)" className='border border-gray-400 resize-none py-1 w-full px-2' />
              </div>
              <div
                className=''>
                <textarea onChange={(e) => { setRegisterData(prevState => ({ ...prevState, imageUrl: [e.target.value].toString().split(' ') })) }} name="tags" id="tags" placeholder="Imag urls(separate with a blank space if multiple)" className='border border-gray-400 resize-none py-1 w-full px-2' />
              </div>
              <div
                className='mt-5 grid grid-cols-2 gap-5'>
                <input onChange={(e) => { setRegisterData(prevState => ({ ...prevState, address: { floorApartment: e.target.value } })) }} required type="text" name="floor/apartment" id="floor/apartment" placeholder='Floor/Apartment' className='border border-gray-400 py-1 w-full px-2' />
                <input onChange={(e) => { setRegisterData(prevState => ({ ...prevState, address: { ...prevState.address, locality: e.target.value } })) }} required type="text" name="locality" id="locality" placeholder='Locality' className='border border-gray-400 py-1 w-full px-2' />
                <input onChange={(e) => { setRegisterData(prevState => ({ ...prevState, address: { ...prevState.address, street: e.target.value } })) }} required type="text" name="street" id="street" placeholder='Street' className='border border-gray-400 py-1 w-full px-2' />
                <input onChange={(e) => { setRegisterData(prevState => ({ ...prevState, address: { ...prevState.address, zipcode: Number(e.target.value) } })) }} required type="number" name="zipcode" id="zipcode" placeholder='Zipcode' className='border border-gray-400 py-1 w-full px-2' />
              </div>
              <div
                className='mt-5'>
                <input onChange={(e) => setRegisterData(prevState => ({ ...prevState, number: Number(e.target.value) }))} required type="number" name="contact" id="contact" placeholder='Enter your number' className='border border-gray-400 py-1 w-full px-2' />
              </div>
              <div
                className='mt-5 relative'>
                <img src={showIcon} onClick={unhide} alt="" className='w-12 absolute right-0 px-2 mb-1 hover:cursor-pointer' />
                <input onChange={(e) => setRegisterData(prevState => ({ ...prevState, password: e.target.value }))} required type={`${show}`} name="password" id="password" placeholder='Password' className='border border-gray-400 py-1 w-full px-2' />
              </div>
              <div
                className='mt-5 relative'>
                <img src={showIcon} onClick={unhide} alt="" className='w-12 absolute px-2 mb-1 hover:cursor-pointer right-0' />
                <input onChange={(e) => setRegisterData(prevState => ({ ...prevState, confirmPassword: e.target.value }))} required type={`${show}`} name="confirmpassword" id="confirmpassword" placeholder='Confirm Password' className='border border-gray-400 py-1 w-full px-2' />
              </div>
              <div
                className='mt-5'>
                <input onChange={(e) => setRegisterData(prevState => ({ ...prevState, tnc: e.target.value }))} required type="checkbox" name="terms" id="terms" className='border border-gray-400' />
                <label htmlFor="terms">
                  <span
                    className='ml-1'>
                    I accept the <span className='text-indigo-700/80 font-semibold hover:cursor-pointer' href="#">Terms of Use</span> & <span className='text-indigo-700/80 hover:cursor-pointer font-semibold' href="#">Privacy Policy</span>
                  </span>
                </label>
              </div>
              <div
                className='mt-5'>
                <button onClick={(e) => sendData(e)}
                  className='w-full cursor-pointer bg-indigo-700/80 font-semibold py-3 text-center text-white'>
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
