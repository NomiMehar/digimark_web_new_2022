import React from 'react'
import style from "./ProductDesigning.module.scss";
import productDesigning from './ProductDesigning.json'
import Image from 'next/image';
export default function ProductDesigning() {
  return (
    <>
    <div className={style.product_designing}>
        <div className='container'>
        <div className={`main_section_title ${style.title}`}>
          <h2>Tools that we use in <span>Product Designing</span>
          </h2>
        </div>
        <div className={style.designing}>
          <ul className='list-none flex flex-wrap'>
          {productDesigning.map(({lineBox},index)=>{
            return(
              <li className='flex direction-column' key={index}>
              <Image src={lineBox} alt={lineBox} width={32} height={29}/>
              </li>
            )
          })}
          </ul>
        </div>
        </div>
    </div>
    </>
  )
}
