import React,{useState,useEffect} from 'react'
import {rows} from './data'
// import ProductCard from './ProductCard'
import RowCard from './RowCard'
import './row.css'
function Row() {
   
  return (
    <div>
        <section className='row-grid'>
          {
            rows.map((row,i) => (
              <RowCard
              key={i}
              title={row.title}
              img={row.img}
              linkText ={row.linkText}
              />
            ))
          }
        </section>
    </div>
  )
}

export default Row