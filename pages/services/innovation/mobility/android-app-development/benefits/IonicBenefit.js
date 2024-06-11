import style from "./Benefits.module.scss";
import webTeam from "../../../../../../public/assets/images/services/ionic1.svg"
import Image from "next/image";
import AOS from 'aos';
import {useEffect} from "react";

export default function IonicBenefit () {
    useEffect(() => {
        AOS.init();
    },[]);
    return(
        <div className={`flex direction-columns ${style.ionic_benefit}`}>
            <div className="container">
                <div className={style.ionic_benefit_content}>
                    <h2 data-aos="fade-up" data-aos-duration="1000">Ionic Approach</h2>
                    <button data-aos="fade-up" data-aos-duration="1000" className={style.ionic_btn}>Development Project</button>
                    <ul data-aos="fade-up" data-aos-duration="1000" className="list-none flex items-center justify-center">
                        <li>
                            <div className={`${style.ionic_boxes_wrap} ${style.active}`}>
                                <Image src={webTeam} alt={webTeam} width={58} height={58}/>
                                <h3>Web Team</h3>
                            </div>
                        </li>
                    </ul>
                    <ul className={`list-none flex justify-center ${style.bg_wrap}`}>
                        <li data-aos="fade-down" data-aos-duration="1000">
                            <div className={style.ionic_boxes_wrap}>
                                <Image src={webTeam} alt={webTeam} width={58} height={58}/>
                                <h3>Web Team</h3>
                            </div>
                        </li>
                        <li data-aos="fade-down" data-aos-duration="1000">
                            <div className={style.ionic_boxes_wrap}>
                                <Image src={webTeam} alt={webTeam} width={58} height={58}/>
                                <h3>Web Team</h3>
                            </div>
                        </li>
                        <li data-aos="fade-down" data-aos-duration="1000">
                            <div className={style.ionic_boxes_wrap}>
                                <Image src={webTeam} alt={webTeam} width={58} height={58}/>
                                <h3>Web Team</h3>
                            </div>
                        </li>
                        <li data-aos="fade-down" data-aos-duration="1000">
                            <div className={style.ionic_boxes_wrap}>
                                <Image src={webTeam} alt={webTeam} width={58} height={58}/>
                                <h3>Web Team</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}