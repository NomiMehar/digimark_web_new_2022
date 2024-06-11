import React,{useState} from 'react'
import style from './StandoutVideo.module.scss'
import Image from 'next/image'
import CareersModal from '../../../../../../components/careers-modal/CareersModal'
export default function StandoutVideo() {
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  function modalToggle() {
      setCareerModalOpen(!careerModalOpen);
  }
  return (
    <>
    <div className={style.bannerVideo}>
    <Image className={style.banner} src='/assets/images/services/videoBanner.svg' width={100} height={100} alt="videoBanner"/>
    <span className={style.overlay}></span>
    <div className={style.playBtn}>
    <Image className={style.play} onClick={modalToggle} src='/assets/images/services/playBtn.svg' width={100} height={100} alt="playBtn"/>
    {
      careerModalOpen === false ? "" : <CareersModal careerModal={false} onClick={modalToggle}/>
    }
    </div>
    </div>
    </>
  )
}
