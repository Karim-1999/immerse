import "./SubFooter/style.css"

import { LastFooter } from "./SubFooter/Footer";
import { Prefooter } from "./SubFooter/Prefooter";
import { Separator } from "../Separator/Seprator";


export function Footer(props) {
    return (
        <>
            <Separator />
            <Prefooter
                title={props.title}
                btnText={props.btnText}
                vidSrc={props.vidSrc}
            />
            <LastFooter />
        </>
    )
}