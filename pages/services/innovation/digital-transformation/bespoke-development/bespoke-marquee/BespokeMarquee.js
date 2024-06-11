import React from 'react'
import style from './BespokeMarquee.module.scss'

export default function BespokeMarquee(props) {
  return (
    <>
     <div className={` ${style[props.classes]} ${style.marquee}`} >
        <marquee direction="left" scrollamount="4" loop="true">
        <span className={style.outline}>Bespoke</span> <span className={style.fill}>Bespoke</span> <span className={style.outline}>Bespoke</span> <span className={style.fill}>Bespoke</span><span className={style.outline}>Bespoke</span> <span className={style.fill}>Bespoke</span> <span className={style.outline}>Bespoke</span> <span className={style.fill}>Bespoke</span>
        </marquee>
        <marquee direction="right" scrollamount="3" loop="true">
        <span className={style.outline}>DEVELOPMENT</span> <span className={style.fill}>DEVELOPMENT</span> <span className={style.outline}>DEVELOPMENT</span> <span className={style.fill}>DEVELOPMENT</span><span className={style.outline}>DEVELOPMENT</span> <span className={style.fill}>DEVELOPMENT</span> <span className={style.outline}>DEVELOPMENT</span> <span className={style.fill}>DEVELOPMENT</span>
        </marquee>
        </div>
    </>
  )
}
