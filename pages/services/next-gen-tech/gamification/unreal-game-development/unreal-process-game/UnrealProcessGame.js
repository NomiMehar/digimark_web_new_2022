import style from "./unrealProcessGame.module.scss"
import React from "react";
import Image from "next/image";

export default function UnrealProcessGame() {
    return(
        <>
            <div className={style.unreal_process_game}>
                <div className="container">
                    <div className={`section_title white ${style.section_title}`}>
                        <h2><span>Process</span> of Unreal Engine <br/>
                            Game Development</h2>
                        <p>Digi<span>Mark</span> ensures robust and high-performance Unreal game development to provide you with stunning games that will generate revenue in the long run.</p>
                        <p>Digi<span>Mark</span> developers are true experts in game creation, providing smooth and seamless Unreal game development process delivery</p>
                    </div>
                    <ul className="list-none">
                        <li>Research and Planning</li>
                        <li>Design</li>
                        <li>Engineering</li>
                        <li>Testing</li>
                        <li>Production</li>
                    </ul>
                </div>
            </div>
        </>
    )
}