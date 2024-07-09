import React, { useState, useRef } from "react";
import ContactMap from "./ContactMap";
import style from "./LetsTalk.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { sendEmail } from "./sendEmail";

const MySwal = withReactContent(Swal);

export default function LetsTalk(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    needs: '',
    message: '',
});

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await sendEmail(formData);
        alert('Email sent successfully!');
        // Clear form data after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            needs: '',
            message: '',
        });
    } catch (error) {
        alert('Failed to send email. Please try again later.');
        console.error('Error sending email:', error);
    }
};

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

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
            <form onSubmit={handleSubmit}>
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
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
}
