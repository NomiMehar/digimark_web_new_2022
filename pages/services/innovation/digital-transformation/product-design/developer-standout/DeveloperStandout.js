import React from 'react'
import style from "./DeveloperStandout.module.scss";
import developerStandout from './DeveloperStandout.json'
import principle from './Principles.json'
import Image from 'next/image';
export default function DeveloperStandout() {
  return (
    <div className={style.developer_standout}>
      <div className={style.standout_inner}>
         <div className={`main_section_title white_title ${style.title}`}>
          <h2>
          What makes Digi<span>Mark</span> Developers stand out
          </h2>
        </div>
        <div className={style.standout_services}>
          <ul className='list-none flex flex-wrap'>
          {developerStandout.map(({title,para},index)=>{
            return(
              <li className='flex direction-column' key={index}>
              <h4>{title}</h4>
              <p>{para}</p>
              </li>
            )
          })}
          </ul>
        </div>
        <span className={style.line}></span>
        <div className={style.principle}>
          <h5>Our Principles</h5>
          <ul className='list-none flex flex-wrap'>
          {principle.map(({title,lineBox},index)=>{
            return(
              <li className='flex direction-column' key={index}>
              <div className={style.card}>
              <h4>{title}</h4>
              <Image src={lineBox} alt={lineBox} width={32} height={29}/>
              </div>
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    </div>
  )
}
