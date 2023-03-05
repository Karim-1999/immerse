import '../../../subSupport/style.css';

import { useState } from "react"
import emailjs from "emailjs-com"
import { CardButton } from "./CardButton"

export function Card() {
    const [click, setclick] = useState(true);
    const [style, setStyle] = useState('');
    const [wrapper, setWrapper] = useState('none');
    // Click toggle
    function clickToggle() {
        setclick(current => !current);
        CardButton()
    }


    //send form to database
    function submitForm(e) {
        e.preventDefault();
        setStyle('none');
        setWrapper('flex');
        emailjs.sendForm("service_nawfksp", "template_qf4b2fh", e.target, "ZKX9Xt1UaNb3P15Ad")
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }

    const wrapperStyle = {
        display: wrapper,
        flexDirection: 'column',
        padding: '20px',
        fontSize: '1.5rem',
        placeContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <>
            {/* button open card */}

            <div className="supp-chat">
                <button className="supp-open-chat" onClick={clickToggle}>{click ? <i className="icon fa-regular fa-comment"></i> : <i className="icon fa-solid fa-xmark"></i>}</button>
            </div>

            {/* contact card */}

            <div className="supp-chat-card">
                {/* top card */}
                <div className="top-card">
                    <div className="card-title">Send a message</div>
                    <div className="profile-photo">
                        <img src="https://d33v4339jhl8k0.cloudfront.net/users/618476.291244.png" alt="profile image of card" />
                    </div>
                    <div className="first-div">How can we help?</div>
                    <div className="sec-div">We usually respond in a few hours</div>
                </div>
                {/* Bottom card */}
                <div className="bottom-card">
                    <form onSubmit={submitForm} className="form" style={{ display: style }}>
                        <div className="form-name">
                            <label for="name">Name</label>
                            <input type="text" name="username" id="name" />
                        </div>
                        <div className="form-subject">
                            <label for="subject">Subject</label>
                            <input type="text" name="subject" id="subject" />
                        </div>
                        <div className="form-email">
                            <label for="email">Email address</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form-text">
                            <label for="text">How can we help?</label>
                            <input type="text" name="message" id="text" />
                            <div className="form-icons">
                                <button className="icon-btn"><i className="fa-solid fa-image"></i></button>
                                <button className="icon-btn"><i className="fa-regular fa-face-smile"></i></button>
                            </div>
                        </div>
                        <button type="submit" >Send a message</button>
                    </form>
                    <div className='support-conferm' style={wrapperStyle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><g><path class="hsds-illos-plane__c-Illo__pathFill hsds-illos-plane__c-Illo__pathFillSecondary" d="M41.5,38l-28-22l37,17.1L48.1,51L37.4,40.8L41.5,38z M61.9,56.5c-0.5-0.3-0.6-0.9-0.3-1.4 c0.3-0.5,0.9-0.6,1.4-0.3l3.6,2.1c0.5,0.3,0.6,0.9,0.3,1.4c-0.3,0.5-0.9,0.6-1.4,0.3L61.9,56.5z M57.4,59.8l1.8,3.6 c0.6,1.2-1.2,2.1-1.8,0.9l-1.8-3.6C55,59.5,56.8,58.6,57.4,59.8z M64.5,48h4c1.3,0,1.3,2,0,2h-4C63.2,50,63.2,48,64.5,48z"></path><path class="hsds-illos-plane__c-Illo__pathFill hsds-illos-plane__c-Illo__pathFillPrimary" d="M37.3,42.1L28,47.5c-2.3,1.4-5.3,0.5-6.4-2l-14-32c-0.2-0.3-0.2-0.6-0.1-0.9c0-0.1,0.1-0.1,0.1-0.2 c0.2-0.3,0.6-0.5,1.1-0.4l51.6,11.7c2.4,0.5,2.9,3.8,0.7,4.9l-9.5,5l-2.4,17.4c0,0.1,0,0.1-0.1,0.2c-0.1,0.4-0.4,0.7-0.7,0.8 c-0.3,0.1-0.7,0-0.9-0.3L37.3,42.1L37.3,42.1z M39.1,41.1l6,5.8l-3.3-7.3C41.8,39.5,39.1,41.1,39.1,41.1z M47.6,47.6l1.9-13.9 L17.3,18.3l25.6,19.1c0.1,0.1,0.2,0.2,0.3,0.4L47.6,47.6z M50.5,32l9.6-5.1c0.5-0.3,0.4-1-0.2-1.2L17,16C17,16,50.5,32,50.5,32z M10.9,16.1l12.5,28.7c0.6,1.3,2.2,1.8,3.5,1L40.3,38L10.9,16.1L10.9,16.1z"></path></g></svg>
                        <p style={{color: 'black'}}>
                            Message sent!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}