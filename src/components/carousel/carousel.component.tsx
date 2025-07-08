import React, {useEffect, useState} from "react";
import "./carousel.style.css";
//this is how it would look like if the props aren't in a separate file
interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({images}) => {

  const [activeIndex, setActiveIndex] = useState(0);


// Function for switch effect all 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  });

// Switches to current displayed dot
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

// Goes to next slide
  const goToNextSlide = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

// Mapping over each Image to get slides an dots, part of this was done with help from Stack Overflow
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
