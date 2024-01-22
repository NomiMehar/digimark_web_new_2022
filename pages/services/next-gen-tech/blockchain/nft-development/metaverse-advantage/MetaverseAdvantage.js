import React,{useEffect} from "react";
import style from "./MetaverseAdvantage.module.scss"
import Image from "next/image";
import chooseImage from "../../../../../../public/assets/images/services/meta_advantage.png"
import metaverseAdvantageList from "./MetaverseAdvantageList.json"
import AOS from 'aos';

export default function MetaverseAdvantage(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex direction-column flex-wrap nft_why_choose ${style[props.classes]} ${style.nft_why_choose}`}>
            <div className="container flex">
                <Image src={chooseImage} alt={chooseImage} data-aos="fade-left"
                    data-aos-duration="2000" />
                <div className={`${style.nft_why_choose_text}`} data-aos="fade-right"
                    data-aos-duration="2000">
                    <h2>Why Choose Us</h2>
                    <p>DigiMark Developers is proud to announce the launch of the Women’s Empowerment Initiative; an initiative</p>
                    <ul className="list-none">
                        {
                            metaverseAdvantageList.map(({listItems},index)=>{
                                return(
                                    <li key={`choose-${index}`}>{listItems}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}