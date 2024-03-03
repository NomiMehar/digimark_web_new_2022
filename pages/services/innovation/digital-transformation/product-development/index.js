import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../mobility/android-app-development/faq/Faqs'
import CompanyResults from "./company-results/CompanyResults";
import StreamLine from "./streamline/StreamLine";
import ProductDevService from "./product-dev-service/ProductDevService";
import ProductIndustries from "./product-industries/ProductIndustries";
import ProductDelegate from "./product-delegate/ProductDelegate";
import technologiesList from "../web-development/tools-technologies/ToolsTechnologiesList.json";
import ToolsTechnologies from "../web-development/tools-technologies/ToolsTechnologies";
import SoftwareProductsProcess from "./software-products-process/SoftwareProductsProcess";
import PortfolioProducts from "./portfolio-of-products/PortfolioProducts";
import ProTechnologies from "./pro-technologies/ProTechnologies";
import softwareProductsProcessLists from "./software-products-process/softwareProductsProcessList.json";
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
        <MobilityBanner
           classes="product_banner_development"
           dynamicBanner={true}
           breadcrumParent="Innovation"
           breadcrumChild="Product Development"
           bannerTitle={[
               <span>
                    <strong>Software Product</strong>
               </span>,  <br/> ," Development Services"
           ]}
           bannerTextWrap={[
               <p><span>Full-cycle software product development services</span> that benefit business modules & make you win the race.</p>,
           ]}
        />
        <CompanyResults/>
        <StreamLine/>
        <ProductDevService/>
        <ProductIndustries/>
        <ProductDelegate/>
        <ProTechnologies/>
        <SoftwareProductsProcess
        softwareProductsProcessList={softwareProductsProcessLists}
        />
        <PortfolioProducts/>
        <Faqs
            extraClass="bgColor"
        />
        <GetQuote
            classProp="chnageBgColor"
        />
   </div>
  </>
  )
}
