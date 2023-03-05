import { useNavigate } from 'react-router-dom';

export function NavCareer() {
    const navigate = useNavigate();

    return (
        <div className="nav-career">
                <div style={{cursor: "pointer"} } className="logo-career" onClick={() => {navigate("/")}}>
                <img src="https://gallery-cdn.breezy.hr/e0f82619-8525-44a8-86bd-62edae54b915/Logo.png" alt="logo immerse" />
                </div>
                <ul className="nav-links">
                    <li className="gallery-link"><a href="">Gallery</a></li>
                    <li className="immerse-link"><a href="">Immerse web-site</a></li>
                    <li className="employee"><a href="">Employee</a></li>
                    <li className="linkedin"><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
        </div>
    )
}