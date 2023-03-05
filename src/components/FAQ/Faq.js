import { Footer } from "../Utilities/Footer/Footer";
import { Navbar } from "../Utilities/Navbar/Navbar";
import { FaqAns } from "./subFAQ/QN";

import "./qn-btn"
import "./style.css"

export function Faq() {
    return (
            <div className="wrapper">
                <Navbar />
                <FaqAns />
                <Footer
                    title={"Meet you in the Metaverse"}
                    btnText={"Go to the Immerse Blog"}
                    vidSrc={"https://www.dropbox.com/s/vw9e7iow7ftfs4r/Footer_6.mp4?raw=1"}
                />
            </div>
    )
}