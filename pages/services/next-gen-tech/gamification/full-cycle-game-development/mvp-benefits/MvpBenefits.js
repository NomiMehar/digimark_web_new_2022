import style from "./mvpBenefits.module.scss"

export default function MvpBenefits() {
    return(
        <div className={style.mvp_benefits_wrap}>
            <div className="container">
                <div className={style.mvp_benefits_list}>
                    <div className="section_title">
                    <h2><span>Full Cycle</span> Game Development <br/>Services</h2>
                    <p>DigiMark developers offer the best and most <span>attractive game development</span> services and high quality.</p>
                    </div>
                    <ul className="flex flex-wrap list-none">
                        <li>
                            <section>
                                <h3>3D Game Development</h3>
                                <p>Our 3D services attract players outside the game environment. Get updates and trends about delivering the game solutions.</p>
                                <span>/01</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>PC Game Development</h3>
                                <p>Looking for protection in your PC games? Get our service & have experts with years of experience developing exceptional PC games.</p>
                                <span>/02</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Mobile Game Development</h3>
                                <p>Aspiring to have smart mobile games? Connect with our team to enjoy engaging games for iOS & Android platforms.</p>
                                <span>/03</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Unreal Engine Game Development</h3>
                                <p>Bring your vision to life by connecting with DigiMark Developers and make your gaming journey amazing.</p>
                                <span>/04</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Casual Games</h3>
                                <p>Wish to make a causal game that is not just appealing but fun too?
                                Well, we know how to make the one for you. Connect now!
                                </p>
                                <span>/05</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3> Unity Game Development</h3>
                                <p>Get the fun Unity game development service that levels up your gaming experience by adding 3D visualizations. </p>
                                <span>/06</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Technologies We Specialized in</h3>
                                <p>DigiMark Developers focuses on full-cycle game development with great teamwork and effective results. Take a look at our technologies stack in which we are specialized.</p>
                                <span>/07</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Full Cycle Game Dev</h3>
                                <p>We assist clients in every stage from designing to post-releasing support with the help of our professionals. Enjoy our customized full-cycle development services and run things smartly.</p>
                                <span>/08</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Game Co-Development</h3>
                                <p>Explore development opportunities with us and increase your team with skilled-level designers, programmers, and 2D/3D artists. Connect with the best experts.</p>
                                <span>/09</span>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Game Porting</h3>
                                <p>Grab the attention of the wider audience and add more features to the gameplay with the help of our expert porting services.</p>
                                <span>/10</span>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}