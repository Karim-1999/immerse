import "./buttonPass.css";

export const ButtonPass = ({
    href = '#',
    text
}) => {
    return <div className="button-pass" >
        <a href={href} className="button-7-pass card-btn">{text}</a>
    </div >
}