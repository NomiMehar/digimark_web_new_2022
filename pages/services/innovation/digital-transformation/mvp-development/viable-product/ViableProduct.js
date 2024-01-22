import style from "./viableProduct.module.scss"

export default function ViableProduct() {
    return(
        <div className={style.viable_product_wrap}>
            <div className="container">
                <div className={`${style.section_title} section_title`}>
                    <h2>Why build a Minimum Viable Product?</h2>
                    <p>MVP (Minimum Viable Product) is the best approach for new product development, allowing you to test a hypothesis fast with no significant investment. MVP in software means a product with just enough features to satisfy early users. Therefore, you can quickly build your core product and launch it, substantially reducing time-to-market.</p>
                </div>
                <div className={style.viable_product}>
                    <ul className="list-none">
                        <li>
                            <p><span>Early idea validation</span> to limit unnecessary spending and <br/>employee effort</p>
                        </li>
                        <li>
                            <p>In case of failed idea feasibility test, <span>the budget can be <br/>saved for another project</span></p>
                        </li>
                        <li>
                            <p>Focus on top-priority features  <span>shorten the product's <br/>time-to-market</span></p>
                        </li>
                        <li>
                            <p><span>Seamless improvement</span> of MVP allows faster adoption of <br/> users' requirements and needs</p>
                        </li>
                        <li>
                            <p>In case of failed idea feasibility test, <span>the budget can be <br/> saved for another project</span></p>
                        </li>
                        <li>
                            <p><span>Early idea validation</span> to limit unnecessary spending and <br/> employee effort</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}