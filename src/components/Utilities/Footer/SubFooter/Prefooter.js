export function Prefooter(props) {
    return (
        <div className="container">
            <div className="faq__footer">
                <div className="faq__footer--text">
                    <h2>{props.title}</h2>
                    <div>
                        <div className="trial-btn">
                            <a href="#" className="button-trial card-btn">{props.btnText}</a>
                        </div>
                    </div>
                </div>
                <div className="faq__footer--media">
                    <video autoPlay loop muted src={props.vidSrc}></video>
                </div>
            </div>
        </div>
    )
}