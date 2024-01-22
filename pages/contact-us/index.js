import ContactBanner from "./contact-banner/ContactBanner";
import ContactCards from "./contact-cards/ContactCards";
import ContactLocation from "./contact-location/ContactLocation";
import ContactForms from "./contact-forms/ContactForms";

export default function ContactUs() {
    return(
        <>
            <ContactBanner
                breadText="Home"
                pageTitle="Let’s Talk"
                mainTitle={[<h1>Get In <span>Touch</span></h1>]}
            />
            <ContactCards/>
            <ContactForms/>
            <ContactLocation/>
        </>
    )
}