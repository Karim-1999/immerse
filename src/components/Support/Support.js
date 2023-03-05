import { Home } from "./subSupport/Home/Home";
import { Navbar } from "./subSupport/Navbar/Navbar";
// import { Page } from "./subSupport/Pages/Page";
import './subSupport/style.css'

export function Support(){
    return(
        <>
            <Navbar />
            <Home />
            {/* <Page /> */}
        </>
    )
}