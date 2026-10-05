import React, { useState } from "react";

function Hero() {
  const slides = [
    {
      image: "/images/hero1.jpeg",
      title: "ग्रामपंचायत काचकोली", 
    },
    {
      image: "/images/hero2.jpeg",
      title: "काचकोली गाव",
    },
    {
      image: "/images/hero3.jpeg",
      title: "निसर्गरम्य गाव",
    },
    {
      image: "/images/hero4.jpeg",
      title: "सुंदर आणि स्वच्छ काचकोली",
    },
    {
      image: "/images/work6.png",
      title: "हनुमान मंदिर",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Previous button
  const previousSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === 0
        ? slides.length - 1
        : previousSlide - 1
    );
  };

  // Next button
  const nextSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === slides.length - 1
        ? 0
        : previousSlide + 1
    );
  };

  // Dot click
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-slider">

      {/* ================================
          IMAGES
      ================================= */}

      <div className="hero-image-container">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >

            <img
              src={slide.image}
              alt={slide.title}
              className="hero-image"
            />

            <div className="hero-overlay"></div>

            <div className="hero-caption">
              {slide.title}
            </div>

          </div>
        ))}

      </div>


      {/* ================================
          PREVIOUS BUTTON
      ================================= */}

      <button
        type="button"
        className="hero-arrow hero-prev"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        ❮
      </button>


      {/* ================================
          NEXT BUTTON
      ================================= */}

      <button
        type="button"
        className="hero-arrow hero-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ❯
      </button>


      {/* ================================
          DOTS
      ================================= */}

      <div className="hero-dots">

        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            className={`hero-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}

      </div>

    </section>
  );
}

export default Hero;