import './buttonNumber.css';

export const ButtonNumber = ({
    href = '#',
    text
}) => {
    return (<div className="card-number">
        <a href={href} className="button-number card-btn">{text}</a>
    </div>)
}