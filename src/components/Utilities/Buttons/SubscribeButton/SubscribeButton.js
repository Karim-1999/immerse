import "./subscribeButton.css";

export const SubscribeButton = ({
    href = '#',
    text
}) => {
    return <div className="sub-button">
        <a href={href} className="button-subscribe card-btn">{text}</a>
    </div>
}