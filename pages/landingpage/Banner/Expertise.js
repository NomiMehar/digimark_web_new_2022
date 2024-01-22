import style from "./Banner.module.scss";
import ExpertiseData from "./ExpertiseData.json";
import 'aos/dist/aos.css';

export default function Expertise() {
    const handleMouseEnter = () => {
        document.body.classList.add('hovered');
    };
    const handleMouseLeave = () => {
        document.body.classList.remove('hovered');
    };
    return(
        <div className={`flex w-100 items-center ${style.business_list}`}>
            <h2>We Work For:</h2>
            <ul className={`list-none flex ml-auto`}>
                {ExpertiseData.map(({ ExpertiseTitle }, index) => {
                    return (
                        <li key={`business-${index}`}>
                            <span
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="flex items-center justify-center">{ExpertiseTitle}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}