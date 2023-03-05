import { generalQuestions } from "./Qn";
import { useNavigate } from 'react-router-dom';

export function GeneralQn() {
    const navigate = useNavigate();

    return (
        <>
            {/* <Navbar /> */}
            <div className="general-page-shadow">
                {/* <img src="https://images-ext-2.discordapp.net/external/mSNwwsKLgl8bfm9Uv6TKIceno40poPE1grAZaM9Pa9A/https/d3eto7onm69fcz.cloudfront.net/assets/img/bg-content2.png" alt="" /> */}
                <div className="general-page">
                    <h1 className="general-title">Most Popular Articles</h1>
                    <ul>
                        {generalQuestions.map((array, index) => {
                            return (
                                <li className="list-link" key={array + index}>
                                    <i onClick={() => {navigate("/support/question")}} className="fa-regular fa-file-lines"></i><a href={array.link} >{array.qn}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}