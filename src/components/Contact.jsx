import React from 'react'
import contact from '../assets/contact.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className='text-center mt-2'>
                        <div
                            className={`badge bg-dark rounded rounded-pill pt-3 pb-3 ps-5 pe-5 fh-300 text-white shadow moveable`}
                        >
                            Contact
                        </div>
                    </h2>
                    <div className="col-lg-4 mt-5">
                        <img src={contact} style={{ width: "400px" }} className='im-fluid animate__animated animate__backInLeft' alt="" />
                    </div>
                    <div className="col-lg-4 mt-3 shadow " style={{ background: "radial-gradient(var(--faintblue), var(--faintgreen))" }}>
                        <div className='p-3 mt-3 '>
                            <form action="">
                                <span>Name</span>
                                <input type="text" className='form-control mb-3' name="" id="" placeholder='Enter your Name' />
                                <span>Email</span>
                                <input type="text" className='form-control mb-3' name="" id="" placeholder='Enter your Email' />
                                <span>Message</span>
                                <textarea type="text" className='form-control mb-3' name="" id="" placeholder='Enter your Message' />
                                <button className='w-100 btn btn-dark text-white mb-3' onClick={(e) => { e.preventDefault(); toast.success() }}>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
