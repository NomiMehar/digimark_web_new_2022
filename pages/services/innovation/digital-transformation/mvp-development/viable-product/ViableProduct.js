import style from "./viableProduct.module.scss"

export default function ViableProduct() {
    return(
        <div className={style.viable_product_wrap}>
            <div className="container">
                <div className={`${style.section_title} section_title`}>
                    <h2>Why build a Minimum Viable Product?</h2>
                    <p>In a Software App Development Company, an MVP is a product with the essential features required to satisfy early users. As a result, the core product can be rapidly developed and launched, significantly reducing the time-to-market. Early idea validation to limit unnecessary spending and employee effort which is amazing.</p>
                </div>
                <div className={style.viable_product}>
                    <ul className="list-none">
                        <li>
                            <p><span>Validate assumptions</span> with real users</p>
                        </li>
                        <li>
                            <p>Test product feasibility with <span> minimal investment</span></p>
                        </li>
                        <li>
                            <p><span>Refine product</span> to better meet customer needs</p>
                        </li>
                        <li>
                            <p><span>Reduce</span> time-to-market</p>
                        </li>
                        <li>
                            <p>Identify <span>potential problems</span> early</p>
                        </li>
                        <li>
                            <p><span>Attract investors</span> with a proven concept</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}