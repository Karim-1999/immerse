import { TrialButton } from "../../Utilities/Buttons/TrialButton/TrialButton";
import Other from "./other";

function Section() {
    return <div className="section-container">
        <div className="container">
            <p className="green-paragraph">all tiers include</p>
            <h5 className="h5-section-class">unlimited access to:</h5>
            <ul className="grid-template">
                <Other
                    title="your HOME ROOM SPACE"
                    subTitle="where you can review notes and customize your avatar"
                />
                <Other
                    title="personalized feedback"
                    subTitle="from your instructor after every lesson"
                />
                <Other
                    title="conversation practice"
                    subTitle="with other learners from around the world"
                />
                <Other
                    title="our growing library"
                    subTitle="of discoverable words and phrases hidden within all our locations"
                />
                <Other
                    title="immersive locations"
                    subTitle="where you can practice building fluency with other members."
                />
                <Other
                    title="free community events"
                    subTitle="for practicing language and sharing culture with others"
                />
                <Other
                    title="Discord Channel"
                    subTitle="access to our official Immerse Member Community Discord Channel"
                />
                <Other
                    title="personal 3D backpack"
                    subTitle="your own personal 3D backpack full of learning tools, a camera, and more!"
                />
            </ul>
            <div style={{marginTop: 48}}>
                <TrialButton text='Get started for free' />
            </div>
        </div>
    </div>
}

export default Section;