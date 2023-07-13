import React from "react";
import { Link } from "react-router-dom";

// fontawesome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="inner">
                        <h2 className="ir_so">헤더</h2>
                        <div className="header">
                            <nav className="nav">
                                <ul className="link_list">
                                    <li className="header_link">
                                        <Link to={"/"} className="home">
                                            <FontAwesomeIcon icon={faHouse} />
                                        </Link>
                                    </li>
                                    <li className="header_link">
                                        <Link to={"/"} className="logo">Post</Link>
                                    </li>
                                    <li className="header_link">
                                        <Link to={"/Profile"} className="my_profile">
                                            <FontAwesomeIcon icon={faUser} />
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;