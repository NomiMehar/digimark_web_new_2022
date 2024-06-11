import Link from "next/link";
import style from "../Header.module.scss";
import Image from "next/image";
import SocialNetworkDat from "./SocialNetwork.json"

export default function SocialNetwork() {
    const handleMouseEnter = () => {
        document.body.classList.add('hovered');
    };
    const handleMouseLeave = () => {
        document.body.classList.remove('hovered');
    };
  return (
      <div className={`flex ${style.social_links}`}>
          {SocialNetworkDat.map(({ socialIcon, socialLink }, index) => {
              return(
                  <Link
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      key={`social-${index}`}
                      className={`flex justify-center items-center ${style.social}`}
                      href={socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <Image width={15} height={16} src={socialIcon} alt={socialIcon} />
                  </Link>
              )
            }
          )}
      </div>
  );
}
