import Carousel from 'react-bootstrap/Carousel';
import {bannerImgs} from '../assets/constants';

const Banner = () => {
  return (
    <Carousel>
        {bannerImgs.map((banner,i) => {
            return (
                <Carousel.Item key={i}>
        <img
          className="d-block w-100"
          src={banner.src}
          alt={banner.alt}
        />
      </Carousel.Item>
            )
        })}
      
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src= {bannerImgs.banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {bannerImgs.banner3}
          alt="Third slide"
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Banner;