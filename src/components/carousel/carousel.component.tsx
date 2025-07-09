import React, {useEffect, useState} from "react";
import "./carousel.style.css";
interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({images}) => {

  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  return (
      <div className="carousel">
        <div className="carousel__slide">
          {images.map((_, index) => (
              <div
                  key={index}
                  className={`carousel__image-container ${index === activeIndex ? 'active' : index === (activeIndex + 1) % images.length ? 'next' : 'previous'}`}
              >
                <img src={images[index]} alt={`Slide ${index + 1}`}/>
              </div>
          ))}
        </div>
        <div className="carousel__dots">
          {images.map((_, index) => (
              <span
                  key={index}
                  className={`carousel__dot ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
              ></span>
          ))}
        </div>
      </div>
  );
};

export default Carousel;
