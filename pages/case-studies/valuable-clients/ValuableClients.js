import style from "./valuableClients.module.scss"
import Image from "next/image";
import logo1 from "../../../public/assets/images/case-study/logo1.webp"
import logo2 from "../../../public/assets/images/case-study/logo2.webp"
import logo3 from "../../../public/assets/images/case-study/logo3.webp"
import logo4 from "../../../public/assets/images/case-study/logo4.webp"

export default function ValuableClients() {
    return(
        <>
            <div className={style.valuable_clients}>
                <div className="container flex items-center">
                    <section>
                        <span>Love By</span>
                        <h2>Valuable Clients</h2>
                        <p>Pulvinar sapien et ligula ullamcorper malesuada proin libero. Duis tristique sollicitudin nibh sit amet commodo. Et tortor at risus viverra adipiscing. Quis lectus nulla at volutpat. Id leo in vitae turpis massa sed elementum tempus egestas. Nisl suscipit adipiscing bibendum est ultricies integer. Lorem ipsum dolor sit amet consectetur.</p>
                    </section>
                    <figure className="flex flex-wrap">
                        <Image src={logo1} alt="logo"/>
                        <Image src={logo2} alt="logo"/>
                        <Image src={logo3} alt="logo"/>
                        <Image src={logo4} alt="logo"/>
                    </figure>
                </div>
            </div>
        </>
    )
}