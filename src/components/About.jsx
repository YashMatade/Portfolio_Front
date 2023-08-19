import React from 'react'

const About = () => {
    return (

        <div style={{ background: "radial-gradient(var(--faintblue), var(--faintgreen))" }} className="vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">

                    </div>
                    <div className="col-lg-8">
                        <h2 className='text-center mt-2 '>
                            <div
                                className={`badge bg-dark rounded rounded-pill pt-3 pb-3 ps-5 pe-5 fh-300 text-white shadow moveable`}
                            >
                                About
                            </div>
                        </h2>
                        <b className='justify-content-end text-align-center'> &nbsp;&nbsp;&nbsp;I'm a MERN full stack developer specializing mostly in React js & Node
                            Js. During my job experience, I had practical skills with interesting
                            technologies, tasks and people. I like to solve or build solutions for
                            every problem statement by using my skills what challenges me.</b>
                        <br /><br />
                        <h3>Worked On Various Projects</h3>
                        <ol>
                            <li>
                                <b>E-COMMERCE</b>
                            </li>
                            <ul>
                                <li>This project allows you to buy single product at a time.
                                </li>
                                <li>The functionality implemented mainly online Payment Gateway (Razor pay integration).
                                </li>
                                <li>This website also provides additional facilities like email sending to the buyer as well as to admin.
                                </li>
                                <li>Also has a dashboard where the admin can make changes to website products.
                                </li>
                            </ul>
                            <br /><br />
                            <li>
                                <b>LMS - (LEARNING MANAGEMENT SYSTEM)</b> <br />
                                The project Learning Management System includes three frontend platform connected to common database. It
                                includes overall report and annual income of every trainer to the admin in the graphical representation and overall
                                summary of every user.
                            </li>
                            <li>
                                <b>LMS - (LEARNING MANAGEMENT SYSTEM)</b> <br />
                                The project Learning Management System includes three frontend platform connected to common database. It
                                includes overall report and annual income of every trainer to the admin in the graphical representation and overall
                                summary of every user.
                            </li>

                        </ol>

                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;