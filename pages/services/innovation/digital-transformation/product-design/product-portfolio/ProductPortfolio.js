import style from "./ProductPortfolio.module.scss"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/assets/images/services/pdesign1.png',
      thumbnail: '/assets/images/services/pdesign1.png',
    },
    {
      original: '/assets/images/services/pdesign2.png',
      thumbnail: '/assets/images/services/pdesign2.png',
    },
    {
      original: '/assets/images/services/pdesign3.png',
      thumbnail: '/assets/images/services/pdesign3.png',
    },
  ];

export default function ProductPortfolio() {
   
    return (
        <div className={`flex direction-column ${style.product_portfolio}`}>
                <div className="container">
                    <div
                        className={`section_title white ${style.title}`}
                    >
                        <h2>Our Product Design <span>Portfolio</span></h2>
                    </div>
                    <div className="image_gallery">
                    <ImageGallery items={images} thumbnailPosition="right" />
                    </div>
                </div>
          
        </div>
    )
}