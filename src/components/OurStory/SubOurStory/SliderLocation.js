import { useState, useEffect } from "react";

export function SliderLocation() {
  const [imgWrapper, setImgWrapper] = useState(null);
  const width = 1000;

  useEffect(() => {
    setImgWrapper(document.querySelector(".slider-images"));
  }, [])
  function scrollRight() {
    imgWrapper.scrollBy(width, 0);
  }

  function scrollLeft() {
    imgWrapper.scrollBy(-width, 0);
  }

  return (
    <div className="container">
      <div className="slider">
        <div className="slider-title">
          <h2>Where we work</h2>
        </div>
        <div className="slider-images">
          <div className="image">
            <div className="text-overlay">
              <h3>USA Headquarters</h3>
              <p>39 Mallorca, Foothill Ranch, CA 92610</p>
            </div>
            <img
              src="https://assets.website-files.com/62b46e994f1dca4537e494a5/62fc281212847049900a607e_US%20HQ-p-1080.jpeg"
              alt=""
            />
          </div>
          <div className="image">
            <div className="text-overlay">
              <h3>Our Virtual World</h3>
              <p>In the Metaverse </p>
            </div>
            <img
              src="https://assets.website-files.com/62b46e994f1dca4537e494a5/62e804f4931a985ae10e837b_WelcomeDeck.png"
              alt=""
            />
          </div>
          <div className="image">
            <div className="text-overlay">
              <h3>Tokyo Headquarters</h3>
              <p>
                Shinjuku Park Tower N30F, 3-7-1 Nishishinjuku, Shinjuku-ku,Tokyo
                163-1030 Japan
              </p>
            </div>
            <img
              src="https://assets.website-files.com/62b46e994f1dca4537e494a5/62b46e994f1dcacafde494ee_Locations%20Image%203.png"
              alt=""
            />
          </div>
        </div>
        <div className="slider-buttons">
          <button id="slide-left" onClick={scrollLeft}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button id="slide-right" onClick={scrollRight}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
