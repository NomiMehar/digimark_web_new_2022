import React from 'react'
import style from "./ProductBenefits.module.scss";
import productBenefits from './ProductBenefits.json'
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
export default function ProductBenefits() {
  return (
    <>
    <div className={style.product_benefits}>
        <div className='container'>
            <div className="main_section_title">
              <h2>
              <span>Benefits of Product Design Services</span>
              </h2>
            </div>
            <div className={style.benefits}>
              <ul className='list-none flex flex-wrap'>
              {productBenefits.map(({title,para},index)=>{
                return(
                  <li className='flex direction-column' key={index}>
                  <h4>{title}</h4>
                  <p>{para}</p>
                  </li>
                )
              })}
              </ul>
            </div>
            <div className={`flex items-center ${style.benefits_cta}`}>
                <h4>We'd love to help with your product</h4>
                <Link href="#" className={`contact_btn ${style.contact_btn}`}>Let’s get started <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
            </div>
        </div>

    </div>
    </>
  )
}
