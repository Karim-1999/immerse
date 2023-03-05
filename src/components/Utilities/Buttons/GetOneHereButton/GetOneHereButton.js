import "./getOneHereButton.css";

export const GetOneHereButton = ({
    href = '#',
    text
}) => {
    return <a href={href} className="button-get-one-here card-btn">{text}</a>
}