import "./SubNavbar/nav.js"
import "./SubNavbar/style.css"

import { NavbarDesktop } from "./SubNavbar/NavbarDesktop";
import { NavbarMobile } from "./SubNavbar/NavbarMobile";

export function Navbar() {
    return (
        <>
            <NavbarMobile />
            <NavbarDesktop />
        </>
    )
}