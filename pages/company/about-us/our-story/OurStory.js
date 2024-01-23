import React, {useEffect} from "react";
import style from "./OurStory.module.scss"
import storyImage from "../../../../public/assets/images/company/story-image.png"
import visionImage from "../../../../public/assets/images/company/vision-image.png"
import Image from "next/image";
import AOS from 'aos';

export default function OurStory (props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className={`flex direction-column ${style.our_story_wrapper}`}>
                <div className="container flex items-center">
                    <div
                        className={style.story_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <h2>{props.title}</h2>
                        {props.text}
                    </div>
                    <figure
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <Image src={storyImage} alt={storyImage} />
                    </figure>
                </div>
            </div>
            {
                props.womenStory === true ?
                    "" : <div className={`flex direction-column ${style.our_vision_wrapper}`}>
                        <div className="container flex items-center">
                            <figure
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                <Image src={visionImage} alt={visionImage} />
                            </figure>
                            <div
                                className={style.story_text}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                <p>At DigiMark, we highly value the power of teamwork and positive work culture. They say "Teamwork makes the dream work" and we believe that they say it right. A  happy and connected team leads to better productivity and growth which is the main aim of the company. To ensure this, DigiMark organizes exciting team-building activities regularly so that employees can interact with each other and make associations. We encourage an unparalleled company culture for better results and productivity. We embrace challenges and celebrate important milestones and occasions together with the team, whether it's a birthday, victory, work anniversary, or successful project completion within the company. Our fun activities not only help us relieve stress but also boost creativity and productivity, making our workplace a fun and fulfilling environment. Let's change the world of technology with DigiMark Developers now!</p>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};