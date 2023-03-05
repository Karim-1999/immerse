import "../../assets/css/mainstyle.css"
import { Footer } from "../Utilities/Footer/Footer";
import { Navbar } from "../Utilities/Navbar/Navbar";

import { ImmerseBg } from "./subImmerse/ImmerseBg";
import { ImmerseCards } from "./subImmerse/ImmerseCards";
import { ImmerseHead } from "./subImmerse/ImmerseHead";
import { ImmerseMetaStore } from "./subImmerse/ImmerseMetaStore";
import { ImmerseTestimonials } from "./subImmerse/ImmerseTestimonials";
import { SubscriptionForm } from "./SubscirptionForm";

export function Immerse() {
    return (
        <div className="wrapper">
            <Navbar />
            {/* Page starting */}
            <ImmerseBg />
            <ImmerseHead />
            <ImmerseMetaStore />
            <ImmerseTestimonials />
            <SubscriptionForm />
            <ImmerseCards />
            {/* footer */}
            <Footer
                title={"Meet you in the Metaverse"}
                btnText={"Go to the immerse Blog"}
                vidSrc={"https://www.dropbox.com/s/k2rdqpvp1xbb4av/Footer_4.mp4?raw=1"}
            />

        </div>
    )
}