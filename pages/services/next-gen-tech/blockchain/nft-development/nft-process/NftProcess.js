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
                        <p>We customize our services to surpass their distinct needs and expectations. This strategy enables us to deliver unmatched value to clients and differentiate ourselves in the market.</p>
                    </section>
                    <section className={style.right_section}>
                        <ul className="list-none">
                            <li  data-aos="fade-right"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
                                <span><small>2</small> Determination of uniqueness and valubality of content</span>
                                <p>With our comprehensive research and analysis, we devise a tailored approach to ensure your platform stands out with exclusive and meaningful content.</p>
                            </li>
                            <li  data-aos="fade-left"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
                                <span><small>3</small> Design</span>
                                <p>Our skilled and dedicated designers focus on creating visually appealing designs and user-friendly interfaces that enhance the overall user experience.</p>
                            </li>
                            <li data-aos="fade-right"
                    data-aos-duration="2000">
                                <span><small>4</small> Development</span>
                                <p>Our experienced team selects the optimal framework, working closely with proficient developers knowledgeable in ERC-721, ERC-1155, and IPFS protocols.</p>
                            </li>
                            <li data-aos="fade-left"
                    data-aos-duration="2000">
                                <span><small>5</small> Launch & Support</span>
                                <p>With thorough testing and your approval in place, we unveil the final product that outshines competitors and propels your business forward.</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}