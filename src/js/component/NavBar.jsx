import React from "react";

const NavBar = () => {
    return (
        <>
            <div className="container-fluid bg-dark  ">
                <div className="container bg-dark  ">
                    <div className="row">
                        <nav className="navbar navbar-dark bg-dark d-flex ">
                            <div className="container-fluid d-flex">
                                <a className="navbar-brand " href="#">Start Bootstrap</a>
                                <div className="justify-content-end">
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link ">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </nav>
                    </div>
                </div >
            </div>
        </>
    )
};

export default NavBar;