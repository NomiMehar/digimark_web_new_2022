import style from "./achieveSuccess.module.scss"
import achieveSuccess from "../../../../public/assets/images/company/scrum.png"
import Image from "next/image";

export default function AchieveSuccess () {
    return(
        <div className={`flex direction-column ${style.achieve_success}`}>
            <div className="container">
                <div className={`flex flex-wrap ${style.achieve_success_text}`}>
                    <h2>How we Achieve <span>Success</span></h2>
                    <section>
                        <p>As your right technology partner, we're poised to exceed your expectations. Through collaborative efforts with our clients, we ensure the delivery of a valuable end product. We are problem solvers and ensure the best outcomes.</p>
                        <p>Our project management approach is highly flexible, utilizing the agile methodology and a variety of frameworks such as Scrum. Count on us to bring your ideas to life with a customized approach that is tailored specifically to you.</p>
                    </section>
                </div>
                <Image className={style.achieve_image} src={achieveSuccess} alt={achieveSuccess}/>
            </div>
        </div>
    )
}