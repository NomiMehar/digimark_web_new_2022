import style from "./engagementTools.module.scss";
import Image from "next/image";
import ManagementToolsData from "./ManagementToolsData.json";
export default function ManagementTools() {
  return (
    <div
      className={`flex flex-wrap direction-column ${style.engagement_tools}`}
    >
      <div className="container">
        <div className={`flex flex-wrap ${style.management_section}`}>
          <div className={style.heading}>
            <h2>
              Management <span>Tools</span>
            </h2>
            <p>
              We ensure transparency in software engineering processes and
              provide management tools to support that:
            </p>
          </div>
          <div className={`flex flex-wrap ${style.other_tools}`}>
            <ul className="flex flex-wrap list-none">
              <li></li>
              {ManagementToolsData.map(({ managementLogo }) => {
                return (
                  <li>
                    <Image src={managementLogo} width={100} height={100} alt="tool-img" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
