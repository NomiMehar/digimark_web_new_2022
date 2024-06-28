import React, {useEffect} from "react";
import OurProductsData from "./OurProductsData.json";
import style from "./OurProducts.module.scss";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OurProducts(props) {
    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(()=>{
        const elmnt = document.querySelectorAll('.item');
        const numberOfelmnt = document.querySelectorAll('.item').length;
        const activeClass = 'active';

        const repeat = (numberOfIterations, timeBetweenItereation, stuffToRepeat) => {
            let iterationCounter = 0;
            const repeater = () => {
                setTimeout( () => {
                    stuffToRepeat(elmnt[iterationCounter], activeClass);
                    iterationCounter++;
                    if (numberOfIterations === iterationCounter) {
                        iterationCounter = 0;
                    }
                    if (iterationCounter >= numberOfIterations) {
                        return;
                    }
                    repeater();
                }, 2500 * timeBetweenItereation);
            };
            repeater();
        };

        const addClassToElmnt = (elmnt, className) => {
            let elmntWithClassToRemove = document.getElementsByClassName(className);

            [...elmntWithClassToRemove].forEach((curentElmnt)=>{
                curentElmnt.classList.remove(className);
            });

            elmnt.classList.add(className);
        };

        repeat(numberOfelmnt, 1, addClassToElmnt);
    })

  return (
    <div className={`flex direction-column ${props.classProp} ${style.our_product}`}>
      <div className="container">
        <ul className="flex flex-wrap list-none">
            {OurProductsData.map(({ img }, index) => {
                return (
                    <li className="item" key={index} data-aos="zoom-in-right" data-aos-duration="1000">
                        <Image src={img} alt="products_img" width={266} height={94} />
                        </li>
                );
            })}
        </ul>
      </div>
    </div>
  );
}
