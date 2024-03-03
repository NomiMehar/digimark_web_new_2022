import React from 'react'
import style from './BespokeSolution.module.scss'
import bespokeSolutionList from './BespokeSolutionList.json'
import Image from 'next/image'

export default function BespokeSolution() {
    return (
        <>
            <div className='container'>
                <div className={style.bespoke_solution} >
                    {/*<Image className={style.solutionImg} src="/assets/images/services/bespoke_solution.svg" width={100} height={100} />*/}
                    
                    <div className={style.title} data-aos="fade-right" data-aos-duration="2000">
                        <small>Our benefits </small>
                        <h4>Why Do You Need Bespoke Software Solutions ? </h4>
                    </div >
                    <div className={style.bespoke_reason} data-aos="fade-top" data-aos-duration="2000">
                        <p>Bespoke software development services offer authority over products, making it an ideal choice for those seeking to captivate customers with the best solutions.</p>
                    </div>
                    <ul className='flex flex-wrap list-none'>
                        {bespokeSolutionList.map(({img,description},index)=>{
                            return(
                                <li key={index} data-aos="fade-top" data-aos-duration="2000">
                                    <Image src={img} width={100} height={100} />
                                    <p><span>{description.split(":")[0]}: </span>{description.split(":")[1]}</p>
                                </li>
                            )
                        })}
                    </ul>
                        <span data-aos="fade-right" data-aos-duration="2000">Our company excels in bespoke software development, leveraging skills & expertise to create a distinctive solution that unlocks numerous advantages for businesses.</span>
                </div>
            </div >
        </>
    )
}