import { profiles } from "./HandleProfile"

export function Employe() {
    return (
        <div className="container">
            <div className="team">
                <div className="team-title">
                    <div className="team-title-overline">
                        OUR TEAM
                    </div>
                    <div className="team-title-heading">
                        <h2>MEET THE PEOPLE THAT BRING IMMERSE TO LIFE EVERYDAY</h2>
                    </div>
                    <div className="team-members">
                        <div className="team-members-profile-desktop">
                            {profiles.map((info, index) => {
                                return (
                                    <div className="profile" key={info + index}>
                                        <div className="profile-img">
                                            <img src={info.img} alt={`picture of ${info.name}`} />
                                        </div>
                                        <div className="profile-text">
                                            <p className="profile-text-name">{info.name}</p>
                                            <p className="profile-text-role">{info.role}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="team-members-profile-mobile">

                        </div>
                        <div className="team-members-button">
                            <div className="trial-btn" id="btn">
                                <a className="button-trial card-btn">view more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}