
import React from 'react';

export function ImmerseCards() {
    // const [__style, setStyle] = React.useState([{
    //     transform: "scale3D(1, 1, 1)",
    //     blur: '0px',
    //     position: 'sticky',
    //     top: '20vh'
    // },{
    //     transform: "scale3D(1, 1, 1)",
    //     blur: '1px'
    // },{
    //     transform: "scale3D(1, 1, 1)",
    //     blur: '2px'
    // },{
    //     transform: "scale3D(1, 1, 1)",
    //     blur: '5px'
    // }
    // ]);
    // React.useEffect(() => {
    //     const stickyElements = document.querySelectorAll('.immerse-card');

    //     stickyElements.forEach((el, idx) => {
    //         const observer = new IntersectionObserver(
    //             (e) => {

    //                 const scrollYInitial = window.scrollY;

    //                 window.addEventListener('scroll', (ev) => {
    //                     let scrollYActual = window.scrollY;
    //                     if(scrollYInitial < scrollYActual){
    //                         //scrollYInitial : 100 = scrollYActual : x

    //                         const fadeValue = scrollYInitial / scrollYActual;
    //                         let styles = __style[idx-1];
    //                         if(styles){
    //                             const styleArray = [...__style];
    //                             const object = {transform: `scale3D(${fadeValue.toFixed(3).toString()}, ${fadeValue.toFixed(3).toString()}, ${fadeValue.toFixed(3).toString()})`}
    //                             styleArray[idx - 1] = object;
    //                             setStyle([...styleArray])
    //                         }
    //                     }
    //                 });


    //             }, {
    //                 threshold: 1.0
    //             }
    //         )

    //         observer.observe(el);
    //     })
    // }, [])

    return (
        <div className="container">
            <div className="immerse-card" id="1" style={{ position: "sticky", top: "25vh" }}/*style={__style[0]} */>
                <div className="text">
                    <div className="gradient">
                        <div className="button">
                            1
                        </div>
                    </div>
                    <h3>
                        CREATE A FREE TRIAL ACCOUNT
                    </h3>
                    <p>
                        Sign up, explore the platform and experience live VR language
                        classNamees FREE for 7 whole days.
                    </p>
                </div>

                <img src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dca3a35e494fc_headset.png"
                    alt="vr" />

            </div>

            <div className="immerse-card" id="2" style={{ position: "sticky", top: "25vh" }}>
                <div className="text">
                    <div className="gradient">
                        <div className="button">
                            2
                        </div>
                    </div>
                    <h3>Book a free orientation</h3>
                    <p>
                        We will show you how to move and interact
                        in VR, schedule classNamees and make the most of your membership.
                    </p>
                </div>

                <img src="https://assets.website-files.com/621fbf9cdd38f513503d27f2/625e0f22bad258865ec13b3a_Card%20Image%202.png"
                    alt="vr" />

            </div>

            <div className="immerse-card" id="3" style={{ position: "sticky", top: "30vh" }}>
                <div className="text">
                    <div className="gradient">
                        <div className="button">
                            3
                        </div>
                    </div>
                    <h3>
                        Start building fluency!
                    </h3>
                    <p>
                        Partecipate in classNamees,
                        receive personalized feedback and connect with other Members!
                    </p>
                </div>

                <img src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dca107de49522_meet-other-members.png"
                    alt="vr" />

            </div>
            <div className="btn">
                <div className="trial-btn">
                    <a href="#" className="button-trial card-btn">start your trial</a>
                </div>
            </div>
        </div>
    )
}