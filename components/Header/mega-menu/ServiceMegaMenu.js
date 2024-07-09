import style from "./megaMenu.module.scss";
import Link from "next/link";
import Image from "next/image";
import headerIcon1 from "../../../public/assets/images/header/innovation.svg";
import headerIcon2 from "../../../public/assets/images/header/growth.svg";
import headerIcon3 from "../../../public/assets/images/header/nextgen.svg";
import { useState } from "react";

export default function ServiceMegaMenu(props) {
  const [activeId, setActiveId] = useState(0);

  const handleMouseEnter = () => {
    document.body.classList.add('hovered');
  };

  const handleMouseLeave = () => {
    document.body.classList.remove('hovered');
  };

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <ul className={`list-none ${style.mega_menu_wrapper}`}>
      <li className="flex">
        <Link 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={activeId === 0 ? `${style.active}` : null}
          onClick={() => handleClick(0)}
          href="#">
          <Image src={headerIcon1} alt="Innovation" width={31} height={35} />
          Innovation
        </Link>
        <div onClick={props.onClick} className={`flex ${style.mega_sub_menu}`}>
          <section>
            <span className={style.nav_title}>Mobility</span>
            <ul className="list-none">
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/mobility/mobile-development">Mobile Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/mobility/android-app-development">Android App Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/mobility/android-ios-development">IOS App Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/mobility/react-native-development">React Native App</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/mobility/ionic-development">Ionic Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/support">Support & Maintenance</Link></li>
            </ul>
          </section>
          <section>
            <span className={style.nav_title}>Digital Transformation</span>
            <ul className="list-none">
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/digital-transformation/web-development">Web App Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/digital-transformation/bespoke-development">Bespoke Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/digital-transformation/saas-development">SAAS Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/digital-transformation/mvp-development">MVP Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/digital-transformation/product-development">Product Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/digital-transformation/cloud-devops">Cloud & DevOps</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/digital-transformation/product-design">Product Design</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/digital-transformation/quality-assurance">QA & Testing</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/digital-transformation/enterprise-software-development">Enterprise Software Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/innovation/digital-transformation/support-maintenance">Support & Maintenance</Link></li>
            </ul>
          </section>
        </div>
      </li>
      <li className="flex">
        <Link 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={activeId === 2 ? `${style.active}` : null}
          onClick={() => handleClick(2)}
          href="#">
          <Image src={headerIcon3} alt="Next-Gen Tech" width={31} height={35} />
          Next-Gen Tech
        </Link>
        <div onClick={props.onClick} className={`flex ${style.mega_sub_menu}`}>
          <section>
            <span className={style.nav_title}>Blockchain</span>
            <ul className="list-none">
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/blockchain/blockchain-development">Blockchain Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/blockchain/nft-development">NFT Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/blockchain/nft-marketplace">NFT Marketplace</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/blockchain/smart-contract-development">Smart Contract</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/blockchain/metaverse-development">Metaverse Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/blockchain/ar-vr-development">AR & VR</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/blockchain/defi-developement">DeFi Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/blockchain/dapp-development">DApp Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/blockchain/tokens-and-crypto-wallets">Tokens & Crypto Wallets</Link></li>
            </ul>
          </section>
          <section>
            <span className={style.nav_title}>Gamification</span>
            <ul className="list-none">
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/gamification/mobile-game-development">Mobile Game Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/gamification/pc-game-development">PC Game Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/gamification/2d-3d-game-development">2D/3D Game Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/gamification/unreal-game-development">Unreal Engine Game Dev</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/gamification/unity-game-development">Unity Game Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/gamification/ar-vr-mr-game-development">AR/VR & MR Game Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/gamification/ai-game-development">AI Game Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/gamification/nft-game-development">NFT Game Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/gamification/blockchain-game-development">Blockchain Game Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/gamification/metaverse-game-development">Metaverse Game Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/next-gen-tech/gamification/full-cycle-game-development">Full Cycle Game Development</Link></li>
            </ul>
          </section>
        </div>
      </li>
      <li className="flex">
        <Link 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={activeId === 3 ? `${style.active}` : null}
          onClick={() => handleClick(3)}
          href="#">
          <Image src={headerIcon2} alt="AI & ML" width={31} height={35} />
          AI & ML
        </Link>
        <div onClick={props.onClick} className={`flex ${style.mega_sub_menu}`}>
          <section>
            <span className={style.nav_title}>AI & ML Development</span>
            <ul className="list-none">
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/ai-ml-development/ai-ml-services/generative-ai-development">Generative AI Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/ai-ml-development/ai-ml-services/ai-ml-development">AI & ML Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/ai-ml-development/ai-ml-services/data-engineering-services">Data Engineering Services</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/ai-ml-development/ai-ml-services/ai-consulting">AI Consulting</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/ai-ml-development/ai-ml-services/ai-poc-mvp">AI PoC and AI MVP</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/ai-ml-development/ai-ml-services/chatbot-development">Chatbot Development</Link></li>
              <li><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/services/ai-ml-development/ai-ml-services/computer-vision">Computer Vision</Link></li>
            </ul>
          </section>
        </div>
      </li>
    </ul>
  );
}
