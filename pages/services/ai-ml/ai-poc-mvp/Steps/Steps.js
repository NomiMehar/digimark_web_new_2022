import React, {useEffect} from "react";
import style from "./Steps.module.scss";
import roadmap from "../../../../../public/assets/images/services/roadmap-image.png";
import step1 from "../../../../../public/assets/images/services/step1.png";
import step2 from "../../../../../public/assets/images/services/step2.png";
import step3 from "../../../../../public/assets/images/services/step3.png";
import step4 from "../../../../../public/assets/images/services/step4.png";
import step5 from "../../../../../public/assets/images/services/step5.png";
import step6 from "../../../../../public/assets/images/services/step6.png";
import Image from "next/image";
import AOS from 'aos';

export default function Steps(props) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className={`flex direction-column ${style.our_story_wrapper}`}>
                <div className="container flex items-center">
                    <div
                        className={style.story_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <h2>Validate and Scale Your AI Vision: From PoC to MVP Success</h2>
                        <p>Starting with a focused Proof of Concept (PoC) lets you evaluate the viability of your idea in a controlled setting before scaling and validating your AI vision. Before going on to the next stage, a Proof of Concept helps identify potential problems and optimise solutions by concentrating on the main goals.</p>
                        <p>After validation, the process moves forward with the creation of a Minimum Viable Product (MVP), where your AI solution is improved, scaled up, and ready for wider use.</p>
                        <p>This procedure guarantees that your AI project will be scalable and useful, producing observable commercial outcomes.</p>
                    </div>
                    <figure
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <Image src={roadmap} alt={roadmap} />
                    </figure>
                </div>
            </div>
            <div className={`flex direction-column ${style.step1}`}>
                <div className="container flex items-center">
                    <figure
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <Image src={step1} alt={step1} />
                    </figure>
                    <div
                        className={style.story_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <span className={style.subline}>The First Phase:</span>
                        <h2>An Hour-Long Discovery Call To Explore Ideas</h2>
                        <p>When you've come to this, you're probably considering how machine learning and artificial intelligence could benefit your company. We can integrate into your process at any point, regardless of whether you've completed work with another supplier, have had ideas about how you could utilise AI/ML, or are just starting to hear about the buzz around AI in your sector and want to make sure you're keeping up.</p>
                        <p>Regardless of how developed your ideas are, we advise beginning with a "discovery" call. This is our opportunity to learn more about your product, the technical skills you possess internally or through an outside service provider, and your plans for scaling and implementing AI and ML.</p>
                    </div>
                </div>
            </div>
            <div className={`flex direction-column ${style.step2}`}>
                <div className="container flex items-center">
                    <div
                        className={style.story_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <span className={style.subline}>The Second Phase:</span>
                        <h2>The Roadmap: From Initial Concept to MVP</h2>
                        <p>We've built a 3-day method that consists of 6 separate processes to take an AI/ML project from idea to delivery.</p>
                        <p>Our program is known as the Cloud Accelerator Program, and companies are usually taken aback to learn that it is entirely free for customers whose digital transformation initiative necessitates a $750 monthly expenditure on the Amazon Web Services (AWS) platform going ahead.</p>
                        <p>We'll examine the contents of each of those phases as well as the time commitment needed for each step in this section.</p>
                    </div>
                    <figure
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <Image src={step2} alt={step2} />
                    </figure>
                </div>
            </div>
            <div className={`flex direction-column ${style.step3}`}>
                <div className="container flex items-center">
                    <figure
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <Image src={step3} alt={step3} />
                    </figure>
                    <div
                        className={style.story_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <span className={style.subline}>The Third Phase:</span>
                        <h2>Optimal Approaches - Preserving Your Digital Revolution (2 Hours)</h2>
                        <p>Solutions based on AI and ML will most likely collaborate with sensitive data and intellectual property. Therefore, it's never too early to consider security and recovery best practices.</p>
                        <p>At this point, we'll get in touch once more to talk about your current disaster recovery, security, and data integrity setup and contrast it with the best practices and automation we've developed to establish and optimise these crucial components.</p>
                        <p>Naturally, a critical component of any decision-making process in cloud-based AI/ML is handling future invoicing and cost optimisation.</p>
                    </div>
                </div>
            </div>
            <div className={`flex direction-column ${style.step1}`}>
                <div className="container flex items-center">
                    <div
                        className={style.story_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <span className={style.subline}>The Fourth Phase:</span>
                        <h2>Participation: Matching Information and Technology (4 Hours)</h2>
                        <p>Starting an AI/ML project requires more than simply possessing the appropriate tools; it also requires that your team is prepared to use them.</p>
                        <p>We'll create a half-day immersion program especially for your internal staff to make sure this is the case. This seminar will combine academic knowledge with practical application, with an emphasis on pertinent technologies that are part of your AI/ML journey.</p>
                    </div>
                    <figure
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <Image src={step4} alt={step4} />
                    </figure>
                </div>
            </div>
            <div className={`flex direction-column ${style.step2}`}>
                <div className="container flex items-center">
                    <figure
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <Image src={step5} alt={step5} />
                    </figure>
                    <div
                        className={style.story_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <span className={style.subline}>The Fifth Phase:</span>
                        <h2>POC Shipping: Envisioning Concepts Into Reality (1 Day)</h2>
                        <p>Having developed concepts, implemented tested best practices, and sharpened team expertise, we'll dedicate an entire day to building a physical, functional model of your AI/ML project inside your AWS environment.</p>
                        <p>We will collaborate with you to ensure that the given minimal viable product (MVP) or proof of concept (POC) completely satisfies your goals for the digital transformation.</p>
                        <p>This phase also entails planning forward for your AI/ML solution's scalability and efficacy.</p>
                    </div>
                </div>
            </div>
            <div className={`flex direction-column ${style.step3}`}>
                <div className="container flex items-center">
                    <div
                        className={style.story_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <span className={style.subline}>The Sixth Phase:</span>
                        <h2>Examining a Well-Architectured Foundation (1 Day)</h2>
                        <p>The last part of the process involves letting your project take off and focuses on giving your team control, unlike the previous immersion training, which was a simulator session.</p>
                        <p>We'll use AWS's incredibly useful "Well Architectured Framework Review" (WAFR) to do this. The procedure examines fundamental ideas, design tenets, and organisational best practices for executing AI/ML workloads on the cloud.</p>
                    </div>
                    <figure
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <Image src={step6} alt={step6} />
                    </figure>
                </div>
            </div>
        </>
    );
}
