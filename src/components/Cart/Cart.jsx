import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartList from './CartList'

const Cart = () => {
    const {cart}=useSelector((state)=>state.cart)
    const router=useNavigate()
  return (
    <div className='md:p-2 lg:p-5 lg:h-[100vh]'>
        <div className='flex'>
            <div className='w-[50%] h-full hidden lg:block'>
                <div className='bg-pink-600 lg:h-[100vh] w-full flex flex-col justify-center items-center '>
                    <h1 className='text-3xl text-white font-bold'>J-Mart Cart</h1>
                    <img src={"/cart3.png"} className='h-200 w-200' alt=''/>
                </div>
            </div>
            <div className='w-ful lg:w-[50%]'>
                {cart.length>0?(<CartList cart={cart}/>):
                (<div className='flex flex-col items-center'>
                    <div className='flex justify-center'>
                        <img src={"/cart4.png"} className='h-[50%] w-[50%]' alt=''/>
                    </div>
                    <div className='text-center'>
                        <p className='text-xl lg:text-3xl text-pink-600 font-bold'>Your J-Mart Cart is empty</p>
                        <button className='bg-pink-600 mt-5 rounded-lg text-white font-semibold text-xl p-2 hover:scale-110' onClick={()=>router("/products")}>Shop Now</button>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Cart