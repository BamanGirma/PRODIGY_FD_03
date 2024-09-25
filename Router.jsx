import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Landing from './src/Components/Pages/Landing/Landing'
import SignUp from './src/Components/Pages/Auth/SignUp'
import Payment from './src/Components/Pages/Payment/Payment'
import Orders from './src/Components/Pages/Orders/Orders'
import Cart from './src/Components/Pages/Cart/Cart'
import Results from './src/Components/Pages/Results/Results'
import ProductDetail from './src/Components/Pages/ProductDetail/ProductDetail'
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<SignUp/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='orders' element={<Orders/>}/>
        <Route path='category/:categoryName' element={<Results/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default Routing