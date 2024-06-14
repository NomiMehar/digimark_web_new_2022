import style from "./maintenanceSupport.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function MaintenanceSupport() {
    return(
        <div className={style.maintenance_support}>
            <div className="container">
                <div className={`section_title`}>
                    <h2>Explore Our Industries for <br/><span>Support & Maintenance</span></h2>
                </div>
                <div className={style.maintenance_support_content}>
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <section className="flex justify-between">
                                <h3>Retail</h3>
                                <Link href="/industries/industry-details">Read More</Link>
                            </section>
                        </li>
                        <li>
                            <section className="flex justify-between">
                                <h3>Healthcare</h3>
                                <Link href="/industries/industry-details">Read More</Link>
                            </section>
                        </li>
                        <li>
                            <section className="flex justify-between">
                                <h3>Fintech</h3>
                                <Link href="/industries/industry-details">Read More</Link>
                            </section>
                        </li>
                        <li>
                            <section className="flex justify-between">
                                <h3>Education</h3>
                                <Link href="/industries/industry-details">Read More</Link>
                            </section>
                        </li>
                        <li>
                            <section className="flex justify-between">
                                <h3>Hospitality</h3>
                                <Link href="/industries/industry-details">Read More</Link>
                            </section>
                        </li>
                        <li>
                            <section className="flex justify-between">
                                <h3>Tour & Travel</h3>
                                <Link href="/industries/industry-details">Read More</Link>
                            </section>
                        </li>
                        <li>
                            <section className="flex justify-between">
                                <h3>Transport</h3>
                                <Link href="/industries/industry-details">Read More</Link>
                            </section>
                        </li>
                        <li>
                            <section className="flex justify-between">
                                <h3>Insurance</h3>
                                <Link href="/industries/industry-details">Read More</Link>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}