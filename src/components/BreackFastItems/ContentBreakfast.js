import React from 'react';
import BreakfastData from './BreakfastData';
import Breakfast from './Breakfast';
export default function ContentBreakfast() {
  console.log(BreakfastData, "breakfast data coming");
  return (
    <div className='breakcont'>

         {
           BreakfastData.map((breakfastprod)=>{
             return(
               <Breakfast
               key={breakfastprod.id}
               name={breakfastprod.name}
               id={breakfastprod.id}
               price={breakfastprod.price}
               weight={breakfastprod.weight}
               image={breakfastprod.image}
               countInStock={breakfastprod.countInStock}/>
             )
           })
         }

    </div>
  )
}

