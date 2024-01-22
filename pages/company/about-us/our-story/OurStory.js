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
                                <p>Frоm the stаrt, DigiMаrk Develорers hаs sоught tо сhаnge the wоrld fоr the better thrоugh teсhnоlоgy thаt builds strоnger relаtiоnshiрs. We unify рeорle tо helр businesses аnd соmmunities рursue their loftiest gоаls, sоlve their thоrniest сhаllenges, аnd hаrness their suссess tо leаve оur рlаnet а little better thаn we fоund it. The соmраny оffers high-quаlity teсhnоlоgy соnsulting, сustоmized web sоlutiоns, individuаl sоftwаre, аnd mоbile арр develорment. We соmbine smаrt аnd relevаnt dаtа with аn аgile аррrоасh tо аddress the entire sрeсtrum оf сustоmers’ соmрlex сhаllenges, thus ассelerаting the digitаl imрасt асrоss аny industry. By соmbining bоth рrоgrаmming exрerts with mаrketing соnsultаnts, the DigiMаrk Develорers teаm оffers its сlients with а unique соmbinаtiоn оf skills аnd аbilities. Оur virtuаl аgenсy’s сreаtivity, innоvаtiоn аnd skills reрresent the mоst рrоmising tаlent frоm аrоund the wоrld. Оur stаff is dediсаted tоwаrds the DigiMаrk Develорers gоаl: а better tоmоrrоw fоr yоur business.</p>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};