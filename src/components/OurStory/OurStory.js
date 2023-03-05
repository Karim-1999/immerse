import "./SubOurStory/style.css";
import "./SubOurStory/assets-our-story/style.css";

import { Footer } from "../Utilities/Footer/Footer";
import { Navbar } from "../Utilities/Navbar/Navbar";
import { Employe } from "./SubOurStory/Employe";
import { History } from "./SubOurStory/History";
import { OurstoryIntro } from "./SubOurStory/OurstoryIntro";
import { SliderLocation } from "./SubOurStory/SliderLocation";

export function OurStory() {
  return (
    <div className="wrapper">
      <Navbar />
      <OurstoryIntro />
      <History />
      <Employe />
      <SliderLocation />
      <Footer
        title={"Want to learn more?"}
        btnText={"Read our blog"}
        vidSrc={"https://www.dropbox.com/s/vw9e7iow7ftfs4r/Footer_6.mp4?raw=1"}
      />
    </div>
  );
}
