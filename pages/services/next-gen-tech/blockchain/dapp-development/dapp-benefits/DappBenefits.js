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
                    <p>DigiMark Developers provides the best <span>Dapp Development</span> Services to help businesses build strong and scalable applications that operate on peer-to-peer networks. However, these applications leverage multiple platforms of blockchain such as <span>Binance, Ethereum, EOS, Solana,</span> and other technologies.</p>
                   <p>DApps do not rely on central servers, which mitigates the risk of failure and makes them more reliable compared to traditional applications. By eliminating the middleman, <span>dApp Development</span> Service enables greater transparency, freedom, and security, thereby redefining processes. This has led to the growing popularity of <span>Ethereum DApp development</span>, Binance Smart Chain dApp development, EOS dApp development, and more.</p>
                   <p>Being a <span>Dapp Development</span> Company we create a harmonious trifecta of our technical prowess, blockchain expertise, and deep domain knowledge to deliver <span>secure, scalable, and trustless</span> dApps across industries. We harness different blockchains like Ethereum, EOS, BSC, Polkadot, and more to build customized dApps that align with your business needs and enable you to penetrate the market with an impact.</p>
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