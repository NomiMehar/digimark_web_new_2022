// import style from "./enterpriseServices.module.scss"

// export default function EnterpriseServices(props) {
//     return(
//         <div className={` ${style[props.extraClass]} ${style.enterprise_services_wrap}`}>
//             <div className="container">
//                 <div className={`flex ${style.section_title_wrap}`}  data-aos="fade-up" data-aos-duration="1000">
//                     {props.etitle}
//                     <p>{props.edescription}</p>
//                 </div>
//                 <div className={style.enterprise_services}>
//                     <ul className="list-none flex flex-wrap">
//                         {
//                             props.enterpriseServicesList.map(({title,description},index)=>{
//                                 return(
//                                     <li key={`serv-${index}`}>
//                                         <section>
//                                             <span></span>
//                                             <h3>{title}</h3>
//                                             <p>{description}</p>
//                                         </section>
//                                     </li>
//                                 )
//                             })
//                         }
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }