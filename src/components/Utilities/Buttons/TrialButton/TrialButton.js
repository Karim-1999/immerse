import "./trialButton.css";

export const TrialButton = ({
    href = '#',
    text
}) => {
    return <div className="trial-btn">
        <a href={href} className="button-trial card-btn">{text}</a>
    </div>
}