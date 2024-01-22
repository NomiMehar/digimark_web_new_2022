import style from "./nftProcess.module.scss"
import React,{useEffect} from "react";
import AOS from 'aos';

export default function NftProcess() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap ${style.nft_process}`}>
            <div className="container">
                <div className="section_title white" data-aos="fade-right"
                    data-aos-duration="2000">
                    <h2>Our NFT development processes</h2>
                </div>
                <div className={`${style.nft_process_text}`}>
                    <section data-aos="fade-left"
                    data-aos-duration="2000">
                        <span><small>1</small> In-depth analysis and asset data collection</span>
                    </section>
                    <section className={style.left_section} data-aos="fade-up"
                    data-aos-duration="2000">
                        <p>We focus on a vertical market instead of a horizontal one. This helps us to ensure the final service will match the latest requirements and expectations of a certain category of targeted audience.</p>
                    </section>
                    <section className={style.right_section}>
                        <ul className="list-none">
                            <li  data-aos="fade-right"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
                                <span><small>2</small> Determination of uniqueness and valubality of content</span>
                                <p>After collecting needed information, we plan a unique strategy to guarantee your platform will differ from others with only valuable and original content.</p>
                            </li>
                            <li  data-aos="fade-left"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
                                <span><small>3</small> Design</span>
                                <p>This is a vital part that is performed by best UX/UI designers that ensure top-notch design and fascinating interface for outstanding user experience.</p>
                            </li>
                            <li data-aos="fade-right"
                    data-aos-duration="2000">
                                <span><small>4</small> Development</span>
                                <p>Here we select the framework that will fit your goals best of all. We also involve only experienced developers with in-depth knowledge of ERC-721 and ERC-1155 standards, as well as IPFS protocols.</p>
                            </li>
                            <li data-aos="fade-left"
                    data-aos-duration="2000">
                                <span><small>5</small> Launch & Support</span>
                                <p>Once rigorous testing is done and we get your agreement, we launch the final product that will overcome competitors and grow your business.</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}