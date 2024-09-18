import Link from "next/link";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useState } from "react";
import style from "../Header.module.scss";
import { useRouter } from "next/router";
import OutsideClickHandler from 'react-outside-click-handler';
import Image from "next/image";

const menuData = [
    { label: "Home", href: "/" },
    {
      label: "Company",
      subMenu: [
        { label: "About Us", href: "/company/about-us" },
        { label: "How We Work", href: "/company/how-we-are" },
        { label: "Our Team", href: "/company/team" },
        { label: "Women Empowerment", href: "/company/women-empowerment" },
        { label: "Life @DigiMark", href: "/company/life-at-digimark" },
        // { label: "Careers", href: "/company/careers" },
      ],
    },
    {
      label: "Services",
      subMenu: [
        {
          label: "Innovation",
          subMenu: [
            {
              label: "Mobility",
              subMenu: [
                { label: "Mobile Development", href: "/services/innovation/mobility/mobile-development" },
                { label: "Android App Development", href: "/services/innovation/mobility/android-app-development" },
                { label: "IOS App Development", href: "/services/innovation/mobility/android-ios-development" },
                { label: "React Native App", href: "/services/innovation/mobility/react-native-development" },
                { label: "Ionic Development", href: "/services/innovation/mobility/ionic-development" },
                { label: "Support & Maintenance", href: "/support" },
              ],
            },
            {
              label: "Digital Transformation",
              subMenu: [
                { label: "Web App Development", href: "/services/innovation/digital-transformation/web-development" },
                { label: "Bespoke Development", href: "/services/innovation/digital-transformation/bespoke-development" },
                { label: "SAAS Development", href: "/services/innovation/digital-transformation/saas-development" },
                { label: "MVP Development", href: "/services/innovation/digital-transformation/mvp-development" },
                { label: "Product Development", href: "/services/innovation/digital-transformation/product-development" },
                { label: "Cloud & DevOps", href: "/services/innovation/digital-transformation/cloud-devops" },
                { label: "Product Design", href: "/services/innovation/digital-transformation/product-design" },
                { label: "QA & Testing", href: "/services/innovation/digital-transformation/quality-assurance" },
                { label: "Enterprise Software Development", href: "/services/innovation/digital-transformation/enterprise-software-development" },
                { label: "Support & Maintenance", href: "/services/innovation/digital-transformation/support-maintenance" },
              ],
            },
          ],
        },
        {
          label: "Next-Gen Tech",
          subMenu: [
            {
              label: "Blockchain",
              subMenu: [
                { label: "Blockchain Development", href: "/services/next-gen-tech/blockchain/blockchain-development" },
                { label: "NFT Development", href: "/services/next-gen-tech/blockchain/nft-development" },
                { label: "NFT Marketplace", href: "/services/next-gen-tech/blockchain/nft-marketplace" },
                { label: "Smart Contract", href: "/services/next-gen-tech/blockchain/smart-contract-development" },
                { label: "Metaverse Development", href: "/services/next-gen-tech/blockchain/metaverse-development" },
                { label: "AR & VR", href: "/services/next-gen-tech/blockchain/ar-vr-development" },
                { label: "DeFi Development", href: "/services/next-gen-tech/blockchain/defi-developement" },
                { label: "DApp Development", href: "/services/next-gen-tech/blockchain/dapp-development" },
                { label: "Tokens & Crypto Wallets", href: "/services/next-gen-tech/blockchain/tokens-and-crypto-wallets" },
              ],
            },
            {
              label: "Gamification",
              subMenu: [
                { label: "Mobile Game Development", href: "/services/next-gen-tech/gamification/mobile-game-development" },
                { label: "PC Game Development", href: "/services/next-gen-tech/gamification/pc-game-development" },
                { label: "2D/3D Game Development", href: "/services/next-gen-tech/gamification/2d-3d-game-development" },
                { label: "Unreal Engine Game Dev", href: "/services/next-gen-tech/gamification/unreal-game-development" },
                { label: "Unity Game Development", href: "/services/next-gen-tech/gamification/unity-game-development" },
                { label: "AR/VR & MR Game Development", href: "/services/next-gen-tech/gamification/ar-vr-mr-game-development" },
                { label: "AI Game Development", href: "/services/next-gen-tech/gamification/ai-game-development" },
                { label: "NFT Game Development", href: "/services/next-gen-tech/gamification/nft-game-development" },
                { label: "Blockchain Game Development", href: "/services/next-gen-tech/gamification/blockchain-game-development" },
                { label: "Metaverse Game Development", href: "/services/next-gen-tech/gamification/metaverse-game-development" },
                { label: "Full Cycle Game Development", href: "/services/next-gen-tech/gamification/full-cycle-game-development" },
              ],
            },
          ],
        },
        {
          label: "AI & ML",
          subMenu: [
            { label: "Generative AI Development", href: "/services/ai-ml/generative-ai-development" },
            { label: "AI & ML Development", href: "/services/ai-ml/ai-ml-development" },
            { label: "Data Engineering Services", href: "/services/ai-ml/data-engineering-services" },
            { label: "AI Consulting", href: "/services/ai-ml/ai-consulting" },
            { label: "AI PoC and AI MVP", href: "/services/ai-ml/ai-poc-mvp" },
            { label: "Chatbot Development", href: "/services/ai-ml/chatbot-development" },
            { label: "Computer Vision", href: "/services/ai-ml/computer-vision" },
          ],
        },
      ],
    },
    { label: "Engagement Models", href: "/engagement-models" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
  ];
  

  export default function MobileNav() {
    const [sidebar, setSidebar] = useState(true);
    const router = useRouter();
  
    const isCompanyPage = [
      "/company/about-us",
      "/company/how-we-are",
      "/company/team",
      "/company/women-empowerment",
      "/company/life-at-digimark",
    ].includes(router.pathname);
  
    const toggleSidebar = () => setSidebar(!sidebar);
  
    const renderSubMenu = (menu) =>
        menu.subMenu ? (
          <SubMenu key={menu.label} label={menu.label}>
            {menu.subMenu.map((sub) => (sub.subMenu ? renderSubMenu(sub) : (
              <MenuItem key={sub.href}>
                <Link href={sub.href} passHref>
                  <span onClick={toggleSidebar}>{sub.label}</span>
                </Link>
              </MenuItem>
            )))}
          </SubMenu>
        ) : (
          <MenuItem key={menu.href}>
            <Link href={menu.href} passHref>
              <span onClick={toggleSidebar}>{menu.label}</span>
            </Link>
          </MenuItem>
        );
  
    return (
      <>
        <div className={`${isCompanyPage ? style.change_bg : ""} ${style.mobile_header}`}>
          <div className="container">
            <div className={`flex-between-center ${style.mobile_header_padd}`}>
              <Link href="/">
                <Image width={100} height={100} className={style.mobile_logo} src="/assets/images/header/mobile_logo.svg" alt="logo" priority />
              </Link>
              <Image width={100} height={100} className={style.toggle_img} onClick={toggleSidebar} src="/assets/images/header/toggle.svg" alt="toggle" />
            </div>
          </div>
        </div>
        <OutsideClickHandler onOutsideClick={() => setSidebar(true)}>
          <Sidebar className="d-xl-none sidebar" collapsed={sidebar} collapsedWidth="0px" width="295px">
            <div className="flex justify-between align-center d-block">
              <Image width={100} height={100} src="/assets/images/header/mobile_logo.svg" alt="logo" priority />
              <i className="fa fa-times font-color-green" onClick={toggleSidebar}></i>
            </div>
            <Menu iconShape="square">
              {menuData.map(renderSubMenu)}
            </Menu>
            <div className="menuSocial flex-between-center">
              <Link href="https://www.facebook.com/digimarkdevelopers" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f stky-h-n-link text-dark mx-2"></i>
              </Link>
              <Link href="https://www.instagram.com/digimark_developers/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram stky-h-n-link text-dark mx-2"></i>
              </Link>
              <Link href="https://www.linkedin.com/company/digimarkdevelopers/mycompany/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in stky-h-n-link text-dark mx-2"></i>
              </Link>
              <Link href="https://www.behance.net/digimarkdevelopers" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-behance stky-h-n-link text-dark mx-2 pr-xxl-3"></i>
              </Link>
            </div>
            <div className="mb-3 text-center d-lg-none d-block">
              <Link href="/contact-us" className="footerContact" passHref>
                <span className="text-white text-center d-block">Contact Us</span>
              </Link>
            </div>
          </Sidebar>
        </OutsideClickHandler>
      </>
    );
  }
