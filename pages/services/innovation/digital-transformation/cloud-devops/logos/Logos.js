import style from "./logos.module.scss"
import Image from "next/image";
import logo1 from "../../../../../../public/assets/images/homepage/our_products/midfeed.svg"
import logo2 from "../../../../../../public/assets/images/homepage/our_products/vocal.svg"
import logo3 from "../../../../../../public/assets/images/homepage/our_products/voxendo.svg"
import logo4 from "../../../../../../public/assets/images/homepage/our_products/petluvs.svg"

export default function Logos() {
    return(
        <div className={style.logos_wrapper}>
            <div className="container">
                <h2>Leading Enterprises <span>Who Trust Us</span></h2>
                <div className={style.logos}>
                    <ul className="list-none flex">
                        <li><Image src={logo1} alt="icon"/></li>
                        <li><Image src={logo2} alt="icon"/></li>
                        <li><Image src={logo3} alt="icon"/></li>
                        <li><Image src={logo4} alt="icon"/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}