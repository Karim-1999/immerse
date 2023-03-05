import { useEffect, useState } from "react";

export function ImmerseMetaStore() {
  const [scroll, setScroll] = useState();
  function handleScroll() {
    const position = window.pageYOffset;
    setScroll(position);
  }


  const style = {
    transform: `rotate(${scroll / 2}deg)`,
    transition: "transform 150ms ease",
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section meta-store-section">
      {/* <div className="section-bg">
                <div className="meta-store-section-background-shapes"></div>
                <div className="grain-bg"></div>
            </div> */}
      <div className="container">
        <div className="meta-store-component w-clearfix">
          <div className="imagediv">
            <img
              style={style}
              id="officialMeta"
              src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dca46a3e494dc_meta-partner-logo.png"
            />
          </div>
          <div className="meta-store-heading">
            #1&nbsp;language education app in the Metaverse
          </div>
          <div className="meta-store-content-wrapper">
            <div className="meta-store-image-wrapper">
              <img
                src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dcab356e494d4_img__meta-headset.png"
                loading="lazy"
                srcSet="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dcab356e494d4_img__meta-headset-p-500.png 500w, https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dcab356e494d4_img__meta-headset-p-800.png 800w, https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dcab356e494d4_img__meta-headset-p-1080.png 1080w, https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dcab356e494d4_img__meta-headset.png 1510w"
                sizes="(max-width: 479px) 90vw, (max-width: 767px) 93vw, (max-width: 991px) 85vw, 46vw"
                alt=""
                className="meta-store-quest-image"
              />
              <img
                src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dcafbe3e494b8_svg__meta-store-grid.svg"
                loading="lazy"
                alt=""
                className="meta-store-grid"
              />
            </div>
            <div className="meta-store-paragragh-wrapper">
              <p className="paragraph-large-bold">
                Immerse is now an official app on the Meta VR&nbsp;app store.
                <a
                  href="https://www.immerse.online/blog/meta-partners-with-immerse-to-reimagine-learning-in-the-metaverse"
                  target="_blank"
                  className="text-link"
                >
                  Read the news story here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
