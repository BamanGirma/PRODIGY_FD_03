import React from 'react'
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';
function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo container */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/* delivery container*/}
            <div className={classes.delivery}>
              <span>
                <CiLocationOn />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search container */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search product" />
            <IoSearchOutline size={25} />
          </div>

          {/* order container */}
          <div className={classes.order__container}>
            <Link href="" className={classes.language}>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}
            <Link href="">
              <div>
                <p>Hello,sign in</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              {/* icon */}
              <BiCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header