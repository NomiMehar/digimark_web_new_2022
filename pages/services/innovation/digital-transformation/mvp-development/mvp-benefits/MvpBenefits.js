import style from "./mvpBenefits.module.scss"

export default function MvpBenefits() {
    return(
        <div className={style.mvp_benefits_wrap}>
            <div className="container">
                <div className={style.mvp_benefits_list}>
                    <div className="section_title">
                    <h2><span>Benefits</span> оf MVP Development <br/>Services</h2>
                    <p>MVP is a highly advantageous method of developing and delivering a project. Here is a list of <span>MVP benefits</span> you get when building a new product, or your business.</p>
                    </div>
                    <ul className="flex flex-wrap list-none">
                        <li>
                            <section>
                                <h3>Launch <br/>Quickly</h3>
                                <p>You don’t have to waste time and build a fully-fledged product. Only the core functionality is created.</p>
                                <span>/01</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Test <br/>Viability</h3>
                                <p>With an MVP, you're in the perfect position to scale. Listen to what people want and then bring it to life.</p>
                                <span>/02</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Fast <br/>Scaling</h3>
                                <p>Fast scaling allows you to add extra features and optimize the MVP in the quickest and most convenient way</p>
                                <span>/03</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Cost <br/>Effectiveness</h3>
                                <p>MVP is the fastest development option to get a ready-to-release product. Less cost means the ROI is easier.</p>
                                <span>/04</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Confirm the Idea & Potential</h3>
                                <p>Do you want to test your idea in the market? With MVP, you can quickly implement your main idea and see the results.</p>
                                <span>/05</span>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}