import style from "./cloudBenefits.module.scss"

export default function CloudBenefits() {
    return(
        <div className={style.benefits_cloud_wrapper}>
            <div className="container">
                <div className={`${style.section_title} section_title white`}>
                    <h2><span>Benefits of Cloud & DevOps</span> <br/>Services</h2>
                </div>
                <div className={style.benefits_cloud}>
                    <ul className="list-none flex flex-wrap">
                        <li><span>Easy Automation</span></li>
                        <li><span>Cloud Server Replication</span></li>
                        <li><span>Effective Monitoring</span></li>
                        <li><span>Reduced Costs</span></li>
                        <li><span>Rapid Deployment</span></li>
                        <li><span>Upfront Capacity Planning</span></li>
                        <li><span>Better Quality Control</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}