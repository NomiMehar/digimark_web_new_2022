import style from "./unrealStack.module.scss"
import React from "react";
import Image from "next/image";
import stack1 from "../../../../../../public/assets/images/services/stack1.png"

export default function UnrealStack() {
    return(
        <>
            <div className={style.unreal_stack}>
                <div className="container">
                    <div className="section_title">
                        <h2>Our Unreal <span>Game Technology Stack</span></h2>
                        <p>Leverage a wide variety of technologies to build your ideal game.
                            Selecting the right database, language, and framework all count as
                            they determine the direction and success of your game.</p>
                    </div>
                    <div className={`flex ${style.unreal_stack_list}`}>
                        <section>
                            <h3>Design Tools</h3>
                            <ul className="list-none flex flex-wrap">
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                            </ul>
                        </section>
                        <section>
                            <h3>Design Tools</h3>
                            <ul className="list-none flex flex-wrap">
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                                <li><Image src={stack1} alt="stack"/></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}