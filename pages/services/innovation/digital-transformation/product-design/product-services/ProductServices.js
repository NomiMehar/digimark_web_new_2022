import React, {useEffect} from "react";
import style from "./ProductServices.module.scss";
import productServices from './ProductServicesList.json'
import Image from "next/image";
import AOS from 'aos';

export default function ProductServices (props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
       <>
       <div className={style.product_services}>
        <div className="container">
        <div className={`flex items-center ${style.services}`}>
        <div className={style.video_section}>
        <video className={style.process_video} autoPlay loop muted>
        <source src="/assets/images/services/loopVideo.mp4" type="video/mp4" />
        </video>
        <Image className={style.linkdin} src="/assets/images/services/linkdin.svg" width={20} height={20} alt="linkdin"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="83" height="124" viewBox="0 0 83 124" fill="none">
                <g clip-path="url(#clip0_3096_203)">
                    <path d="M20.578 123.469C26.035 123.466 31.2678 121.298 35.1265 117.439C38.9852 113.58 41.1539 108.347 41.156 102.891V82.3125H20.578C15.1204 82.3125 9.88628 84.4805 6.02716 88.3397C2.16803 92.1988 0 97.4329 0 102.891C0 108.348 2.16803 113.582 6.02716 117.441C9.88628 121.3 15.1204 123.469 20.578 123.469Z" fill="#0ACF83"/>
                    <path d="M0 61.7343C0.00212024 56.2773 2.17083 51.0444 6.0295 47.1857C9.88816 43.3271 15.121 41.1584 20.578 41.1562H41.156V82.3123H20.578C15.121 82.3101 9.88816 80.1414 6.0295 76.2827C2.17083 72.4241 0.00212024 67.1912 0 61.7343Z" fill="#A259FF"/>
                    <path d="M0 20.578C0.00212024 15.121 2.17083 9.88816 6.0295 6.0295C9.88816 2.17083 15.121 0.00212024 20.578 0L41.156 0V41.156H20.578C15.121 41.1539 9.88816 38.9852 6.0295 35.1265C2.17083 31.2678 0.00212024 26.035 0 20.578Z" fill="#F24E1E"/>
                    <path d="M41.1562 0H61.7343C67.1919 0 72.426 2.16803 76.2851 6.02716C80.1442 9.88628 82.3123 15.1204 82.3123 20.578C82.3123 26.0356 80.1442 31.2697 76.2851 35.1288C72.426 38.988 67.1919 41.156 61.7343 41.156H41.1562V0Z" fill="#FF7262"/>
                    <path d="M82.3123 61.7343C82.3123 65.8042 81.1054 69.7827 78.8442 73.1668C76.5831 76.5508 73.3693 79.1884 69.6091 80.7458C65.849 82.3033 61.7114 82.7109 57.7197 81.9169C53.7279 81.1228 50.0613 79.163 47.1834 76.2851C44.3055 73.4072 42.3457 69.7406 41.5517 65.7488C40.7577 61.7571 41.1652 57.6195 42.7227 53.8594C44.2802 50.0993 46.9177 46.8854 50.3017 44.6243C53.6858 42.3631 57.6643 41.1563 61.7343 41.1562C67.1912 41.1584 72.4241 43.3271 76.2828 47.1857C80.1414 51.0444 82.3101 56.2773 82.3123 61.7343Z" fill="#1ABCFE"/>
                </g>
                <defs>
                    <clipPath id="clip0_3096_203">
                        <rect width="82.313" height="123.469" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div className={style.service_headings}>
        <div className={`main_section_title white_title ${style.title}`}>
        <span>Our services</span>
        <h2>Maxmise your returns</h2>
        <p>Improved usability. More leads. Sales growth. Business process automation. We help clients grow.</p>
        <Image className={style.xd} src="/assets/images/services/xd.svg" width={20} height={20} alt="xd"/>
        </div>
        <ul className='list-none flex flex-wrap'>
          {productServices.map(({title},index)=>{
            return(
              <li className='flex direction-column' key={index}>
             <p>{title}</p>

              </li>
            )
          })}
          </ul>
        </div>
        </div>
        </div>
        <div className={style.marquee}>
        <marquee direction="left" scrollamount="6" loop="true">
<span className={style.outline}>User Reach</span> <span className={style.outline}>User Experience Design</span> <span className={style.outline}>Customer Journey Mapping</span> <span className={style.outline}>Website Design</span>
</marquee>
<marquee direction="right" scrollamount="6" loop="true">
<span className={style.outline}>User Reach</span> <span className={style.outline}>User Experience Design</span> <span className={style.outline}>Customer Journey Mapping</span> <span className={style.outline}>Website Design</span>
</marquee>
<marquee direction="left" scrollamount="6" loop="true">
<span className={style.outline}>User Reach</span> <span className={style.outline}>User Experience Design</span> <span className={style.outline}>Customer Journey Mapping</span> <span className={style.outline}>Website Design</span>
</marquee>
<marquee direction="right" scrollamount="6" loop="true">
<span className={style.outline}>User Reach</span> <span className={style.outline}>User Experience Design</span> <span className={style.outline}>Customer Journey Mapping</span> <span className={style.outline}>Website Design</span>
</marquee>
<marquee direction="left" scrollamount="6" loop="true">
<span className={style.outline}>User Reach</span> <span className={style.outline}>User Experience Design</span> <span className={style.outline}>Customer Journey Mapping</span> <span className={style.outline}>Website Design</span>
</marquee>
        </div>
       </div>
       </>
    );
};