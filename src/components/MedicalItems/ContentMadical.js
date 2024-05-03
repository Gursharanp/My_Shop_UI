import React from 'react';
import Madical from './Madical';
import MadicalData from './MadicalData'
export default function ContentMadical() {
    return <div className='Madicalcont'>

    {
      MadicalData.map((breakfastprod)=>{
        return(
          <Madical
          key={breakfastprod.id}
          name={breakfastprod.name}
          id={breakfastprod.id}
          price={breakfastprod.price}
          image={breakfastprod.image}
          countInStock={breakfastprod.countInStock}/>
        )
      })
    }
  
  </div>
}
