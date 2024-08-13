import style from "./ProductPortfolio.module.scss"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/assets/images/services/pdesign1.webp',
      thumbnail: '/assets/images/services/pdesign1.webp',
    },
    {
      original: '/assets/images/services/pdesign2.webp',
      thumbnail: '/assets/images/services/pdesign2.webp',
    },
    {
      original: '/assets/images/services/pdesign3.webp',
      thumbnail: '/assets/images/services/pdesign3.webp',
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