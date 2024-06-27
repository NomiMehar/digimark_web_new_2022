import style from "./unrealStack.module.scss"
import React from "react";
import Image from "next/image";
import stack1 from "../../../../../../public/assets/images/services/stack1.png"

export default function UnrealStack(props) {
    return(
        <>
            <div className={style.unreal_stack}>
                <div className="container">
                    <div className="section_title">
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className={`flex ${style.unreal_stack_list}`}>
                        <section>
                            <h3>Design Tools</h3>
                            <ul className="list-none flex flex-wrap">
                                <li><Image src="/assets/images/services/stack1.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack2.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack3.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack4.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack5.png" width={100} height={100} alt="stack"/></li>
                            </ul>
                        </section>
                        <section>
                            <h3>Development Tools</h3>
                            <ul className="list-none flex flex-wrap">
                                <li><Image src="/assets/images/services/stack6.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack7.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack8.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack9.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack10.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack11.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack12.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack13.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack14.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack15.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack16.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack17.png" width={100} height={100} alt="stack"/></li>
                                <li><Image src="/assets/images/services/stack18.png" width={100} height={100} alt="stack"/></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}