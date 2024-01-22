import Link from "next/link";
import style from "../Header.module.scss";
import Image from "next/image";

export default function TopStripInfo() {
    const handleMouseEnter = () => {
        document.body.classList.add('hovered');
    };
    const handleMouseLeave = () => {
        document.body.classList.remove('hovered');
    };
  return (
      <ul className={`list-none flex-between-center ${style.contact_section}`}>
        <li className="flex items-center">
          <Image width={43} height={43}
              src="/assets/images/header/contactUs.svg"
              alt="contactUs"
          />
          <section className="flex direction-column">
            <span>Contact us</span>
            <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href="tel:+14073734745"
            >+1 4073734745</Link>
          </section>
        </li>
        <li className="flex items-center">
          <Image width={43} height={43} src="/assets/images/header/question.svg" alt="question" />
          <section className="flex direction-column">
            <span>Have a question?</span>
            <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href="mailto:info@digimarkdevelopers.com"
            >
              info@digimarkdevelopers.com
            </Link>
          </section>
        </li>
      </ul>
  );
}
