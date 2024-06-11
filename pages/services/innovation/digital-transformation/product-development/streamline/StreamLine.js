import style from "./streamLine.module.scss"
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";

export default function StreamLine() {
    return(
        <>
            <div className={style.streamline_wrap}>
                <div className="container">
                    <div className={`flex items-center justify-between ${style.streamline_text}`}>
                        <h2>Streamline your software <span>product development!</span></h2>
                        <Link href="#" className={`contact_btn`}>Reach out <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}