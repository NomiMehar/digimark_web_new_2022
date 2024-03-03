import style from "./mvpBenefits.module.scss"

export default function MvpBenefits() {
    return(
        <div className={style.mvp_benefits_wrap}>
            <div className="container">
                <div className={style.mvp_benefits_list}>
                    <div className="section_title">
                    <h2><span>Benefits</span> оf MVP Development <br/>Services</h2>
                    <p>MVP is a powerful way to project development that <span>offers benefits</span> for new products and businesses alike. A few of the benefits you can expect when building with MVP</p>
                    </div>
                    <ul className="flex flex-wrap list-none">
                        <li>
                            <section>
                                <h3>Launch <br/>Quickly</h3>
                                <p>DigiMark is a place where innovation meets excellence- we are committed to transforming ideas into reality.</p>
                                <span>/01</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Test <br/>Viability</h3>
                                <p>Maximize business potential with an MVP, listen to your user's feedback, and make their wishes come true.</p>
                                <span>/02</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Fast <br/>Scaling</h3>
                                <p>Accelerate MVP growth with swift scaling! Seamlessly add extra features & optimize the product to perfection.</p>
                                <span>/03</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Cost <br/>Effectiveness</h3>
                                <p>Keep your costs low without investing in a failed project. Less cost means the ROI is easier.</p>
                                <span>/04</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Confirm the Idea & Potential</h3>
                                <p>Verify the business idea and get a proof of concept, Make it happen fast with MVP and see the magic unfold!</p>
                                <span>/05</span>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}