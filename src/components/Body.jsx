import React from 'react';
import profilePic from "../assets/profile.png";
import mern from "../assets/mern.png";
import resume from "../assets/resume.pdf"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiLogoWhatsapp } from "react-icons/bi"
const Body = () => {
    const [isHovered, setIsHovered] = useState(false);
    let navigate = useNavigate()
    const handleHover = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleClick = () => {
        const phoneNumber = "+919420915607";
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, "_blank");
    };
    return (
        <div style={{ background: "radial-gradient(var(--faintblue), var(--faintgreen))" }} className="vh-100">
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-lg-6 mt-5 text-center animate__animated animate__bounceIn">
                        <img
                            src={profilePic}
                            style={{ height: "300px", width: "300px", borderRadius: "50%" }}
                            className="img-fluid border border-2 border-dark shadow"
                            alt=""
                        />
                        <br />
                        <br />
                        <a href="https://www.github.com/yashmatade" target='_blank' className='animate__animated animate__fadeInUp btn btn-dark text-white me-4 mb-3 shadow ms-3'><i class="fa fa-github fa-lg" aria-hidden="true"></i>
                        </a>
                        <button className='btn btn-warning  mb-3 me-4 shadow animate__animated animate__fadeInUp'>
                            <a
                                href={resume}
                                download="Yash's Resume"
                                target="_blank"
                                rel="noreferrer"
                                className='text-decoration-none text-dark'
                            >
                                <i class="fa fa-lg fa-download" aria-hidden="true"></i>
                            </a>
                        </button>
                        <button onClick={() => navigate("/projects")} className='btn btn-danger text-white mb-3 shadow me-4 animate__animated animate__fadeInUp'><i class="fa fa-lg fa-briefcase" aria-hidden="true"></i>
                        </button>
                        <a href="https://www.linkedin.com/in/yash-matade-aaa159143/" target='_blank' className='animate__animated  animate__fadeInUp btn btn-primary text-white  mb-3 shadow'><i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                        </a>
                        <button className='animate__animated  animate__fadeInUp btn btn-light ms-3 text-white  mb-3 shadow' onClick={handleClick}>
                            <BiLogoWhatsapp color='green' size={22} />
                        </button>
                    </div>
                    <div className="col-lg-6 text-center mt-5">
                        <h1 className='animate__animated animate__fadeInLeft'>Hi! I am Yash Matade </h1>
                        <h1>
                            <span
                                className={`badge bg-dark rounded animate__animated animate__fadeInRight rounded-pill p-4 fh-300 text-white shadow moveable ${isHovered ? 'return' : ''}`}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleMouseLeave}
                            >
                                MERN Full Stack Developer
                            </span>
                        </h1>
                        <p className='animate__animated animate__fadeInLeft'> Designing and Developing MERN web apps From last 2 years</p>
                        <img src={mern} className='animate__animated animate__fadeInRight' style={{ height: "150px" }} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Body;
