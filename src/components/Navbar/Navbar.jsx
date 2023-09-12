import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
import{FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {cart}=useSelector((state)=>state.cart)
    const total=cart.length

  return (
    <nav className="bg-pink-600 p-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <NavLink to="/" className="text-white text-2xl font-bold flex">
            <img src={"/logo.jpg"} className='h-10 w-10 rounded-full mb-1 mr-2' alt=''/>
            <p>J-Mart</p>
          </NavLink>
        </div>
        <div>
            <div className="lg:hidden group relative">
                <div className='flex'>
                    <NavLink to="/cart" className="flex">
                        <FaShoppingCart className='text-white text-3xl mt-2 mr-2'/>
                        <p className='text-white text-xl mt-2 mr-3'>{total}</p>
                    </NavLink> 
                    <button className='text-black p-2 text-3xl border-2 border-black shadow-md rounded-lg'>
                        <AiOutlineClose className='hidden group-hover:block'/>
                        <AiOutlineMenu className='group-hover:hidden'/>
                    </button>
                </div>
                <div className='absolute hidden rounded-b-lg group-hover:flex flex-col group-hover:left-[-60px] left-[200px] h-[200px] w-[177px] duration-1000 bg-pink-600'>
                    <NavLink
                        to="/"
                        className="text-white text-xl font-semibold aria-[current=page]:text-blue-400 mt-3 aria-[current=page]:font-bold hover:text-blue-400 px-4 py-2"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/products"
                        className="text-white text-xl font-semibold aria-[current=page]:text-blue-400 aria-[current=page]:font-bold hover:text-blue-400 px-4 py-2"
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className="text-white text-xl font-semibold aria-[current=page]:text-blue-400 aria-[current=page]:font-bold hover:text-blue-400 px-4 py-2"
                    >
                        Cart
                    </NavLink>
                </div>
            </div>
            <div
                className={`hidden lg:flex mt-4 lg:mt-0 lg:space-x-4`}
                >
                <NavLink
                    to="/"
                    className="text-white text-xl font-semibold aria-[current=page]:text-blue-400 aria-[current=page]:font-bold hover:text-blue-400 px-4 py-2"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/products"
                    className="text-white text-xl font-semibold aria-[current=page]:text-blue-400 aria-[current=page]:font-bold hover:text-blue-400 px-4 py-2"
                >
                    Products
                </NavLink>
                <NavLink
                    to="/cart"
                    className="flex text-white text-xl font-semibold aria-[current=page]:text-blue-400 aria-[current=page]:font-bold hover:text-blue-400 px-4 py-2"
                >
                    <p>Cart {total}</p>
                    <FaShoppingCart className='text-2xl ml-2 mt-'/>
                </NavLink>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
