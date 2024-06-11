// import style from "./unityWorkBox.module.scss"
// import Image from "next/image";

// export default function UnityWorkBox(props) {
//     return(
//         <>
//             <div className={` ${style[props.extraClass]} ${style.unity_work_box}`}>
//                 <div className="container">
//                     <div className={`section_title white ${style.section_title}`}>
//                         {props.utitle}
//                     </div>
//                     <div className={style.unity_work_text}>
//                         <ul className="list-none flex flex-wrap">
//                             {
//                                 props.unityWorkBoxList.map(({unityImage,unityTitle,unityDescription},index)=>{
//                                     return(
//                                         <li key={index}>
//                                             <section>
//                                                 {unityImage ? <Image width={70} height={70} src={unityImage} alt="unityImage"/> : null}
//                                                 <h3>{unityTitle}</h3>
//                                                 <p>{unityDescription}</p>
//                                             </section>
//                                         </li>
//                                     )
//                                 })
//                             }
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React from 'react'

function UnityWorkBox() {
  return (
    <div>
      
    </div>
  )
}

export default UnityWorkBox
