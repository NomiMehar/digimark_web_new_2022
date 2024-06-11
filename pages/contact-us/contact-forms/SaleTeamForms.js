import style from "./contactForms.module.scss"
import Image from "next/image";
import whiteArrow from "../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import React from "react";

export default function SaleTeamForms() {
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
                            <label htmlFor="">Contact Number <small>*</small></label>
                            <input type="text" placeholder="Number"/>
                        </li>
                        <li>
                            <label htmlFor="">Company Name <small>*</small></label>
                            <input type="text" placeholder="Company Name"/>
                        </li>
                        <li className="w-100">
                            <label htmlFor="">Subject <small>*</small></label>
                            <input type="text" placeholder="Subject"/>
                        </li>
                        <li className="w-100">
                            <label htmlFor="">What is your Digital Need? <small>*</small></label>
                            <div className={`flex flex-wrap ${style.checkbox_list}`}>
                                <div className="checkbox">
                                    <label htmlFor="1">
                                        <input id="1" type="checkbox"/>
                                        <span>Website</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="2">
                                        <input id="2" type="checkbox"/>
                                        <span>Mobile</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="3">
                                        <input id="3" type="checkbox"/>
                                        <span>DevOps</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="4">
                                        <input id="4" type="checkbox"/>
                                        <span>Blockchain</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="5">
                                        <input id="5" type="checkbox"/>
                                        <span>Other</span>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li className="w-100">
                            <label htmlFor="">Your Estimated Budget? <small>*</small></label>
                            <div className={`flex flex-wrap ${style.checkbox_list}`}>
                                <div className="checkbox">
                                    <label htmlFor="6">
                                        <input id="6" type="checkbox"/>
                                        <span>Up to $20K</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="7">
                                        <input id="7" type="checkbox"/>
                                        <span>$20K - $50K</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="8">
                                        <input id="8" type="checkbox"/>
                                        <span>$50K - &100K</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="9">
                                        <input id="9" type="checkbox"/>
                                        <span>$100K - $200K</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="10">
                                        <input id="10" type="checkbox"/>
                                        <span>$200K or More</span>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li className="w-100">
                            <label htmlFor="">Select your Industry <small>*</small></label>
                            <div className={`flex flex-wrap ${style.checkbox_list}`}>
                                <div className="checkbox">
                                    <label htmlFor="11">
                                        <input id="11" type="checkbox"/>
                                        <span>Finance</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="12">
                                        <input id="12" type="checkbox"/>
                                        <span>Healthcare</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="13">
                                        <input id="13" type="checkbox"/>
                                        <span>Education</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="14">
                                        <input id="14" type="checkbox"/>
                                        <span>Cryptography</span>
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="15">
                                        <input id="15" type="checkbox"/>
                                        <span>Other</span>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li className="w-100">
                            <label htmlFor="">Message <span>(Optional)</span></label>
                            <textarea name="" placeholder="Write your message..." id="" cols="30" rows="10"></textarea>
                        </li>
                        <li>
                            chaptcha
                        </li>
                        <li><button className={`contact_btn ${style.contact_btn}`}>Send Message <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></button></li>
                        <li className="w-100">
                            <p><span>or</span><Link href="/" target="_blank">Let’s Schedule a Call with Us.</Link></p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}