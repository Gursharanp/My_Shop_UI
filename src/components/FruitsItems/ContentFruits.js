import React from 'react';
import Fruits from './Fruits';
import FruitsData from './FruitsData';
export default function ContentFruits() {
  return <div className='Fruitcont'>

  {
    FruitsData.map((breakfastprod)=>{
      return(
        <Fruits
        key={breakfastprod.id}
        name={breakfastprod.name}
        id={breakfastprod.id}
        price={breakfastprod.price}
        image={breakfastprod.image}
        countInStock={breakfastprod.countInStock} />
      )
    })
  }

</div>
}
