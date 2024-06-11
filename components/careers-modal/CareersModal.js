import style from "./careersModal.module.scss"
import crossImage from "../../public/assets/images/modal/cross.svg"
import fileUpload from "../../public/assets/images/company/file-upload.svg"
import Image from "next/image";
import React, {useState} from "react";
import whiteArrow from "../../public/assets/images/homepage/customer_talk/white-arrow.svg";

export default function CareersModal (props) {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
        {props.careerModal ? <> 
        <div className={style.modal_wrapper}>
            <div className={style.modal_content}>
                <div className={style.modal_body}>
                    <Image onClick={props.onClick} className={style.modal_close} width={21} height={21} src={crossImage} alt={crossImage}/>
                    <section>
                        <h2><span>Apply</span> Now</h2>
                        <form>
                            <ul className="list-none">
                                <li><input type="text" placeholder="Name*"/></li>
                                <li><input type="text" placeholder="Email"/></li>
                                <li><input type="text" placeholder="Phone Number"/></li>
                                <li><input type="text" placeholder="Front-end Developer" readOnly/></li>
                                <li>
                                    <textarea placeholder="Write your message..."></textarea>
                                    <label className={style.file_upload}><input type="file" onChange={handleChange}/><Image width={26} height={26} src={fileUpload} alt={fileUpload}/> Upload File</label>
                                </li>
                                <li><button className="contact_btn">Send Message <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></button></li>
                            </ul>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    </> : <>
    <div className={style.modal_wrapper}>
        <div className={style.modal_content}>
            <div className={style.modal_body}>
                <Image onClick={props.onClick} className={style.modal_close} width={21} height={21} src={crossImage} alt={crossImage}/>
                <section>
                    <video className={style.banner_video} autoPlay loop controls>
                    <source src="/assets/images/homepage/banner/intro.mp4" type="video/mp4" />
                </video>
                </section>
            </div>
        </div>
    </div>
    </> }
        </>
       
    )
}