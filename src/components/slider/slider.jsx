import React, { useEffect, useState } from "react";
import "./slider.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  const [sliderVisible, setSliderVisible] = useState(true);
  const [image1, setImage1] = useState("images/slide1.jpg");
  const [image2, setImage2] = useState("images/slide2.jpg");
  const [image3, setImage3] = useState("images/slide3.jpg");
  useEffect(() => {
    const isSliderVisible = sessionStorage.getItem("sliderState");
    if (isSliderVisible !== null) {
      setSliderVisible(isSliderVisible === "true");
    }

    const storedImage1 = sessionStorage.getItem("image1Link");
    const storedImage2 = sessionStorage.getItem("image2Link");
    const storedImage3 = sessionStorage.getItem("image3Link");

    if (storedImage1) {
      setImage1(storedImage1);
    }
    if (storedImage2) {
      setImage2(storedImage2);
    }
    if (storedImage3) {
      setImage3(storedImage3);
    }
  }, []);

  return (
    <div className={`slider-section ${sliderVisible ? "visible" : "hidden"}`}>
      <Carousel>
        <div className="slide1">
          <img src={image1} alt="Slide 1" />
          <p className="legend">Slide 1</p>
        </div>
        <div className="slide2">
          <img src={image2} alt="Slide 2" />
          <p className="legend">Slide 2</p>
        </div>
        <div className="slide3">
          <img src={image3} alt="Slide 3" />
          <p className="legend">Slide 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
