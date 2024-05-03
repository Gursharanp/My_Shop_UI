import React from 'react';
import { Link } from 'react-router-dom';
import {SliderData} from '../SliderItems/SliderData';
import styles from '../../style/Content.module.css'
import ImageSlider from '../SliderItems/ImageSlider'
import ContentBreakfast from '../BreackFastItems/ContentBreakfast';
import ContentFruits from '../FruitsItems/ContentFruits';
import ContentMadical from '../MedicalItems/ContentMadical';
import FruitsSing from '../FruitItemsSinglepage/FruitsSing';
export default function Content() {
  return ( 
  
  
  <div className={styles.main}>
      <div className={styles.offerimg}>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,h=220/layout-engine/2022-01/Group-25220.png?61f0a96417f64"/>
          </div> 
      <div className={styles.p1img}>
          <div className='dpimg'>
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=321,h=200/layout-engine/2022-01/ice-cream-25.jpg?61f0bbd5cabf2" />
          </div>
          <div className='dpimg'>
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=321,h=200/layout-engine/2022-01/covid-not-over.jpg?61f0bbd6a1cbe" />
          </div>
          <div className='dpimg'>
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=321,h=200/layout-engine/2021-12/dry-fruits.png?61f0bbdd92ee8" />
          </div>
          <div className='dpimg4'>
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=321,h=200/layout-engine/2021-12/repllents.png?61f0bbdecfafb" />
          </div>
      </div>
      <div className={styles.slides}>
          <ImageSlider slides={SliderData}/>
      </div>
      <div className={styles.p1}>
          <div className={styles.text1}>
             <Link to='/FruitsSing'> <div className={styles.tt1}> fruits & vegetables </div></Link>
              <div className={styles.tt2}>eat fresh,stay healthy</div>
          </div>
          <ContentFruits/>
      </div>
      <div className={styles.p2}>
          <div className={styles.text2}>

              <div className={styles.tt1}> chemist store </div>
              <div className={styles.tt2}>get pain relievers,dettol and more</div>
          </div>
          <ContentMadical/>
      </div>
      <div className={styles.p3}>
          <div className={styles.text3}>
              <div className={styles.tt1}> breakfast & dairy </div>
              <div className={styles.tt2}>butter ,cheese, milk, curd and more</div>
        </div>
        <ContentBreakfast/>
      </div>
  </div>
  
  )

}
