// import React from "react";
// import style from "./gameProcess.module.scss";
// import Image from "next/image";

// export default function GameProcess(props) {
//   return (
//     <div className={` ${style[props.extraClass]} ${style.services_process}`}>
//         <div className="container">
//             <div className={`section_title`}>
//                 {props.gtitle}
//                 <p>{props.gdescription}</p>
//             </div>
//             <div className={style.services_process_text}>
//                 <ul className="list-none flex flex-wrap">
//                     {
//                         props.gameProcessList.map(({img,title},index)=>{
//                             return(
//                                 <li key={index}>
//                                     <figure><Image width={100} height={100} src={img} alt="image1"/></figure>
//                                     <section>
//                                         <h3>{title}</h3>
//                                         <span>0{index+1}</span>
//                                     </section>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         </div>
//     </div>
//   )
// }

import React from 'react'

function GameProcess() {
  return (
    <div>
      
    </div>
  )
}

export default GameProcess
