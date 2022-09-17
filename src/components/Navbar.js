import React, { useState }  from 'react'
import { Navbar as BNavbar } from 'react-bulma-components';
import { Link } from "react-router-dom";

function Navbar() {
    const [isActive, setisActive] = useState(false);

    return (
        <BNavbar>
            <BNavbar.Burger onClick={() => {setisActive(!isActive)}} className={`navbar-burger burger ${isActive ? "is-active" : ""}`} />
            <BNavbar.Menu className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <BNavbar.Container>
                    <BNavbar.Item renderAs={Link} to={"/"} >
                        Hem
                    </BNavbar.Item>
                    <BNavbar.Item renderAs={Link} to={"/count/original"}>
                        Räkna bilar
                    </BNavbar.Item>
                </BNavbar.Container>
            </BNavbar.Menu>
        </BNavbar>
    )
}

export default Navbar