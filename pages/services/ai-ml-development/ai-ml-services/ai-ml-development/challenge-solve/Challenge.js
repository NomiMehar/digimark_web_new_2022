import style from "./Challenge.module.scss"
import mainImage from "../../../../../../public/assets/images/services/challenge.png"
import Image from "next/image";
import React, {useEffect} from "react";
import AOS from 'aos';

export default function Challenge() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap ${style.challenge_wrapper}`}>
            <div className="container">
                <div className={`flex flex-wrap ${style.challenge_wrap}`}>
                    <figure data-aos="fade-left" data-aos-duration="2000">
                        <Image src={mainImage} alt="mainImage"/>
                    </figure>
                    <div className={style.challenge_content} data-aos="fade-right" data-aos-duration="2000">
                    <div className={style.section_title} data-aos="fade-up" data-aos-duration="2000">
                    <h2>Technology We Use For AI & ML Development</h2>
                </div>
                        <ul className="list-none">
                            <li>
                                <span>TensorFlow and PyTorch</span>
                                <p>We utilise these frameworks for developing advanced machine learning and deep learning models.</p>
                            </li>
                            <li>
                                <span>AWS and Google Cloud</span>
                                <p> We leverage cloud platforms for scalable computing power and efficient model deployment.</p>
                            </li>
                            <li>
                                <span>Keras and Scikit-Learn</span>
                                <p>Quick prototypes for a wide variety of AI/ML algorithms</p>
                            </li>
                            <li>
                                <span>NLP Tools</span>
                                <p>We utilize these frameworks to construct advanced language models, as well as applications driven by artificial intelligence.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}