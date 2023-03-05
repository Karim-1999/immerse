import { useNavigate } from "react-router-dom"
import { Card } from "./button-chat/Card";

export function Questions() {
    const navigate = useNavigate();
    return (
        <>
            <div className="support-questions">
                <a href="" className="sup-link-title" onClick={()=> {navigate('/support/general-qn')}}>General Questions</a>
                <div className="sup-grid">
                    <div className="support-about">
                        <h3>About Immerse</h3>
                        <a href="#" className="support-articles">8 articles</a>
                    </div>
                    <div className="support-about">
                        <h3>VR Setup</h3>
                        <a href="#" className="support-articles">3 articles</a>
                    </div>
                    <div className="support-about">
                        <h3>Privacy and Security</h3>
                        <a href="#" className="support-articles">1 articles</a>
                    </div>
                </div>


                <a href="" className="sup-link-title" onClick={()=> {navigate('/support/my-membership')}}>My Membership</a>
                <div className="sup-grid">
                    <div className="support-about">
                        <h3>My Dashboard</h3>
                        <a href="#" className="support-articles">4 articles</a>
                    </div>
                    <div className="support-about">
                        <h3>Vr Application</h3>
                        <a href="#" className="support-articles">7 articles</a>
                    </div>
                    <div className="support-about">
                        <h3>Profile Setting</h3>
                        <a href="#" className="support-articles">4 articles</a>
                    </div>
                    <div className="support-about">
                        <h3>Payment</h3>
                        <a href="#" className="support-articles">3 articles</a>
                    </div>
                </div>


                <a href="" className="sup-link-title" onClick={()=> {navigate('/support/feedback')}}>Troubleshooting & Feedback</a>
                <div className="sup-grid">
                    <div className="support-about">
                        <h3>Troubleshooting</h3>
                        <a href="#" className="support-articles">5 articles</a>
                    </div>
                    <div className="support-about">
                        <h3>Feedback/Requests</h3>
                        <a href="#" className="support-articles">4 articles</a>
                    </div>
                    <div className="support-about">
                        <h3>App Update Log</h3>
                        <a href="#" className="support-articles">2 articles</a>
                    </div>
                </div>
            </div>
            <div className="footer-support">
                <p>© Immerse 2022. Powered by Help Scout</p>
            </div>

            <Card />

            {/* button open card */}

            {/* <div className="supp-chat">
                <button className="supp-open-chat"><i className="fa-regular fa-comment"></i><i className="fa-solid fa-xmark"></i></button>
            </div> */}

            {/* contact card */}

            {/* <div className="supp-chat-card">
                
                <div className="top-card">
                    <div className="card-title">Send a message</div>
                    <div className="profile-photo">
                        <img src="../assets/card-supp-img.png" alt="profile image of card"/>
                    </div>
                    <div className="first-div">How can we help?</div>
                    <div className="sec-div">We usually respond in a few hours</div>
                </div>
            
                <div className="bottom-card">
                    <div className="form">
                        <div className="form-name">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="form-subject">
                            <label for="subject">Subject</label>
                            <input type="text" name="subject" id="subject"/>
                        </div>
                        <div className="form-email">
                            <label for="email">Email address</label>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div className="form-text">
                            <label for="text">How can we help?</label>
                            <input type="text" name="text" id="text"/>
                                <div className="form-icons">
                                    <button className="icon-btn"><i className="fa-solid fa-image"></i></button>
                                    <button className="icon-btn"><i className="fa-regular fa-face-smile"></i></button>
                                </div>
                        </div>
                        <button type="submit">Send a message</button>
                    </div>
                </div>
            </div> */}
        </>
    )
}