import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import{FaShoppingCart} from "react-icons/fa"
import { addCart } from '../Redux/cartSlice'
import { AiFillStar } from 'react-icons/ai'

const Item = () => {
    const router=useNavigate()
    const {id}=useParams()
    const itemId=parseInt(id)
    const {products}=useSelector((state)=>state.products)
    const {cart}=useSelector((state)=>state.cart)
    const index=products.findIndex((list)=>list.id===itemId)
    const exist=cart.findIndex((list)=>list.id===itemId)
    const dispatch=useDispatch()
    const product=products[index]

    const renderToProduct=()=>{
        router("/products")
    }

  return (
    <div className='p-2 lg:pt-10 lg:p-4 flex justify-center'>
        {product&&<div className='lg:block hidden'>
            <button className='bg-pink-600 flex text-center mt-5 rounded-lg text-white font-semibold text-xl p-2 hover:scale-110' onClick={()=>router("/products")}>Back</button>
        </div>}
        {product&&<div className='w-[90%] lg:w-[70%] flex flex-col lg:flex-row'>
            <div className='lg:w-[50%] lg:h-[800px]'>
                <div className=''>
                    <img src={product.image} className='w-full h-[500px]' alt=''/>
                </div>
                <div className='flex justify-center'>
                    <div>
                        {exist>=0?(<button className='bg-pink-600 flex text-center mt-5 rounded-lg text-white font-semibold text-xl p-2 hover:scale-110' onClick={()=>router("/cart")}><p><FaShoppingCart className='mr-2 mt-1'/></p><p>Go to Cart</p></button>):
                        (<button className='bg-pink-600 flex text-center mt-5 rounded-lg text-white font-semibold text-xl p-2 hover:scale-110' onClick={()=>{dispatch(addCart(product)); router("/cart")}}><p><FaShoppingCart className='mr-2 mt-1'/></p><p>Add to Cart</p></button>)}
                    </div>
                </div>
            </div>
            <div className='lg:w-[50%] lg:h-[600px] flex flex-col justify-around  p-2 lg:p-4'>
                <div >
                    <p className='text-xl lg:text-3xl text-pink-600 font-semibold mt-2'>{product.title}</p>
                    <p className='text-black text-xl lg:text-3xl font-bold lg:mt-5 mt-2'>${product.price}<span className='text-sm text-gray-700 font-semibold ml-2'>onwords</span></p>
                    <p className='bg-pink-400 pl-2 pr-2 text-xl lg:text-2xl rounded-full mb-2 w-fit lg:mt-5 mt-2 text-white'>Free Delivery</p>
                </div>
                <div>
                    <p className='text-xl lg:text-2xl font-bold'>{product.description}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='text-white bg-pink-600 w-fit flex pl-2 pr-2 rounded-full p-1'>
                        <p className='font-semibold text-xl lg:text-3xl' >{product.rating.rate}</p>
                        <p className=' ml-1 text-2xl lg:text-4xl'><AiFillStar/></p>
                    </div>
                    <div className='mt-2'>
                        <p className='text-xl lg:text-2xl'>InStock:{product.rating.count}</p>
                    </div>
                </div>
            </div>
        </div>}
        {!product&&<div className=''>
            <button className='text-xl text-pink-600 font-semibold' onClick={()=>router("/products")}>Go to Products</button>
                {renderToProduct()}
            </div>}
    </div>
  )
}

export default Item