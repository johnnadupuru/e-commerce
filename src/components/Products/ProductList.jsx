import React from 'react'
import {AiFillStar} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const ProductList = ({product}) => {
    const router=useNavigate()
  return (
    <div className='flex flex-col justify-around bg-white h-[430px] w-[270px] mr-2 ml-2 mb-2 mt-2 p-2 shadow-2xl border-2 border-pink-600 rounded-lg overflow-auto' onClick={()=>router(`/item/${product.id}`)}>
        <div className='h-[60%]'>
            <img src={product.image} className='w-full h-full rounded-lg' alt=''/>
        </div>
        <div >
            <p className='text-sm text-gray-700 font-semibold mt-2'>{product.title}</p>
            <p className='text-black text-xl font-semibold'>${product.price}<span className='text-sm text-gray-700 font-semibold ml-2'>onwords</span></p>
            <p className='bg-pink-400 pl-2 pr-2 rounded-full mb-2 w-fit text-white'>Free Delivery</p>
        </div>
        <div className='flex justify-between'>
            <div className='text-white bg-pink-600 w-fit flex pl-2 pr-2 rounded-full p-1'>
                <p className='font-semibold text-lg' >{product.rating.rate}</p>
                <p className=' ml-1 text-2xl'><AiFillStar/></p>
            </div>
            <div className='mt-2'>
                <p className=''>InStock:{product.rating.count}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductList