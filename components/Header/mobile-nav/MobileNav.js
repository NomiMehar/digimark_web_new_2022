import Link from "next/link";
import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import {useState} from "react";
import style from "../Header.module.scss";
import {useRouter} from "next/router";
import OutsideClickHandler from 'react-outside-click-handler';

export default function MobileNav() {
    const [sidebar, setsidebar] = useState(true);
    const router = useRouter();

  return (
      <>
          <div className={`
            ${
              router.pathname ===
              "/company/about-us" &&
              "/company/how-we-are" &&
              "/company/team" &&
              "/company/careers" &&
              "/company/women-empowerment" &&
              "/company/life-at-digimark" ? `${style.change_bg}` : ""
            }
            ${style.mobile_header}`}
          >
              <div className="container">
                  <div className={`flex-between-center ${style.mobile_header_padd}`}>
                      <a href="/">
                      <img
                          className={style.mobile_logo}
                          src="/assets/images/header/mobile_logo.svg"
                          alt="logo"
                      />
                      </a>
                      <img
                          className={style.toggle_img}
                          onClick={() => setsidebar(false)}
                          src="/assets/images/header/toggle.svg"
                          alt="toggle"
                      />
                  </div>
              </div>
          </div>
          <OutsideClickHandler
              onOutsideClick={() => {
                  setsidebar(true);
              }}
          >
          <Sidebar
              className="d-xl-none sidebar"
              collapsed={sidebar}
              collapsedWidth="0px"
              width="295px"
          >
              <div className="flex justify-between align-center d-block">
                  <img src="/assets/images/header/mobile_logo.svg" alt="logo" />
                  <i
                      className="fa fa-times font-color-green"
                      onClick={() => setsidebar(true)}
                  ></i>
              </div>
              <Menu iconshape="square">
                  <MenuItem>
                      <Link onClick={() => setsidebar(true)} href="/">Home</Link>
                  </MenuItem>
                  <SubMenu label="Company">
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/company/about-us">About Company</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/company/how-we-are">How We Work</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/company/team">Our Team</Link></MenuItem>
                      {/* <MenuItem><Link onClick={() => setsidebar(true)} href="/company/careers">Our Careers</Link></MenuItem> */}
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/company/women-empowerment">Women Empowerment</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/company/life-at-digimark">Life @DigiMark</Link></MenuItem>
                  </SubMenu>
                  <SubMenu label="Services">
                  <SubMenu className="second_menu" label="Innovation">
                  <SubMenu className="third_menu" label="Mobility">
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/mobility/mobile-development">Mobile Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/mobility/android-app-development">Android App Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/mobility/android-ios-development">IOS App Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/mobility/react-native-development">React Native App</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/mobility/ionic-development">Ionic Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/support">Support & Maintenance</Link></MenuItem>
                  </SubMenu>
                  <SubMenu className="third_menu" label="Digital Transformation">
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/digital-transformation/web-development">Web App Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/digital-transformation/bespoke-development">Bespoke Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/digital-transformation/saas-development">SAAS Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/digital-transformation/mvp-development">MVP Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/digital-transformation/product-development">Product Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/digital-transformation/cloud-devops">Cloud & DevOps</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/digital-transformation/product-design">Product Design</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/digital-transformation/quality-assurance">QA & Testing</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/digital-transformation/enterprise-software-development">Enterprise Software Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/innovation/digital-transformation/support-maintenance">Support & Maintenance</Link></MenuItem>
                  </SubMenu>
                  </SubMenu>
                  {/* <SubMenu className="second_menu" label="Growth">              
                  </SubMenu> */}
                  <SubMenu className="second_menu" label="Next-Gen Tech">
                  <SubMenu className="third_menu" label="Blockchain">
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/blockchain/blockchain-development">Blockchain Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/blockchain/nft-development">NFT Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/blockchain/nft-marketplace">NFT Marketplace</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/blockchain/smart-contract-development">Smart Contract</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/blockchain/metaverse-development">Metaverse Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/blockchain/ar-vr-development">AR & VR</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/blockchain/defi-developement">DeFi Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/blockchain/dapp-development">DApp Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/blockchain/tokens-and-crypto-wallets">Tokens & Crypto Wallets</Link></MenuItem>
                  </SubMenu>
                  <SubMenu className="third_menu" label="Gamefication">
                  <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/gamification/mobile-game-development">Mobile Game Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/gamification/pc-game-development">PC Game Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/gamification/2d-3d-game-development">2D/3D Game Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/gamification/unreal-game-development">Unreal Engine Game Dev</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/gamification/unity-game-development">Unity Game Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/gamification/ar-vr-mr-game-development">AR/VR & MR Game Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/gamification/ai-game-development">AI Game Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/gamification/nft-game-development">NFT Game Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/gamification/blockchain-game-development">Blockchain Game Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/gamification/metaverse-game-development">Metaverse Game Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/next-gen-tech/gamification/full-cycle-game-development">Full Cycle Game Development</Link></MenuItem>
                  </SubMenu>
                  </SubMenu>
                  <SubMenu className="second_menu" label="AI & ML">  
                  <SubMenu className="third_menu" label="AI & ML Development">
                  <MenuItem><Link onClick={() => setsidebar(true)} href="/services/ai-ml-development/ai-ml-services/engagements-model/generative-ai-development">Generative AI Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/ai-ml-development/ai-ml-services/engagements-model/ai-ml-development">AI & ML Development</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/ai-ml-development/ai-ml-services/engagements-model/data-engineering-services">Data Engineering Services</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/ai-ml-development/ai-ml-services/engagements-model/ai-consulting">Ai Consulting</Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/ai-ml-development/ai-ml-services/engagements-model/ai-poc-mvp">AI PoC and AI MVP </Link></MenuItem>
                      <MenuItem><Link onClick={() => setsidebar(true)} href="/services/ai-ml-development/ai-ml-services/engagements-model/chatbot-development">Chatbot Development</Link></MenuItem>
                            <MenuItem><Link onClick={() => setsidebar(true)} href="/services/ai-ml-development/ai-ml-services/engagements-model/computer-vision">Computer Vision</Link></MenuItem>              
                  </SubMenu>            
                  </SubMenu>
                  </SubMenu>
                  <MenuItem>
                      <Link onClick={() => setsidebar(true)} href="/engagements-model">Engagement Models</Link>
                  </MenuItem>
                  <MenuItem>
                      <Link onClick={() => setsidebar(true)} href="/industries">Industries</Link>
                  </MenuItem>
                  <MenuItem>
                      <Link onClick={() => setsidebar(true)} href="/case-studies">Case Studies</Link>
                  </MenuItem>
              </Menu>
              <div className="menuSocial flex-between-center">
                  <Link onClick={() => setsidebar(true)}
                      href="https://www.facebook.com/digimarkdevelopers"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <i className="fab fa-facebook-f stky-h-n-link text-dark mx-2"></i>
                  </Link>
                  <Link onClick={() => setsidebar(true)}
                      href="https://www.instagram.com/digimark_developers/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <i className="fab fa-instagram stky-h-n-link text-dark mx-2"></i>
                  </Link>
                  <Link onClick={() => setsidebar(true)}
                      href="https://www.linkedin.com/company/digimarkdevelopers/mycompany/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <i className="fab fa-linkedin-in stky-h-n-link text-dark mx-2"></i>
                  </Link>
                  <Link onClick={() => setsidebar(true)}
                      href="https://www.behance.net/digimarkdevelopers"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <i className="fab fa-behance stky-h-n-link text-dark mx-2 pr-xxl-3"></i>
                  </Link>
              </div>
              <div className="mb-3 text-center d-lg-none d-block">
                  <Link onClick={() => setsidebar(true)} href="/contact-us" className="footerContact">
                      <span className="text-white text-center d-block">Contact Us</span>
                  </Link>
              </div>
          </Sidebar>
          </OutsideClickHandler>
      </>
  );
}
