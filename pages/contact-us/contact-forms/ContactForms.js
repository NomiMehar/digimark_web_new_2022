import style from "./contactForms.module.scss"
import {useState} from "react";
import SaleTeamForms from "./SaleTeamForms";
import JoinForms from "./JoinForms";

export default function ContactForms() {
    const [activeTab, setActiveTab] = useState("tab1");
    return(
        <>
            <div id="contactForm" className={style.contact_form}>
                <div className="container">
                    <div className={`flex items-center justify-center ${style.contact_tabs}`}>
                        <ul className="list-none flex">
                            <li>
                                <button
                                    onClick={() => {
                                        setActiveTab("tab1");
                                    }}
                                    className={`${ activeTab === "tab1" ? `${style.active}` : ""}`}
                                >Talk to Our Sales Team</button>
                            </li>
                            {/* <li>
                                <button
                                    onClick={() => {
                                        setActiveTab("tab2");
                                    }}
                                    className={`${ activeTab === "tab2" ? `${style.active}` : ""}`}
                                >Join Our Team</button>
                            </li> */}
                        </ul>
                    </div>
                    {activeTab === "tab1" ? (
                        <SaleTeamForms/>
                    ) : (
                        <JoinForms/>
                    )
                    }
                </div>
            </div>
        </>
    )
}