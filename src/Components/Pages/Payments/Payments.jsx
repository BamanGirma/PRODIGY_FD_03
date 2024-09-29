import React, { useContext, useState } from "react";
import Layout from "../../Layout/Layout";
import classes from "./payment.module.css";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../../../Utility/firebase";
import {useNavigate} from 'react-router-dom'
import { Type } from "../../../../Utility/action.type";
function Payments() {
  const [{ user, basket },dispatch] = useContext(DataContext);

  // to get total amount of items
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  // to get total amount of price
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  
  const [cardError, setCardError] = useState(null);
  const [processing,setProcessing]=useState(false)

  const handleChange = (e) => {
    e?.error?.message ? setCardError(e.error.message) : setCardError();
  };

 const handlePayment = async (e) => {
   e.preventDefault();
   try {
    setProcessing(true)
     // 1. Request client secret from backend
     const response = await axiosInstance.post(
       `/payment/create?total=${total * 100}`
     );

     // Notice the capitalization change here
     const clientSecret = response.data?.ClientSecret; // Make sure to match the correct key
      console.log("clientSecret: ",clientSecret);
     // 2. Confirm the payment using the client secret
     const {paymentIntent}= await stripe.confirmCardPayment(clientSecret, {
       payment_method: {
         card: elements.getElement(CardElement), // Correctly retrieve CardElement
       },
     });

// 3.after confirmation -->order firestore database save,clear basket
console.log(paymentIntent);
await db.collection("users").doc(user.uid).collection("order").doc(paymentIntent.id).set({
  basket:basket,
  amount:paymentIntent.amount,
  created:paymentIntent.created,

})
      // empty the basket
      dispatch({
        type:Type.EMPTY_BASKET
      })

      setProcessing(false)
      navigate("/orders",{
        state:{
          msg:"You have placed new Order "
        }
      })
   
   } catch (error) {
     console.error("Error during payment:", error);
     setProcessing(false)
   }
 };








  return (
    <Layout>
      {/* header */}
      <div className={classes.payment__header}>
        Checkout ({totalItem}) items
      </div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Addis Ababa</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment} >
                {/* error */}
                {cardError && (
                  <small
                    style={{
                      color: "red",
                    }}
                  >
                    {cardError}
                  </small>
                )}
                {/* card */}
                <CardElement onChange={handleChange} />

                {/* price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{display:"flex",gap:"10px"}}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button 
                  type="submit"
                  >
                    
                    {
                      processing ? 
                      (<div className={classes.loading}>
                        <ClipLoader
                        color="grey" size={12}/>
                        <p>Please Wait...</p>
                      </div>):"Pay Now"
                    }
                    
                    
                    
                    
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payments;
