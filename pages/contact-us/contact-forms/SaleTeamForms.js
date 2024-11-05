import style from "./contactForms.module.scss";
import Image from "next/image";
import whiteArrow from "../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Loader from "../../../public/assets/images/loader.png";
import Link from "next/link";
import React, { useState } from "react";
import { sendEmail } from "../../../utils/helpers";

export default function SaleTeamForms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [need, setNeed] = useState("Website");
  const [budget, setBudget] = useState("Up to $20K");
  const [industry, setIndustry] = useState("Finance");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    sendEmail(name, email, number, company, subject, need, budget, industry, message, setLoading);
  }

  return (
    <>
      <div className={style.form_wrapper}>
        <div className="container">
          <ul className="list-none flex flex-wrap">
            <li>
              <label htmlFor="">
                Name <small>*</small>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
            </li>
            <li>
              <label htmlFor="">
                Email <small>*</small>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Mail"
              />
            </li>
            <li>
              <label htmlFor="">
                Contact Number <small>*</small>
              </label>
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Number"
              />
            </li>
            <li>
              <label htmlFor="">
                Company Name <small>*</small>
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company Name"
              />
            </li>
            <li className="w-100">
              <label htmlFor="">
                Subject <small>*</small>
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
              />
            </li>
            <li className="w-100">
              <label htmlFor="">
                What is your Digital Need? <small>*</small>
              </label>
              <div className={`flex flex-wrap ${style.checkbox_list}`}>
                <div className="checkbox">
                  <label htmlFor="1">
                    <input
                      id="1"
                      name="need"
                      type="radio"
                      value="Website"
                      checked={need === "Website"}
                      onChange={(e) => setNeed(e.target.value)}
                    />
                    <span>Website</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="2">
                    <input
                      id="2"
                      name="need"
                      type="radio"
                      value="Mobile"
                      checked={need === "Mobile"}
                      onChange={(e) => setNeed(e.target.value)}
                    />
                    <span>Mobile</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="3">
                    <input
                      id="3"
                      name="need"
                      type="radio"
                      value="DevOps"
                      checked={need === "DevOps"}
                      onChange={(e) => setNeed(e.target.value)}
                    />
                    <span>DevOps</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="4">
                    <input
                      id="4"
                      name="need"
                      type="radio"
                      value="Blockchain"
                      checked={need === "Blockchain"}
                      onChange={(e) => setNeed(e.target.value)}
                    />
                    <span>Blockchain</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="5">
                    <input
                      id="5"
                      name="need"
                      type="radio"
                      value="Other"
                      checked={need === "Other"}
                      onChange={(e) => setNeed(e.target.value)}
                    />
                    <span>Other</span>
                  </label>
                </div>
              </div>
            </li>
            <li className="w-100">
              <label htmlFor="">
                Your Estimated Budget? <small>*</small>
              </label>
              <div className={`flex flex-wrap ${style.checkbox_list}`}>
                <div className="checkbox">
                  <label htmlFor="6">
                    <input
                      id="6"
                      type="radio"
                      name="budget"
                      value="Up to $20K"
                      checked={budget === "Up to $20K"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    <span>Up to $20K</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="7">
                    <input
                      id="7"
                      type="radio"
                      name="budget"
                      value="$20K - $50K"
                      checked={budget === "$20K - $50K"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    <span>$20K - $50K</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="8">
                    <input
                      id="8"
                      type="radio"
                      name="budget"
                      value="$50K - &100K"
                      checked={budget === "$50K - &100K"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    <span>$50K - &100K</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="9">
                    <input
                      id="9"
                      type="radio"
                      name="budget"
                      value="$100K - $200K"
                      checked={budget === "$100K - $200K"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    <span>$100K - $200K</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="10">
                    <input
                      id="10"
                      type="radio"
                      name="budget"
                      value="$200K or More"
                      checked={budget === "$200K or More"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    <span>$200K or More</span>
                  </label>
                </div>
              </div>
            </li>
            <li className="w-100">
              <label htmlFor="">
                Select your Industry <small>*</small>
              </label>
              <div className={`flex flex-wrap ${style.checkbox_list}`}>
                <div className="checkbox">
                  <label htmlFor="11">
                    <input
                      id="11"
                      type="radio"
                      name="industry"
                      value="Finance"
                      checked={industry === "Finance"}
                      onChange={(e) => setIndustry(e.target.value)}
                    />
                    <span>Finance</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="12">
                    <input
                      id="12"
                      type="radio"
                      name="industry"
                      value="Healthcare"
                      checked={industry === "Healthcare"}
                      onChange={(e) => setIndustry(e.target.value)}
                    />
                    <span>Healthcare</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="13">
                    <input
                      id="13"
                      type="radio"
                      name="industry"
                      value="Education"
                      checked={industry === "Education"}
                      onChange={(e) => setIndustry(e.target.value)}
                    />
                    <span>Education</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="14">
                    <input
                      id="14"
                      type="radio"
                      name="industry"
                      value="Cryptography"
                      checked={industry === "Cryptography"}
                      onChange={(e) => setIndustry(e.target.value)}
                    />
                    <span>Cryptography</span>
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="15">
                    <input
                      id="15"
                      type="radio"
                      name="industry"
                      value="Other"
                      checked={industry === "Other"}
                      onChange={(e) => setIndustry(e.target.value)}
                    />
                    <span>Other</span>
                  </label>
                </div>
              </div>
            </li>
            <li className="w-100">
              <label htmlFor="">
                Message <span>(Optional)</span>
              </label>
              <textarea
                name=""
                placeholder="Write your message..."
                id=""
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </li>
            <li>chaptcha</li>
            <li>
              <button
                type="button"
                disabled={loading}
                onClick={() => handleSubmit()}
                className={`contact_btn ${style.contact_btn}`}
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
                  <>
                    Send Message&nbsp;
                    <Image
                      src={whiteArrow}
                      alt={whiteArrow}
                      width={13}
                      height={16}
                    />
                  </>
                )}
              </button>
            </li>
            <li className="w-100">
              <p>
                <span>or</span>
                <Link href="/" target="_blank">
                  Let&apos;s Schedule a Call with Us.
                </Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
