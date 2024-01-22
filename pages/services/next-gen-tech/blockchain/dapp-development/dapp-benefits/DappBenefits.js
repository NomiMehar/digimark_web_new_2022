import style from "./dappBenefits.module.scss"
import dappBenefitsList from "./dappBenefitsList.json"
import React, {useEffect} from "react";
import AOS from 'aos';
export default function DappBenefits() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.benefit_wrapper}>
            <div className="container">
                <div className={style.benefit_content_wrapper} data-aos="fade-up" data-aos-duration="2000">
                    <h2><span>Benefits</span> of dApp Development <br/>for Your Business</h2>
                    <p><span>DApps</span>, or decentralized applications, are <span>open-source applications</span> that are underpinned by smart contracts and operate on a <span>peer-to-peer network</span> of servers. These applications pivot around various blockchains – such as <span>Ethereum, Binance Smart Chain (BSC), Solana, EOS,</span> and more.</p>
                    <p>DApps do not rely on central servers, which mitigates the risk of failure and makes them more reliable compared to traditional applications. By eliminating the middleman, dApps enable greater <span>transparency, freedom, and security,</span> thereby redefining processes. This had led to the growing popularity of Ethereum DApp development, Binance Smart Chain dApp development, EOS dApp development, and more.</p>
                    <p>At <span>DigiMark Developers,</span> we create a harmonious trifecta of our technical prowess, blockchain expertise, and deep domain knowledge to <span>deliver secure, scalable, and trustless dApps</span> across industries. We harness different blockchains like Ethereum, EOS, BSC, Polkadot, and more to build customized dApps that align with your business needs and enable you to penetrate the market with an impact.</p>
                </div>
                <div className={style.benefit_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            dappBenefitsList.map(({title, description},index)=>{
                                return(
                                    <li key={index} data-aos="flip-right" data-aos-duration="2000">
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}