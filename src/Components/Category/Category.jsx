import React,{useState,useEffect} from 'react'
import {categoryInfo} from "./data";
import CategoryCard from './CategoryCard';
import "./category.css"
function Category(){
    const[categoryData,setCategorydata] = useState([])

    useEffect(() =>{
        setCategorydata(categoryInfo)
    },[]);

    return (
      <section className="category-grid">
        {categoryData.map((categoryInfo, i) => (
          <CategoryCard
            key={i}
            title={categoryInfo.title}
            name={categoryInfo.name}
            items={categoryInfo.items}
            linkText={categoryInfo.linkText}
          />
        ))}
      </section>
    );
    
};

export default Category