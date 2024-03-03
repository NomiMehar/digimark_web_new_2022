import style from "./saasProducts.module.scss";
import saasProductList from "./SaasProductsList.json";
import saasProductsExampleList from "./SaasProductsExampleList.json";

export default function SaasProducts() {
    return(
        <div className={style.sass_product_wrapper}>
            <div className="container flex direction-column">
                <ul className={`${style.content_list} list-none items-end flex flex-wrap`}>
                    <li>
                        <div className={`section_title ${style.section_title}`}>
                            <h2>What is a <span>SaaS Product?</span></h2>
                            <p>A SaaS product is a <span>centralized software solution</span> that can be accessed on-demand & is specifically designed to drive business success. It starts with a <span>concept & evolves</span> through planning, utilizing unique ingredients to achieve its goals innovatively.</p>
                            <p>The three main components of SaaS development include:</p>
                        </div>
                    </li>
                    {
                        saasProductList.map(({listDescription,listTitle},index)=>{
                            return(
                                <li key={index}>
                                    <section>
                                        <h3>{listTitle}</h3>
                                        <p>{listDescription}</p>
                                    </section>
                                </li>
                            )
                        })
                    }
                </ul>
                <h4>SaaS Projects <span>Examples</span></h4>
                <ul className={`${style.example_list} list-none items-end flex`}>
                    {
                        saasProductsExampleList.map(({listTitle},index)=>{
                            return(
                                <li key={index}>
                                    <section>
                                        <h5>{listTitle}</h5>
                                    </section>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}