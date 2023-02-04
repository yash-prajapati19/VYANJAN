import './UserFont.css'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CurrentOrderStatus = ({ orderDetails }) => {

  useEffect(() => {
    orderDetails.status = 'Accepted'
  }, [orderDetails])

  const playShorts = async () => {
    console.log('Playing Shorts');
  }


  return (
    <div className="flex items-center px-7 justify-center min-h-screen bg-tintedGreen/95">
      <div className="relative">
        <div className='w-full text-yellow-400 bg-superBlack flex flex-col justify-center py-16 px-12 lg:text-lg h-full rounded-r-2xl md:block' >
          <div
            className='text-3xl font-medium text-center mb-2'>
            Final Bill
          </div>
          <div
            className='text-2xl font-medium text-center mt-4'>
            User Details
          </div>
          <div
            className='space-y-1'>
            <div
              className='space-y-1'>
              <div><span className='font-medium'>Name</span>: {orderDetails.name}</div>
              <div><span className='font-medium'>Number</span>: {orderDetails.number}</div>
              <div><span className='font-medium'>Email</span>: {orderDetails.email}</div>
              <div>
                <span className='font-medium'>Address: </span>
                <span>{orderDetails.address.floorApartment}, </span>
                <span>{orderDetails.address.locality}, </span>
                <span>{orderDetails.address.street}, </span>
                <span>{orderDetails.address.zipcode}</span>
              </div>
              <p className='text-2xl text-center pt-3 font-medium'>Items Ordered: </p>
              {orderDetails.items.map(data => (
                <div
                  className='text-center' key={data.item}>
                  <span className='font-medium'>{data.item}  </span>
                  <span>Quantity: {data.quantity} </span>
                </div>
              ))}
              <div
                className='text-center pb-3'>
                {orderDetails.addYourOwnTwist || orderDetails.adviceForDeliveryBoy ? <div className='pt-3 text-2xl font-medium'>Optionals</div> : ''}
                <div>{orderDetails.addYourOwnTwist ? <div><span className='font-medium'>Add your Own Twist:</span> {orderDetails.addYourOwnTwist}</div> : ''}</div>
                <div>{orderDetails.adviceForDeliveryBoy ? <div><span className='font-medium'>Instructions:</span> {orderDetails.adviceForDeliveryBoy}</div> : ''}</div>
              </div>
            </div>
          </div>
          <div
            className='absolute bg-yellow-400 text-superBlack hover:text-yellow-400 group cursor-pointer px-3 rounded-lg overflow-hidden py-2 right-1 bottom-1' onClick={playShorts}>
            <span className='absolute group-hover:w-full bg-superBlack transition-all ease-out duration-300 w-0 h-full left-0 top-0'></span>
            <div className='relative text-lg font-medium'>Play Bits</div>
          </div>
        </div>
      </div>
      <div
        className='absolute top-0'>
        <div className='text-center bg-superBlack text-yellow-400 px-2 pb-3 pt-2'>
          <span className='font-medium text-xl'>Status</span>
          : {orderDetails.status}
        </div>
      </div>
    </div>
  );
}

export default CurrentOrderStatus;
