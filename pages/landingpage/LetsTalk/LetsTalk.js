import Link from "next/link";
import React, {useEffect} from "react";
import ContactMap from "./ContactMap";
import style from "./LetsTalk.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LetsTalk(props) {
  const handleMouseEnter = () => {
    document.body.classList.add('hovered');
  };
  const handleMouseLeave = () => {
    document.body.classList.remove('hovered');
  };
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={`flex direction-column lets_talk ${style[props.extraClass]} ${style.lets_talk}`}>
      <div className="container">
        <div className="main_section_title"
             data-aos="fade-up"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000"
        >
          <h2>Let's <span>Talk & Work together!</span></h2>
        </div>
        <div className={`grid-container-2 ${style.talk_section}`}>
          <ul className={`list-none ${style.contact_form}`}
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
          >
            <li>
              <input
                type="text"
                placeholder="Name*"
                name=""
              />
            </li>
            <li>
              <input
                type="email"
                placeholder="Email"
                name=""
              />
            </li>
            <li>
              <select>
                <option>What is your digital need?</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </li>
            <li>
              <select>
                <option>Select your industries</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </li>
            <li>
              <textarea
                placeholder="Write your message..."
              />
            </li>
            <li className="flex-between-center">
              <p>Recaptcha </p>
              <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="contact_btn">
                Send Message{" "}
                <img src="/assets/images/homepage/lets_talk/arrow.svg" alt="arrow" />
              </button>
            </li>
            <li>
              <p>
                By submitting this form you accept our{" "}
                <Link
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    href="#">Terms and Privacy Policy</Link>
              </p>
            </li>
          </ul>
          <div className="map"
               data-aos="fade-left"
               data-aos-easing="ease-in-sine"
               data-aos-duration="1000"
          >
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
}
