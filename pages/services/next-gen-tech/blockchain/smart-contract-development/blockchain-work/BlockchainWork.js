import style from "./blockchainWork.module.scss"

export default function BlockchainWork() {
    return(
        <div className={`flex flex-wrap direction-column ${style.blockchain_work}`}>
            <div className="container">
                <div className="section_title">
                    <h2><span>Some of our works</span></h2>
                    <p>Enjoy the benefits of owning a mobile application! Be relevant and competitive thanks to technology opportunities!</p>
                </div>
                <div className={`${style.blockchain_work_list}`}>
                    <ul className="flex flex-wrap list-none">
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}