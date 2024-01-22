import style from "./productIndustries.module.scss"
import Image from "next/image";
import galleryImage1 from "../../../../../../public/assets/images/services/indust-gallery1.jpg"

export default function ProductIndustries() {
    return(
        <>
            <div className={style.product_industry}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={`section_title white ${style.section_title}`}>
                                <h2>Industries <span> We Serve</span></h2>
                            </div>
                            <div className={`flex ${style.product_industrylist}`}>
                                <ul className="list-none flex direction-column">
                                    <li>
                                        <figure>
                                            <Image src={galleryImage1} alt="img" />
                                            <figcaption>Retail & E-commerce</figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <Image src={galleryImage1} alt="img" />
                                            <figcaption>Fintech</figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <Image src={galleryImage1} alt="img" />
                                            <figcaption>Technology</figcaption>
                                        </figure>
                                    </li>
                                </ul>
                                <ul className="list-none flex direction-column">
                                    <li>
                                        <figure>
                                            <Image src={galleryImage1} alt="img" />
                                            <figcaption>Healthcare</figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <Image src={galleryImage1} alt="img" />
                                            <figcaption>Automotive</figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <Image src={galleryImage1} alt="img" />
                                            <figcaption>Manufacturing</figcaption>
                                        </figure>
                                    </li>
                                </ul>
                                <ul className="list-none flex direction-column">
                                    <li>
                                        <figure>
                                            <Image src={galleryImage1} alt="img" />
                                            <figcaption>Education</figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <Image src={galleryImage1} alt="img" />
                                            <figcaption>Cryptocurrencies</figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <Image src={galleryImage1} alt="img" />
                                            <figcaption>Retail & E-commerce</figcaption>
                                        </figure>
                                    </li>
                                </ul>
                                <ul className="list-none flex direction-column">
                                    <li>
                                        <figure>
                                            <Image src={galleryImage1} alt="img" />
                                            <figcaption>Entertainment <br/>and Media</figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <Image src={galleryImage1} alt="img" />
                                            <figcaption>Oil and Gas</figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}