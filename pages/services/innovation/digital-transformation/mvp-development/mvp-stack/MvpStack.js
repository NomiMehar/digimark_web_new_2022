import style from "./mvpStack.module.scss"

export default function MvpStack() {
    return(
        <div className={style.mvp_stack_wrap}>
            <div className="container">
                <div className="section_title white">
                    <h2><span>Technology Stack</span> We Use</h2>
                </div>
                <div className={style.mvp_stack_list}>
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <h6>Mobile</h6>
                            <section>
                                <span>Swift</span>
                                <span>JAVA</span>
                                <span>Kotlin</span>
                                <span>Ionic</span>
                                <span>React Native</span>
                                <span>Flutter</span>
                            </section>
                        </li>
                        <li>
                            <h6>Backend</h6>
                            <section>
                                <span>Nodejs</span>
                                <span>JAVA</span>
                                <span>PHP</span>
                                <span>Python</span>
                            </section>
                        </li>
                        <li>
                            <h6>Frontend</h6>
                            <section>
                                <span>Angular</span>
                                <span>Vue.js</span>
                                <span>Next.js</span>
                                <span>React</span>
                                <span>Ember</span>
                            </section>
                        </li>
                        <li>
                            <h6>Databases</h6>
                            <section>
                                <span>ElasticSearch</span>
                                <span>Redis</span>
                                <span>PostgresSQL</span>
                                <span>MySQL</span>
                                <span>MongoDB</span>
                                <span>MariaDB</span>
                            </section>
                        </li>
                        <li>
                            <h6>Prototyping</h6>
                            <section>
                                <span>Figma</span>
                                <span>Adobe XD</span>
                                <span>Web flow</span>
                                <span>Miro</span>
                            </section>
                        </li>
                        <li>
                            <h6>Infrastructure</h6>
                            <section>
                                <span>AWS</span>
                                <span>DigitalOcean</span>
                                <span>Azure</span>
                                <span>Google Cloud Platform</span>
                                <span>Firebase</span>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}