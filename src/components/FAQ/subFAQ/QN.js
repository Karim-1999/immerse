import { qnData } from "./qnData"
import { useState } from "react";

export function FaqAns() {
    const [ showStatus, setShowStatus ] = useState(qnData.show);
    // const active = showStatus === true ? "clicked": null;
    const [indexClicked, setIndexClicked] = useState(null);

    // const onClickHandler = (i) => {
    //     setShowStatus(!showStatus)
    //     setIndexClicked(i)
    //   };

    return (
        <>
            <div className="container">
                <div className="faq-heading">
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>
            <div className="container">
                <div className="faq">
                    <div className="faq__list">
                        {qnData.map((info, index) => {
                            return(
                                <div className={`${indexClicked === index && "clicked"} faq__list--qn`} name={index} onClick={() => indexClicked === index ? setIndexClicked(null) : setIndexClicked(index)  } key={info+index}>
                                <div className="faq__list--qn--sect">
                                    <h3>{info.qn}</h3>
                                    <div className="more">
                                        <div className="more--plus" id="button">
                                            <svg id="plus" width="33" height="33" viewBox="0 0 33 33" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.638672" y="13.9297" width="30.6087" height="4.52174" fill="currentColor">
                                                </rect>
                                                <rect x="18.2041" y="0.88623" width="30.6087" height="4.52174"
                                                    transform="rotate(90 18.2041 0.88623)" fill="currentColor"></rect>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <p className="paragraph" id="text">{info.answer}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}