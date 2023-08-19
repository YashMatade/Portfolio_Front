import React from 'react'
import others from "../assets/crypto.png";
import { useState } from 'react';
import { useEffect } from 'react';
import { getProjects } from '../Networks/api';
import Strings from '../Networks/Strings';
import { useNavigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
const Projects = () => {
    const [data, setData] = useState();
    let navigate = useNavigate()
    useEffect(() => {
        getProjects().then((res) => {
            if (res.err === 200) {
                setData(res.data)
                console.log(res.data);
            }
        })
    }, []);
    return (
        <div className='vh-100' style={{ background: "radial-gradient(var(--faintblue), var(--faintgreen))" }}>
            <div className="container">
                <div className="row">
                    <h2 className='text-center mt-2'>
                        <div
                            className={`badge bg-dark rounded rounded-pill pt-3 pb-3 ps-5 pe-5 fh-300 text-white shadow moveable`}
                        >
                            Projects
                        </div>
                    </h2>
                    {
                        data ? (<>
                            {
                                data?.map((project, key) => {
                                    return <div className="col-lg-4 mt-5  animate__animated animate__backInDown" >
                                        <div className="image-container" style={{ borderRadius: "20px" }}>
                                            <iframe src={project.projecturl} loading='yes' width={"100%"} scrolling='no' height={"100%"} frameborder="0"></iframe>
                                            <div className="image-info p-2">
                                                <h5>{project.projectName}</h5>
                                                <p>{project.description}</p>
                                            </div>
                                        </div>
                                        <div className='card' style={{ backgroundColor: "yellow", zIndex: "999", marginTop: "-20px", borderRadius: "0 0 20px 20px" }}>
                                            <div className="card-body  shadow" style={{ borderRadius: "0 0 20px 20px" }}>
                                                <div className='d-flex flex-column align-items-center justify-content-center '>
                                                    <h5 className="card-title mb-3 text-white ps-3 pe-3 pt-1 pb-1 rounded-pill  bg-dark">
                                                        <a target='_blank' href={project.projecturl} className='text-white'>
                                                            <i class="fa fa-angle-double-right" aria-hidden="true"></i>&nbsp;
                                                            {project.projectName}
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div className=" d-flex justify-content-center" style={{ height: "100px" }}>
                                                    {
                                                        project.techUsed.map((p, key) => {
                                                            return <span style={{ fontSize: "15px", height: "25px" }} className="badge badge-lg bg-dark text-white me-1 mb-1" key={key}>{p}</span>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </>) : (<>
                            <ColorRing
                                visible={true}
                                height="100"
                                className="mt-5"
                                width="100"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#fffff', '#fffff', '#fffff', '#fffff', '#fffff']}
                            />
                        </>)
                    }

                </div>
            </div>
        </div>
    )
}
export default Projects;