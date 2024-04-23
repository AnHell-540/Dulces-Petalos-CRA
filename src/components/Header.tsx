import Breadcrumbs from "./Breadcrumbs"
import Logo from "../assets/DP-1.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div id="header">
                <div id="container-logo">
                    <Link to='/home'>
                        <img src={Logo} alt="Logo de la empresa" id="logo" />
                    </Link>
                </div>
            </div>
            <div id="breadcrumbs">
                <Breadcrumbs />
            </div>
        </>)
}

export default Header