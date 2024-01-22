import style from "./contactForms.module.scss"
import Image from "next/image";
import whiteArrow from "../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import React, {useState} from "react";
import { MultiSelect } from "react-multi-select-component";

export default function JoinForms() {
    const [selected, setSelected] = useState([]);
    const options = [
        { label: "HTML", value: "html" },
        { label: "Css", value: "Css" },
        { label: "JS", value: "JS" }
    ];
    return(
        <>
            <div className={style.form_wrapper}>
                <div className="container">
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <label htmlFor="">Name <small>*</small></label>
                            <input type="text" placeholder="Name"/>
                        </li>
                        <li>
                            <label htmlFor="">Email <small>*</small></label>
                            <input type="email" placeholder="Your Mail"/>
                        </li>
                        <li>
                            <label htmlFor="">Skills <small>*</small></label>
                            <MultiSelect
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                            />
                        </li>
                        <li>
                            <label htmlFor="">LinkedIn URL <small>*</small></label>
                            <input type="text" placeholder="URL"/>
                        </li>
                        <li className="w-100">
                            <label htmlFor="">Subject <small>*</small></label>
                            <input type="text" placeholder="Subject"/>
                        </li>
                        <li className="w-100">
                            <label htmlFor="">Cover Letter <span>(Optional)</span></label>
                            <textarea name="" placeholder="Write your message..." id="" cols="30" rows="10"></textarea>
                        </li>
                        <li className="w-100">
                            <span className={style.terms}><input type="checkbox"/><small>*</small>I give consent to the processing of my personal data uploaded via the contact form above under the terms and conditions of Digimark Privacy Policy (Processing of Candidates Personal Data).</span>
                        </li>
                        <li className="w-100">
                            <span className={style.terms}><input type="checkbox"/><small>*</small>I want to receive commercial communications and marketing information from Digimark by electronic means of communication (including telephone and e-mail).</span>
                        </li>
                        <li>
                            chaptcha
                        </li>
                        <li><button className={`contact_btn ${style.contact_btn}`}>Send Message <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}