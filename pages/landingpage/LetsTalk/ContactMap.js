import React, {useState} from "react";
import GoogleMapReact from "google-map-react";
import style from "./LetsTalk.module.scss";
import Image from "next/image";
import marukhImage from "../../../public/assets/images/homepage/lets_talk/marukh.png";
import telegrameImage from "../../../public/assets/images/homepage/lets_talk/telegram.svg";
import whiteArrow from "../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";

const LahoreOffice = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(!modalOpen);
    }
    return(
        <>
            <div className={style.location_map} onClick={openModal}>
                <span>Lahore, Pakistan</span>
            </div>
            <div className={`items-center ${style.modal_wrap} ${modalOpen ? `${style.active}` : ""}`}>
                <figure>
                    <Image src={marukhImage} alt={marukhImage} width={108} height={90} />
                    <figcaption>
                        <h3>Mahrukh Hassan</h3>
                        <span>Marketing Director</span>
                    </figcaption>
                </figure>
                <section className={`flex direction-column ${style.modal_text}`}>
                    <h4>PAKISTAN,  Lahore</h4>
                    <span>49B, Block G Johar Town, Lahore, 54782</span>
                    <Link href="tel:923200000000">+92 320 0000000</Link>
                    <Link href="mailto:info@digimarkdevelopers.com">info@digimarkdevelopers.com</Link>
                    <div className={`flex items-center ${style.button_wrapper}`}>
                        <Link className={style.modal_btn} href="/" target="_blank">Book a call <Image src={whiteArrow} alt={whiteArrow} width={13} height={16}/></Link>
                        <small>or</small>
                        <Link className={style.modal_btn} href="/" target="_blank"><Image src={telegrameImage} alt={telegrameImage}/></Link>
                    </div>
                </section>
            </div>
        </>
    )
};

const UkOffice = () => {
    const [modalUkOpen, setModalUkOpen] = useState(false);
    const openModal = () => {
        setModalUkOpen(!modalUkOpen);
    }
    return(
        <>
            <div className={style.location_map} onClick={openModal}>
                <span>London, UK</span>
            </div>
            <div className={`items-center ${style.modal_wrap} ${modalUkOpen ? `${style.active}` : ""}`}>
                <figure>
                    <Image src={marukhImage} alt={marukhImage} width={108} height={90} />
                    <figcaption>
                        <h3>Mahrukh Hassan</h3>
                        <span>Marketing Director</span>
                    </figcaption>
                </figure>
                <section className={`flex direction-column ${style.modal_text}`}>
                    <h4>London, UK</h4>
                    <span>49B, Block G Johar Town, Lahore, 54782</span>
                    <Link href="tel:923200000000">+92 320 0000000</Link>
                    <Link href="mailto:info@digimarkdevelopers.com">info@digimarkdevelopers.com</Link>
                    <div className={`flex items-center ${style.button_wrapper}`}>
                        <Link className={style.modal_btn} href="pages/landingpage/LetsTalk/ContactMap#" target="_blank">Book a call <Image src={whiteArrow} alt={whiteArrow} width={13} height={16}/></Link>
                        <small>or</small>
                        <Link className={style.modal_btn} href="pages/landingpage/LetsTalk/ContactMap#" target="_blank"><Image src={telegrameImage} alt={telegrameImage}/></Link>
                    </div>
                </section>
            </div>
        </>
    )
};

export default function ContactMap() {
  const defaultProps = {
    center: {
      lat: 29.782476801122616,
      lng: 69.24445883468744,
    },
    zoom: 3,
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <LahoreOffice lat={31.475794336315122} lng={74.28191476818962} />
        <UkOffice lat={10.99835603} lng={76.01502627} />
      </GoogleMapReact>
    </div>
  );
}
