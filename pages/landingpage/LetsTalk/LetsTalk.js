import Link from "next/link";
import React, { useEffect, useRef } from "react";
import ContactMap from "./ContactMap";
import style from "./LetsTalk.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function LetsTalk(props) {
  const handleMouseEnter = () => {
    document.body.classList.add('hovered');
  };
  const handleMouseLeave = () => {
    document.body.classList.remove('hovered');
  };
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
  
    console.log("Form submitted");
  
    emailjs
      .sendForm('service_0cy2mz9', 'template_qg0nmnb', e.target, '-zIr-xxgJVGgVJ96-')
      .then(
        (result) => {
          console.log("Email sent successfully", result);
          MySwal.fire({
            title: 'Success!',
            text: 'Your message has been sent.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        },
        (error) => {
          console.error("Error sending email", error);
          MySwal.fire({
            title: 'Error!',
            text: 'Failed to send your message. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      );
  
    e.target.reset();
  }
  

  return (
    <div id="contactForm" className={`flex direction-column lets_talk ${style[props.extraClass]} ${style.lets_talk}`}>
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
            <form ref={form} onSubmit={sendEmail}>
              <li>
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  required
                />
              </li>
              <li>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </li>
              <li>
                <select name="needs" required>
                  <option value="">Please specify your needs?</option>
                  <option value="Consultation AI">Consultation AI</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Web">Web</option>
                  <option value="Staff augmentation">Staff augmentation</option>
                  <option value="Team Augmentation">Team Augmentation</option>
                  <option value="Design">Design</option>
                  <option value="QA">QA</option>
                  <option value="Other">Other</option>
                </select>
              </li>
              <li>
                <textarea
                  placeholder="Write your message..."
                  name="message"
                  required
                />
              </li>
              <li className="flex-between-center">
                <p>Recaptcha</p>
                <input type="submit" className="contact_btn" value="Send message" />
              </li>
            </form>
          </ul>
          <div className="map"
               data-aos="fade-left"
               data-aos-easing="ease-in-sine"
               data-aos-duration="1000"
          >
            {/* <ContactMap /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
