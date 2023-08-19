import React, { useEffect, useState } from 'react'
import frontend from '../assets/frontend.svg';
import backend from '../assets/backend.svg';
import others from '../assets/othera.svg';
import { getSkills } from '../Networks/api';
import { ColorRing } from 'react-loader-spinner'
const Skills = () => {
    const [data, setData] = useState();
    useEffect(() => {
        getSkills().then((res) => {
            if (res.err === 200) {
                setData(res.data)
                console.log(res.data);
            }
        })
    }, []);
    return (
        <div className='vh-100' style={{ background: "radial-gradient(var(--faintblue), var(--faintgreen))", }}>
            <div className="container" >
                <div className="row">
                    <h2 className='text-center mt-2 '>
                        <div
                            className={`badge bg-dark rounded rounded-pill pt-3 pb-3 ps-5 pe-5 fh-300 text-white shadow moveable`}
                        >
                            Skills
                        </div>
                    </h2>
                    {
                        data ? (<>
                            {
                                data?.map((skill, index) => {
                                    return (
                                        <div className="col-lg-4 mb-3 mt-5 animate__animated animate__backInDown" key={index}>
                                            <div className='card' style={{ borderRadius: "20px", backgroundColor: 'yellow' }}>
                                                <div className="card-body border border-dark cursor-pointer shadow" style={{ height: "150px", borderRadius: "20px" }}>
                                                    <div className='d-flex flex-column align-items-center justify-content-center'>

                                                        <h4 className="card-title">{skill.heading}</h4>
                                                    </div>
                                                    <div className="text-center" >
                                                        {
                                                            skill.skills.map((p, key) => {
                                                                return <span style={{ fontSize: "15px" }} className="badge badge-lg bg-dark text-white me-1 mb-1" key={key}>{p}</span>

                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
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

export default Skills;
