import "./nowAvailableButton.css";

export const NowAvailableButton = ({
    href = '#',
    text
}) => {
    return <a href={href} className="button-now-available card-btn">{text}</a>
}