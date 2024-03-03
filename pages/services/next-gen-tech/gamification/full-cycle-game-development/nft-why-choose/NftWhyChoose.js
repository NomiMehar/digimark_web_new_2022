import React,{useEffect} from "react";
import style from "./nftWhyChoose.module.scss"
import Image from "next/image";
import chooseImage from "../../../../../../public/assets/images/services/whyChoose.png"
import nftWhyChooseList from "./NftWhyChooseList.json"
import AOS from 'aos';

export default function NftWhyChoose(props) {
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
                    {
                        props.description === true ? <p>Being one of the leading NFT Marketplace Companies, we have helped over 200 clients by delivering them solutions that accelerated their growth.</p> : <p>{props.description}</p>
                    }
                    <ul className="list-none">
                        {
                            nftWhyChooseList.map(({listItems},index)=>{
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