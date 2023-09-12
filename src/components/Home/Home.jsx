import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const router=useNavigate()
  return (
    <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-[50%] p-2 lg:p-5 lg:order-2'>
            <div className='h-fit lg:h-[600px] border-2 border-pink-600 rounded-xl p-2 md:p-4 flex flex-col justify-between'>
                <div>
                <h1 className='text-pink-600 text-2xl md:text-3xl font-bold'>Welcome to J-Mart</h1>
                <p className='text-lg md:text-xl font-semibold'>Discover the ultimate shopping experience with J-Mart, your go-to online shopping app.</p>
                <p className='text-lg md:text-xl font-semibold'>Unbeatable prices on a vast range of products. Don't miss out on our daily deals and exclusive discounts!</p>
                <p className='text-lg md:text-xl font-semibold'> We deliver your orders right to your doorstep, so you can enjoy your purchases without delay.</p>
                <p className='text-lg md:text-xl font-semibold'>Explore thousands of products from various categories. Whether it's fashion, electronics, home essentials, or more - we've got it all!</p>
                <p className='text-lg md:text-xl font-semibold'> Our app is designed for effortless navigation, making your shopping experience smooth and enjoyable.</p>
                </div>
                <div className='text-center mt-10'>
                    <button className='bg-pink-600 rounded-lg text-white font-semibold text-xl p-2 hover:scale-110' onClick={()=>router("/products")}>Shop Now</button>
                </div>
            </div>
        </div>
        <div className='lg:w-[50%] p-2 lg:p-5 lg:order-1' >
        <div className=' h-[350px] lg:h-[600px] border-2 bg-pink-600 rounded-xl p-2 md:p-4 flex flex-col justify-between'>
            <img src={"/homeImage2.jpg"} className='h-full w-100 rounded-lg' alt=''/>
            <p className='text-center text-white text-xl mt-5'>Continue shopping....</p>
        </div>
        </div>
    </div>
  )
}

export default Home