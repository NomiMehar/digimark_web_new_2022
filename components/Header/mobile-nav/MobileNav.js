import Link from "next/link";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useState,useEffect } from "react";
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState({});
    const router = useRouter();
  
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
    // Close sidebar on route change
    useEffect(() => {
      const handleRouteChange = () => setIsSidebarOpen(false);
      router.events.on('routeChangeStart', handleRouteChange);
      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
      };
    }, [router.events]);
  
    const renderSubMenu = (menu) => {
      const isExpanded = expandedMenus[menu.label] || false;
  
      const toggleMenu = () => {
        setExpandedMenus((prevState) => ({
          ...prevState,
          [menu.label]: !prevState[menu.label],
        }));
      };
  
      return menu.subMenu ? (
        <div key={menu.label} className={style.subMenu}>
          <span onClick={toggleMenu}>
            {menu.label}
            <i className={`${style.expandIcon} ${isExpanded ? style.open : ''}`}></i>
          </span>
          {isExpanded && (
            <div className={style.subMenuContent}>
              {menu.subMenu.map((sub) =>
                sub.subMenu ? renderSubMenu(sub) : (
                  <Link key={sub.href} href={sub.href} passHref>
                    {sub.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      ) : (
        <Link key={menu.href} href={menu.href} passHref>
          {menu.label}
        </Link>
      );
    };
  
    return (
      <>
        <div className={style.mobileHeader}>
          <div className="container">
            <div className={style.mobileHeaderPadding}>
              <Link href="/">
                <Image
                  width={120}
                  height={25}
                  className={style.mobileLogo}
                  src="/assets/images/header/mobile_logo.svg"
                  alt="logo"
                  priority
                />
              </Link>
              <Image
                width={30}
                height={30}
                className={style.toggleImg}
                onClick={toggleSidebar}
                src="/assets/images/header/toggle.svg"
                alt="toggle"
              />
            </div>
          </div>
        </div>
  
        {/* Sidebar */}
        <div className={`${style.sidebar} ${isSidebarOpen ? style.active : ""}`}>
          <div className={style.sidebarHeader}>
            <Link href="/">
              <Image
                width={120}
                height={25}
                src="/assets/images/header/mobile_logo.svg"
                alt="logo"
                priority
              />
            </Link>
            <i className="fa fa-times" onClick={toggleSidebar}></i>
          </div>
  
          <div className={style.menu}>
            {menuData.map(renderSubMenu)}
          </div>
  
          <div className={style.socialLinks}>
            <Link href="https://www.facebook.com/digimarkdevelopers" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="https://www.instagram.com/digimark_developers/" target="_blank">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="https://www.linkedin.com/company/digimarkdevelopers/" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link href="https://www.behance.net/digimarkdevelopers" target="_blank">
              <i className="fab fa-behance"></i>
            </Link>
          </div>
  
          <div className={style.footerContact}>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
  
        {/* Overlay for closing the sidebar when clicking outside */}
        {isSidebarOpen && <div className={style.overlay} onClick={toggleSidebar}></div>}
      </>
    );
  }