import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../Redux/productsSlice'
import ProductList from './ProductList'

const Products = () => {
    const [loader, setLoader]=useState(false)
    const [input,setInput]=useState("")
    const {products}=useSelector((state)=>state.products)
    const dispatch=useDispatch()

    const finalProducts=products?.filter(product=>{
        const lowerInput=input.toLowerCase()
        return(
            product.category.toLowerCase().includes(lowerInput)||product.title.toLowerCase().includes(lowerInput)
        )
    })

    const fetchProducts=async()=>{
        try {
            const response=await axios.get('https://fakestoreapi.com/products')
            const data=await response.data
            dispatch(addProducts(data))
            setLoader(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        setLoader(true)
        fetchProducts()   
    },[])
  return (
    <div className='p-2 lg:p-4'>
        <div className='flex justify-center'>
            <div className='flex w-[90%] lg:w-[40%]'>
                <p className='bg-pink-600 text-white w-[150px] p-1 rounded-l-lg'>Search Results</p>
                <input type='search' onChange={(e)=>setInput(e.target.value)} className='pl-2 border-2 w-full rounded-r-lg border-pink-600 outline-pink-600'/>
            </div>
        </div>
        <hr className='bg-pink-600 h-1 w-full mt-2'/>
        <div className=''>
            <h1 className='text-pink-600 text-3xl font-bold text-center'>My Products</h1>
            {loader?(<div className='h-[500px] flex justify-center items-center'>
                <div className="w-16 h-16 border-t-4 border-pink-600 rounded-full animate-spin"></div>
            </div>):(products.length>0?(
                <div className='flex flex-wrap justify-center'>
                    {finalProducts.map(product=><ProductList key={product.id} product={product}/>)}
                </div>):
            (<div className="h-[500px] flex justify-center items-center"><p className='text-xl text-pink-600 font-semibold text-center'>No Products Found</p></div>))}
        </div>
    </div>
  )
}

export default Products