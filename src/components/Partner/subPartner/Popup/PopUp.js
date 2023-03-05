import React, { useEffect, useState } from "react";
import './PopUp.css';

const Pop = document.querySelector('.pop-up-wrapper')
function PopUp(props) {
    const [style, setStyle] = useState('');
    
    useEffect(() => {
        const displayGrid = props.display;
        setStyle(displayGrid);
    }, [props]);
    function handleClick(){
        setStyle('none');
        console.log(style)
    };

    return (
        <div className="pop-up-wrapper" style={{display: style}}>
            <div className="pop-up">
                <div className="pop-content">
                    <div className="pop-text">
                        <h3 className="pop-h2">Email sent!</h3>
                        <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="trial-btn">
                        <a href="" onClick={handleClick} className="button-trial card-btn">Done</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PopUp