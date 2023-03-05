import { SearchFun } from "./SearchFun"

export function Search() {
    return (
        <>
            <div className="support-greeting">
                <h1>👋 Hey there! How can we help?</h1>
                <div className="supp-container-search-bar">
                    <div className="support-search">
                        <div>
                            <input type="text" id="search" name="search" placeholder="Search the knowledge base" onChange={SearchFun}/>
                                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i>
                                    <p>Search</p>
                                </button>
                        </div>
                        <div className="supp-search-list">
                            <ul>
                                <li className="links"><a href="">How do I set up Immerse?</a></li>
                                <li className="links"><a href="">What languages can I learn in Immerse?</a></li>
                                <li className="links"><a href="">What is Immerse?</a></li>
                                <li className="links"><a href="">Will I be talking to real people?</a></li>
                                <li className="links"><a href="">Do I need a VR headset to use Immerse?</a></li>
                                <li className="links"><a href="">What is an Immerse "className"?</a></li>
                                <li className="links"><a href="">Can I start learning with no experience in the language?</a></li>
                                <li className="links"><a href="">Where in real life do I set up for an Experience?</a></li>
                                <li className="links"><a href="">How do i start a Free Trial?</a></li>
                                <li className="links"><a href="">How do I join a className?</a></li>
                                <li className="links"><a href="">I am not able to press "confirm" when paying for theapplication</a></li>
                                <li className="links"><a href="">How do I track my progress?</a></li>
                                <li className="links"><a href="">I had a problem with my purchase</a></li>
                                <li className="links"><a href="">How do I change my appearance in Immerse?</a></li>
                                <li className="links"><a href="">How do I change my appearance in Immerse?</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}