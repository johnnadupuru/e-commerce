import { useState,lazy,Suspense } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
const Home=lazy(()=>import('./components/Home/Home'))
const Products=lazy(()=>import("./components/Products/Products"))
const Cart=lazy(()=>import("./components/Cart/Cart"))
const Item=lazy(()=>import("./components/Item/Item"))

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <Suspense>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/item/:id" element={<Item/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
