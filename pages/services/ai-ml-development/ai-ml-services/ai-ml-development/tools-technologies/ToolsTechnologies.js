import React from 'react'
import Image from 'next/image'
import style from './ToolsTechnologies.module.scss'

export default function ToolsTechnologies(props) {
  return (
    <div className={`${style.tools_technologies} ${style[props.classes]}`}>
        <div className='container'>
            <div className="section_title white" data-aos="fade-up" data-aos-duration="2000">
                <h2>Technology Stack Our <span>AI ML Experts</span> are Proficient In</h2>
                <p>To create state-of-the-art solutions, our AI & ML Development professionals skillfully leverage a comprehensive technology stack that includes cloud platforms like AWS and Google Cloud, Python, TensorFlow, PyTorch, and Keras. </p>
            </div>
            {
                props.toolsTechnologiesList?.map(({techTitle,techIcons}, index)=>{
                    return(
                        <div key={index} data-aos="fade-up"
                             data-aos-easing="ease-in-sine"
                             data-aos-duration="1000"
                             className={`${style.tech_boxes}`}
                        >
                            <h3>{techTitle}</h3>
                            <div className={`flex flex-wrap direction-column justify-center items-center`}>
                                <ul className="flex list-none">
                                    {
                                        techIcons.map(({iconImage},index)=>{
                                            return (
                                                <li className="flex items-center direction-column" key={`icons-${index}`}>
                                                    <figure>
                                                        <Image src={iconImage} alt={iconImage} width={166} height={71} />
                                                    </figure>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
