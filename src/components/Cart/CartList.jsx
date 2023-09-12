import React from 'react'
import {RiDeleteBin6Fill} from "react-icons/ri"
import { useDispatch } from 'react-redux'
import { decreaseCount, deleteCart, increaseCount } from '../Redux/cartSlice'

const CartList = ({cart}) => {
    const dispatch=useDispatch()
    let total=0
    const getTotal=cart.map(list=>{
        const multiple=list.counting*list.price
        total+=multiple
    })
    const taxPrice=Math.ceil((total/100)*4)
    const grandTotal=total+taxPrice

  return (
    <div className='p-2 overflow-auto'>
        {cart.map(product=><div key={product.id} className='mt-2'>
        <div className='flex w-full h-[150px] lg:h-[200px]'>
            <div className='w-[20%]'>
                <img src={product.image} className='h-full w-full' alt=''/>
            </div>
            <div className='w-[60%] pl-4 flex flex-col justify-around items-center'>
                <div>
                    <p className='text-lg text-gray-900 font-semibold'>{product.title}</p>
                </div>
                <div className='flex'>
                    <button className='border-2 text-xl border-black  rounded-lg pl-3 pr-3 mr-2 pb-1' onClick={()=>dispatch(decreaseCount(product.id))}>-</button>
                    <p className='text-lg font-bold'>count:{product.counting}</p>
                    <button className='border-[2px] text-xl ml-2 border-black rounded-lg pl-3 pr-3 pb-1' onClick={()=>dispatch(increaseCount(product.id))}>+</button>
                </div>
            </div>
            <div className='w-[20%] flex flex-col justify-around p-2 items-end'>
                <div>
                    <button className='text-4xl text-pink-600' onClick={()=>dispatch(deleteCart(product.id))}><RiDeleteBin6Fill/></button>
                </div>
                <div>
                    <p className='text-xl font-bold'>${product.counting*product.price}</p>
                </div>
            </div>
        </div>
        <hr className='h-1 bg-gray-700 w-full'/>
        </div>)}
        <div className='flex justify-end mt-4'>
            <div className='w-full lg:w-[50%]'>
                <div className='flex justify-between'>
                    <p className='text-xl text-pink-600'>Total price</p>
                    <p className='text-xl font-semibold text-pink-600'>${total.toFixed(2)}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-xl text-pink-600'>Tax Amount</p>
                    <p className='text-xl font-semibold text-pink-600'>${taxPrice}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-xl text-pink-600'>Delivery Charges</p>
                    <p className='text-xl font-semibold text-pink-600'>Free</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-xl font-bold text-pink-600'>Grand Total</p>
                    <p className='text-xl font-bold text-pink-600'>${grandTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartList