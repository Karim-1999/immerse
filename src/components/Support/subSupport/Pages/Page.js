import { Card } from "../Home/button-chat/Card";
import { Navbar } from "../Navbar/Navbar";
import { Aside } from "./Aside";

export const Page = ({ page }) => {
    return (
        <>
            <Navbar />
            <div className='secondary-page'>
                {page}
                <Aside />
            </div>
            <Card />
        </>

    )
}