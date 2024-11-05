import React, { useEffect, useRef, useState } from "react";
import ContactMap from "./ContactMap";
import style from "./LetsTalk.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { sendEmail } from "../../../utils/helpers";
import Loader from "../../../public/assets/images/loader.png";
import Image from "next/image";

const MySwal = withReactContent(Swal);

export default function LetsTalk(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [need, setNeed] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const form = useRef();

  const handleSubmit = () => {
    sendEmail(name, email, subject, need, message, setLoading);
  };

  return (
    <div
      id="contactForm"
      className={`flex direction-column lets_talk ${style[props.extraClass]} ${
        style.lets_talk
      }`}
    >
      <div className="container">
        <div
          className="main_section_title"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <h2>
            Let's <span>Talk & Work together!</span>
          </h2>
        </div>
        <div className={`grid-container-2 ${style.talk_section}`}>
          <ul
            className={`list-none ${style.contact_form}`}
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <form
              ref={form}
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <li>
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </li>
              <li>
                <select
                  name="needs"
                  required
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                >
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </li>
              <li className="flex-between-center">
                <p>Recaptcha</p>
                <button
                  type="submit"
                  disabled={loading}
                  className="contact_btn"
                  value="Send message"
                >
                  {loading ? (
                    <>
                      Please Wait...&nbsp;
                      <Image
                        src={Loader}
                        alt="loader"
                        width={15}
                        height={15}
                        className="animate-spin"
                      />
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </li>
            </form>
          </ul>
          <div
            className="map"
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
