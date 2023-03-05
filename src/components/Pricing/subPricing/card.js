import { TrialButton } from "../../Utilities/Buttons/TrialButton/TrialButton";

function Card(props) {
    return (<div className="template">
        <div className="card-header">
            <p><strong>{props.title}</strong></p>
            <p>{props.subTitle}</p>
        </div>
        <div className="card-body">
            <div className="body-margin">
                <div>
                    <strong>{props.bodyTitle}</strong>
                </div>
                <h3>{props.bodySubTitle}<span>{props.extra}</span></h3>
                <p>{props.month}</p>
            </div>
            <div className="list-style">
                <TrialButton text={'Get Started'} />
                <ul>
                    <li>
                        <p>includes all features below</p>
                    </li>
                </ul>
            </div>
        </div>
    </div >)
}

export default Card;