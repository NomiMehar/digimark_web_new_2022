import style from "./womenRole.module.scss"
import Image from "next/image";
import quoteIcon from "../../../../public/assets/images/women-empowerment/quote.svg"

export default function WomenRole () {
    return(
        <div className={`flex flex-wrap direction-column ${style.women_role_wrapper}`}>
            <div className="container">
                <h2>Women Role In <span>Society</span></h2>
                <p>We were recently rated as one of the worst countries in the world when it comes to the way we treat women. More than 60 years after independence, 80 per cent of Pakistani women are still subjected to domestic violence. Our country is ranked 82 out of 93 countries on the Gender Development Index and 152 out of 156 countries on the Gender Empowerment Measure.</p>
                <p>Women can play a greater role in the development of our nation. They have a great potential to lift our nation, which is rife with problems. God has bestowed them with all capabilities and their role in any sphere whether it is social, economic, political, cultural or educational cannot be ignored. We need to utilize their talent in right place and admit their stake in country’s progress.</p>
                <blockquote>
                    <Image className={style.quote_icon} src={quoteIcon} alt={quoteIcon} />
                    <h3>Quaid-e-Azam said in speech in 1944:</h3>
                    <p>No nation can rise to the height of glory unless your women are side by side with you; we are victims of evil customs. It is a crime against humanity that our women are shut up within the four walls of the houses as prisoners.</p>
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
            </div>
        </div>
    )
}