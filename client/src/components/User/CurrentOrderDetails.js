import './UserFont.css'
import React, { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import CurrentOrderStatus from './CurrentOrderStatus'

const CurrentOrderDetails = () => {

  const navigate = useNavigate()

  const [dataset, setDataSet] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setCheckoutInfo(prevState => ({ ...prevState, address: { ...prevState.address, latitude: position.coords.latitude, longitude: position.coords.longitude } }))
    })
  }, [])

  let demoBillData = { items: [{ item: 'Pizza', quantity: 3 }, { item: 'Cake', quantity: 4 }, { item: 'Burger', quantity: 5 }], user: { email: 'aadarshjha@gmail.com', address: { floorApartment: '50', locality: 'Milkiwai', street: 'Galaxi', zipcode: 354128 }, name: 'John Cena', userId: '1515sadf51as2df' }, restaurant: { phone: 7655548955, name: 'Dominos', restaurantId: 'ksjafdkfja34wef' } }


  const fetchUserOrderData = async () => {
    const res = await fetch('http://localhost:5000/order/:id')

    const data = await res.json()

    if (data) {
      demoBillData = data;
      return
    }
  }
  // fetchUserOrderData()


  const [checkoutInfo, setCheckoutInfo] = useState({ address: { floorApartment: demoBillData.user.address.floorApartment, locality: demoBillData.user.address.locality, street: demoBillData.user.address.street, zipcode: demoBillData.user.address.zipcode, latitude: 0, longitude: 0 }, email: demoBillData.user.email, name: demoBillData.user.name, status: 'Placed', items:demoBillData.items })


  const [dynamicData, setDynamicData] = useState({ email: demoBillData.user.email, address: { floorApartment: demoBillData.user.address.floorApartment, locality: demoBillData.user.address.locality, street: demoBillData.user.address.street, zipcode: demoBillData.user.address.zipcode } })

  const checkoutOrder = async (e) => {
    try {
      e.preventDefault();
      console.log(checkoutInfo);
      // return setDataSet(true)
      return navigate(`/order/place/${demoBillData.user.userId}`)

      if (!checkoutInfo.number || !checkoutInfo.address.floorApartment || !checkoutInfo.address.locality || !checkoutInfo.address.street || !checkoutInfo.address.zipcode) {
        return alert('All important fields not filled')
      }

      const res = await fetch('http://localhost:5000/registerRestaurant', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          checkoutInfo
        })
      })

      const data = await res.json()
      if (data === 'success') {
        setDataSet(true);

        // <Route exact path='/registerRestaurant' element={<Register />} />

        return navigate(`/order/${demoBillData.user.userId}`)
      }

    } catch (error) {
      alert('An error occurred while placing your order, please try again')
    }
  }

  return (
    <>
      <Routes>
        <Route path={`:userId`} element={<CurrentOrderStatus orderDetails={checkoutInfo} />} />
        <Route path='/' element={
          <div>
        <div className="flex items-center justify-center min-h-screen bg-tintedGreen/95">
          <div className="relative text-yellow-400 bg-superBlack flex flex-col m-6 lg:w-9/12 w-10/12  shadow-2xl rounded-2xl md:flex-row">
            <div className="flex flex-col w-full md:w-1/2 text-center justify-center lg:py-16 py-5 lg:px-12 px-4">
              <span className="mb-3 lg:text-5xl text-3xl font-medium">
                Ready for checkout?
              </span>
              <span className='font-light text-base text-white mb-8'>
                Welcome! Please enter your details
              </span>
              <div>
                <input type="number" onChange={(e) => { setDynamicData(prevState => ({ ...prevState, number: e.target.value })); setCheckoutInfo(prevState => ({ ...prevState, number: e.target.value })) }} placeholder='Contact Number' name="number" id="number" required autoComplete='off' className='w-full py-1 px-2 border border-gray-300 bg-white/20 text-white placeholder:font-light placeholder:text-white lg:text-xl' />
              </div>
              <div className="pt-4">
                <input type="text" defaultValue={demoBillData.user.email} onChange={e => { setDynamicData(prevState => ({ ...prevState, email: e.target.value })); setCheckoutInfo(prevState => ({ ...prevState, email: e.target.value })) }} name="email" id="email" required autoComplete='off' placeholder='Email' className='w-full py-1 px-2 border border-gray-300 bg-white/20 text-white placeholder:font-light placeholder:text-white lg:text-xl' />
              </div>
              <div
                className='mt-5 grid grid-cols-2 gap-y-5 gap-x-4'>
                <input defaultValue={dynamicData.address.floorApartment} onChange={(e) => { setCheckoutInfo(prevState => ({ ...prevState, address: { ...prevState.address, floorApartment: e.target.value } })); setDynamicData(prevState => ({ ...prevState, address: { ...prevState.address, floorApartment: e.target.value } })); }} required type="text" name="floor/apartment" id="floor/apartment" placeholder='Floor/Apartment' className='w-full py-1 px-2 border bg-white/20 text-white border-gray-300 placeholder:font-light placeholder:text-white lg:text-xl' />
                <input defaultValue={dynamicData.address.locality} onChange={(e) => { setCheckoutInfo(prevState => ({ ...prevState, address: { ...prevState.address, locality: e.target.value } })); setDynamicData(prevState => ({ ...prevState, address: { ...prevState.address, locality: e.target.value } })) }} required type="text" name="locality" id="locality" placeholder='Locality' className='w-full py-1 px-2 border  bg-white/20 text-white border-gray-300 placeholder:font-light placeholder:text-white lg:text-xl' />
                <input defaultValue={dynamicData.address.street} onChange={(e) => { setCheckoutInfo(prevState => ({ ...prevState, address: { ...prevState.address, street: e.target.value } })); setDynamicData(prevState => ({ ...prevState, address: { ...prevState.address, street: e.target.value } })) }} required type="text" name="street" id="street" placeholder='Street' className='w-full  bg-white/20 text-white py-1 px-2 border border-gray-300 placeholder:font-light placeholder:text-white lg:text-xl' />
                <input defaultValue={dynamicData.address.zipcode} onChange={(e) => { setCheckoutInfo(prevState => ({ ...prevState, address: { ...prevState.address, zipcode: Number(e.target.value) } })); setDynamicData(prevState => ({ ...prevState, address: { ...prevState.address, zipcode: Number(e.target.value) } })) }} required type="number" name="zipcode" id="zipcode" placeholder='Zipcode' className='w-full py-1 px-2 border border-gray-300 bg-white/20 text-white placeholder:font-light placeholder:text-white lg:text-xl' />
              </div>
              <div className='py-4'>
                <textarea name="text" onChange={e => { setDynamicData(prevState => ({ ...prevState, addYourOwnTwist: e.target.value })); setCheckoutInfo(prevState => ({ ...prevState, addYourOwnTwist: e.target.value })) }} placeholder='Add your own twist ( More spicy, sweet, less sugar, maggi masala, etc... )' id="addYourOwnTwist" className='w-full resize-none bg-white/20 text-white py-1 px-2 border border-gray-300 placeholder:font-light placeholder:text-white lg:text-xl' />
              </div>
              <div>
                <textarea name="text" onChange={e => { setDynamicData(prevState => ({ ...prevState, adviceForDeliveryBoy: e.target.value })); setCheckoutInfo(prevState => ({ ...prevState, adviceForDeliveryBoy: e.target.value })) }} placeholder='Instruction for deliveryboy ( Bell ring matt karna, Padosi ko de jaana, Guard ko de jaana, etc... )' id="adviceForDeliveryBoy" className='w-full resize-none py-1 px-2 border border-gray-300 bg-white/20 text-white placeholder:font-light placeholder:text-white lg:text-xl' />
              </div>
            </div>
            <div className="relative md:w-1/2">
              <div className='w-full flex flex-col justify-center lg:py-16 py-5 lg:px-12 px-4 text-lg h-full rounded-r-2xl md:block' >
                <div
                  className='text-3xl font-medium text-center mb-2'>
                  Order Details
                </div>
                <div
                  className='text-2xl font-medium text-center mt-4'>
                  User Details
                </div>
                <div
                  className='space-y-1'>
                  <div
                    className='space-y-1'>
                    <div><span className='font-medium'>Name</span>: {demoBillData.user.name}</div>
                    <div><span className='font-medium'>Number</span>: {dynamicData.number}</div>
                    <div><span className='font-medium'>Email</span>: {dynamicData.email}</div>
                    <div>
                      <span className='font-medium'>Address: </span>
                      <span>{dynamicData.address.floorApartment}, </span>
                      <span>{dynamicData.address.locality}, </span>
                      <span>{dynamicData.address.street}, </span>
                      <span>{dynamicData.address.zipcode}</span>
                    </div>
                    <p className='text-2xl text-center pt-3 font-medium'>Items Ordered: </p>
                    {demoBillData.items.map(data => (
                      <div
                        className='text-center' key={data.item}>
                        <span className='font-medium'>{data.item}  </span>
                        <span>Quantity: {data.quantity} </span>
                      </div>
                    ))}
                    <div
                      className='text-center pb-3'>
                      {dynamicData.addYourOwnTwist || dynamicData.adviceForDeliveryBoy ? <div className='pt-3 text-2xl font-medium'>Optionals</div> : ''}
                      <div>{dynamicData.addYourOwnTwist ? <div><span className='font-medium'>Add your Own Twist:</span> {dynamicData.addYourOwnTwist}</div> : ''}</div>
                      <div>{dynamicData.adviceForDeliveryBoy ? <div><span className='font-medium'>Instructions:</span> {dynamicData.adviceForDeliveryBoy}</div> : ''}</div>
                    </div>
                    <div className='text-center'><span className='font-medium text-xl'>Status</span>: {checkoutInfo.status}</div>
                  </div>
                  <div
                    className='text-2xl text-center font-medium py-2'>
                    Restaurant Details
                  </div>
                  <div
                    className='space-y-1'>
                    <div><span className='font-medium'>Restaurant Phone:</span> {demoBillData.restaurant.phone}</div>
                    <div><span className='font-medium'>Restaurant Name:</span> {demoBillData.restaurant.name}</div>
                  </div>
                </div>
                <button onClick={e => checkoutOrder(e)} className='w-full cursor-pointer bg-yellow-400/90 text-black p-2 my-6 font-semibold'>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        }/>
      </Routes>
      
    </>
  );
}

export default CurrentOrderDetails;