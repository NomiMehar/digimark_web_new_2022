import style from "./enterpriseTool.module.scss"
import tool1 from "../../../../../../public/assets/images/services/tool1.svg"
import tool2 from "../../../../../../public/assets/images/services/tool2.svg"
import tool3 from "../../../../../../public/assets/images/services/tool3.svg"
import tool4 from "../../../../../../public/assets/images/services/tool4.svg"
import tool5 from "../../../../../../public/assets/images/services/tool5.svg"
import tool6 from "../../../../../../public/assets/images/services/tool6.svg"
import Image from "next/image";

export default function EnterpriseTool() {
    return(
        <div className={style.enterprise_tool_wrap}>
            <div className="container">
                <div className={`section_title`}>
                    <h2><span>Tools & Technologies</span> that we use</h2>
                </div>
                <div className={style.enterprise_tool}>
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <section>
                                <h3><Image src={tool1} alt="tool1"/> Languages</h3>
                                <ul className="list-none flex flex-wrap">
                                    <li><span>Java</span></li>
                                    <li><span>C#</span></li>
                                    <li><span>C/C++</span></li>
                                    <li><span>Objective C</span></li>
                                    <li><span>Python</span></li>
                                    <li><span>Kotlin</span></li>
                                    <li><span>PHP</span></li>
                                    <li><span>Rust</span></li>
                                    <li><span>Scala</span></li>
                                    <li><span>Swift</span></li>
                                    <li><span>Groovy</span></li>
                                </ul>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3><Image src={tool2} alt="tool1"/> Mobile</h3>
                                <ul className="list-none flex flex-wrap">
                                    <li><span>iOS</span></li>
                                    <li><span>Android</span></li>
                                    <li><span>HTML5</span></li>
                                    <li><span>Java</span></li>
                                    <li><span>Java</span></li>
                                </ul>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3><Image src={tool3} alt="tool1"/> Web</h3>
                                <ul className="list-none flex flex-wrap">
                                    <li><span>Vue</span></li>
                                    <li><span>Sass</span></li>
                                    <li><span>Coffee</span></li>
                                    <li><span>Angular</span></li>
                                    <li><span>WebGL</span></li>
                                </ul>
                            </section>
                        </li>
                    </ul>
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <section>
                                <h3><Image src={tool4} alt="tool1"/> Languages</h3>
                                <ul className="list-none flex flex-wrap">
                                    <li><span>Java</span></li>
                                    <li><span>C#</span></li>
                                    <li><span>C/C++</span></li>
                                    <li><span>Objective C</span></li>
                                    <li><span>Python</span></li>
                                    <li><span>Kotlin</span></li>
                                    <li><span>PHP</span></li>
                                    <li><span>Rust</span></li>
                                    <li><span>Scala</span></li>
                                    <li><span>Swift</span></li>
                                    <li><span>Groovy</span></li>
                                </ul>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3><Image src={tool5} alt="tool1"/> Mobile</h3>
                                <ul className="list-none flex flex-wrap">
                                    <li><span>iOS</span></li>
                                    <li><span>Android</span></li>
                                    <li><span>HTML5</span></li>
                                    <li><span>Java</span></li>
                                    <li><span>Java</span></li>
                                </ul>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3><Image src={tool6} alt="tool1"/> Web</h3>
                                <ul className="list-none flex flex-wrap">
                                    <li><span>Vue</span></li>
                                    <li><span>Sass</span></li>
                                    <li><span>Coffee</span></li>
                                    <li><span>Angular</span></li>
                                    <li><span>WebGL</span></li>
                                </ul>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}