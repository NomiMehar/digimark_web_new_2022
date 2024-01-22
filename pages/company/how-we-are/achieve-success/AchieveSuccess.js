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
                        <p>When you come to us with your idea, we want to fully meet your expectations. Your contribution to the project management process is very important and allows us to create a valuable product together.</p>
                        <p>You can be sure that the management will be tailored to fit your project. We employ the broadly understood Agile methodology. We love to work using Scrum, but our project managers are flexible and can choose the best path to achieve the goal – regardless of the framework used.</p>
                    </section>
                </div>
                <Image className={style.achieve_image} src={achieveSuccess} alt={achieveSuccess}/>
            </div>
        </div>
    )
}