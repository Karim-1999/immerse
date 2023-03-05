import "./languageButton.css";

export const LanguageButton = ({
    href = '#',
    text
}) => {
    return <a href={href} className="button-language card-btn">{text}</a>
}