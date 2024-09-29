import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Landing from './src/Components/Pages/Landing/Landing'
import Orders from './src/Components/Pages/Orders/Orders'
import Cart from './src/Components/Pages/Cart/Cart'
import Results from './src/Components/Pages/Results/Results'
import ProductDetail from './src/Components/Pages/ProductDetail/ProductDetail'
import Payments from './src/Components/Pages/Payments/Payments'
import Auth from './src/Components/Pages/Auth/Auth'
import ProtectedRoute from './src/Components/ProtectedRoute/ProtectedRoute'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Q3Fza02N8MRvGrHnQuirz9vWIMOSyOe75CXucY9xXVmRfCX5u4EqfDLMTkRSPi98lidT0QTXpZ6BZoP0Ywre0dF00EISQmPWS"
);

function Routing() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute msg={"You Must login to pay"} redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payments />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route path="orders" element={
          <ProtectedRoute msg={"You Must login to access your orders"} redirect={"/orders"}>
              <Orders />
            </ProtectedRoute>
          
          
          } />
        <Route path="category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing