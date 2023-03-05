export function Aside(){
    return(
        <aside>
            <div className="support-search">
                <input type="text" id="search" name="search" placeholder="Search"/>
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="supp-menu">
                <h3>categories</h3>
                <ul>
                    <li className="list-menu"><a href="">About Immerse</a></li>
                    <li className="list-menu"><a href="">VR Setup</a></li>
                    <li className="list-menu"><a href="">Privacy and Security</a></li>
                </ul>
            </div>
        </aside>
    )
}