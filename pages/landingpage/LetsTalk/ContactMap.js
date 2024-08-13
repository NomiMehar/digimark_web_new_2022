import React, {useState} from "react";
import GoogleMapReact from "google-map-react";
import style from "./LetsTalk.module.scss";
import Image from "next/image";
import marukhImage from "../../../public/assets/images/homepage/lets_talk/marukh.webp";
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
                    <span>362 N-Block, Johar Town, Lahore, 54782</span>
                    <Link href="tel:923200000000">+92 320 0000000</Link>
                    <Link href="mailto:info@digimarkdevelopers.com">info@digimarkdevelopers.com</Link>
                    <div className={`flex items-center ${style.button_wrapper}`}>
                        <Link className={style.modal_btn} href="https://calendly.com/digimark-developers" target="_blank">Book a call <Image src={whiteArrow} alt={whiteArrow} width={13} height={16}/></Link>
                        <small>or</small>
                        <Link className={style.modal_btn} href="/contact-us"><Image src={telegrameImage} alt={telegrameImage}/></Link>
                    </div>
                </section>
            </div>
        </>
    )
};

const LosAngeles = () => {
    const [modalUkOpen, setModalUkOpen] = useState(false);
    const openModal = () => {
        setModalUkOpen(!modalUkOpen);
    }
    return(
        <>
            <div className={style.location_map} onClick={openModal}>
                <span>Los Angeles</span>
            </div>
            {/* <div className={`items-center ${style.modal_wrap} ${modalUkOpen ? `${style.active}` : ""}`}>
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
            </div> */}
        </>
    )
};
const California = () => {
    const [modalUkOpen, setModalUkOpen] = useState(false);
    const openModal = () => {
        setModalUkOpen(!modalUkOpen);
    }
    return(
        <>
            <div className={style.location_map} onClick={openModal}>
                <span>California</span>
            </div>
        </>
    )
};
const Montreal = () => {
    const [modalUkOpen, setModalUkOpen] = useState(false);
    const openModal = () => {
        setModalUkOpen(!modalUkOpen);
    }
    return(
        <>
            <div className={style.location_map} onClick={openModal}>
                <span>Montreal</span>
            </div>
        </>
    )
};
const Canada = () => {
    const [modalUkOpen, setModalUkOpen] = useState(false);
    const openModal = () => {
        setModalUkOpen(!modalUkOpen);
    }
    return(
        <>
            <div className={style.location_map} onClick={openModal}>
                <span>Canada</span>
            </div>
        </>
    )
};
const Uae = () => {
    const [modalUkOpen, setModalUkOpen] = useState(false);
    const openModal = () => {
        setModalUkOpen(!modalUkOpen);
    }
    return(
        <>
            <div className={style.location_map} onClick={openModal}>
                <span>UAE</span>
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
        <LahoreOffice lat={31.46033286476907} lng={74.27597888384955} />
        <LosAngeles lat={34.052235} lng={-118.243683} />
        <California lat={36.778259} lng={-119.417931} />
        <Montreal lat={45.501690} lng={-73.567253} />
        <Canada lat={56.130367} lng={-106.346771} />
        <Uae lat={23.835927188177077} lng={54.101440139078086} />
      </GoogleMapReact>
    </div>
  );
}
