import React, {useEffect} from "react";
import Link from "next/link";
import style from "./OurServices.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ServiceList from "./ServiceList.json";
import ServiceDetails from "./ServiceDetails.json";
import arrow from "../../../public/assets/images/homepage/who_we_are/arrow-right.svg"
import Image from "next/image";
import AOS from "aos";

export default function OurServices() {
  const handleMouseEnter = () => {
    document.body.classList.add('hovered');
  };
  const handleMouseLeave = () => {
    document.body.classList.remove('hovered');
  };
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={`flex direction-column ${style.our_services_main}`}>
      <div className={style.our_services}>
        <div className="container">
          <div className="main_section_title"
               data-aos="fade-up"
               data-aos-easing="ease-in-sine"
               data-aos-offset="100"
               data-aos-duration="1000"
          >
            <h2>
              <span>Digital Transformation</span> Services
            </h2>
          </div>
          <Tabs className={style.tabs_section}>
            <div className={style.side_data}>
              <TabPanel>
                <Tabs
                  className={`direction-row flex justify-between ${style.direction_column}`}
                >
                  <TabList
                    className={`list-none flex direction-column ${style.tabs_data_lists}`}
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                  >
                    {ServiceList.map(({ tabsName }, index) => {
                      return (
                        <Tab key={index} className={style.tabs_data_list}>
                          {tabsName}
                        </Tab>
                      );
                    })}
                  </TabList>
                  <div className={`w-100 ${style.detail_wrap}`}
                       data-aos="fade-left"
                       data-aos-easing="ease-in-sine"
                       data-aos-offset="200"
                       data-aos-duration="1000"
                  >
                    {ServiceDetails.map(
                      ({ tabsName, serviceData, allServicesLink,innerDate }, index) => {
                        return (
                          <TabPanel
                            key={index}
                            className={style.all_service_data}
                          >
                            <div
                              className={`flex flex-wrap w-100 direction-column ${style.grid_container_gap}`}
                            >
                              <div
                                className={`flex items-start w-100 ${style.tabs_name}`}
                              >
                                <h2>{tabsName}</h2>
                                {/* <Link
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={style.all_services} href={allServicesLink}
                                >
                                  All Services
                                  <Image src={arrow} alt={arrow} width={22} height={25} />
                                </Link> */}
                              </div>
                              <ul className={`list-none flex flex-wrap ${style.btns_wrapper}`}>
                                {innerDate.map(
                                    ({buttonText,buttonLink}, index) => {
                                      return (
                                          <li key={index}>
                                            <Link
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                href={buttonLink}
                                                className={`flex flex-between-center service_data ${style.service_data}`}
                                            >
                                              <span>{buttonText}</span>
                                              <Image src={arrow} alt={arrow} width={22} height={25} />
                                            </Link>
                                          </li>
                                      );
                                    }
                                )}
                              </ul>
                            </div>
                          </TabPanel>
                        );
                      }
                    )}
                  </div>
                </Tabs>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
