import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light border border-dark shadow">
                <div className="container">
                    <Link className="navbar-brand" href="#"><h1>Yash<b style={{ fontSize: "50px", color: "red" }}>.</b> </h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/skills"}>Skills</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={"/about"}>About</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to={"/projects"}>Projects</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={"/contact"}>Contact</Link>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" target='_blank' href='https://yashadmin.netlify.app/'>Admin</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <a className='btn btn-dark text-white' data-bs-toggle="tooltip" data-bs-placement="right" title="matadeyash1@gmail.com" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=matadeyash1@gmail.com" target="_blank">Let's Connect</a>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
