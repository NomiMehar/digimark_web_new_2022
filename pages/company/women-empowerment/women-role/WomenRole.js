import style from "./womenRole.module.scss"
import Image from "next/image";
import quoteIcon from "../../../../public/assets/images/women-empowerment/quote.svg"

export default function WomenRole () {
    return(
        <div className={`flex flex-wrap direction-column ${style.women_role_wrapper}`}>
            <div className="container">
                <h2>Women Role In <span>Society</span></h2>
                <p>Women have been vital in shaping society throughout history. From leading social movements to making groundbreaking scientific discoveries, women have proven their equal capabilities alongside men.</p>
                <blockquote>
                    <Image className={style.quote_icon} src={quoteIcon} alt={quoteIcon} />
                    <h3>Quaid-e-Azam said in speech in 1944:</h3>
                    <p>In 1944, Quaid-e-Azam emphasized the importance of women, stating that a nation cannot reach great heights without their involvement. Now is the opportune moment to free ourselves from restrictive customs, allowing women to embrace their rightful positions in society. Women hold immense potential as educators, leaders, innovators, and volunteers, and it is our responsibility to harness their remarkable talents to drive our nation forward, towards a future teeming with progress and triumph.</p>
                </blockquote>
                <h4>Role of Women as Educators</h4>
                <p>It has been seen that only the mother in the family most often urges her children to attend and stay in school.</p>
                <h4>Role of Women in the Workforce</h4>
                <p>The theme for International women's was “Think equal, build smart, innovate for change,” this was selected to identify the innovative ways of advancing gender equality and the empowerment of women; this accelerates the 2030 Agenda, of the new U.N.Sustainable Development Goals.</p>
                <h4>Role of Women as Global Volunteers</h4>
                <p>Global Volunteers’ community development work worldwide strengthens women’s and children’s capacity, health, and development.</p>
                <p><strong>1883:</strong>The first programming language was developed in 1883 when Ada Lovelace and Charles Babbage worked together on the Analytical Engine, which was a primitive mechanical computer. Lovelace was able to discern the importance of numbers, realizing that they could represent more than just numerical values of things. Lovelace wrote an algorithm for the Analytical Engine, the first computer program, to compute Bernoulli numbers.</p>
                <blockquote>
                    <Image className={style.quote_icon} src={quoteIcon} alt={quoteIcon} />
                    <p>However, the Prophet Mohammad (PBUH) strongly emphasized on education by saying that, “It is the prime duty of men and women to acquire education”.</p>
                </blockquote>
                <p>At DigitalMark Developers, we strive to ensure an inclusive and empowering work environment for all employees, irrespective of gender.
</p>
            </div>
        </div>
    )
}