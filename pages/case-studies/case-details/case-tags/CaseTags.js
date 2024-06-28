// components/case-details/case-tags/CaseTags.js
import React from 'react';
import style from './caseTags.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import whiteArrow from '../../../../public/assets/images/homepage/customer_talk/white-arrow.svg';

export default function CaseTags({ tags }) {
    if (!tags) return null;
  const { industry, techStack, servicesUsed } = tags;
    return (
        <div className={style.case_tags_wrap}>
            <div className="container flex flex-wrap">
                <section>
                    <h2>Industry</h2>
                    <span>{industry}</span>
                </section>
                <section>
                    <h2>Technologies</h2>
                    <ul className="list-none flex flex-wrap">
                        {techStack.map((tech, index) => (
                            <li key={index}><span>{tech}</span></li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h2>Services Used</h2>
                    <ul className="list-none flex flex-wrap">
                        {servicesUsed.map((service, index) => (
                            <li key={index}><span>{service}</span></li>
                        ))}
                    </ul>
                    {/* Uncomment this section for the link if needed */}
                    {/* <Link href="#" className={style.contact_btn}>
                        Check our all services <Image src={whiteArrow} alt="white arrow" width={13} height={16} />
                    </Link> */}
                </section>
            </div>
        </div>
    );
}
