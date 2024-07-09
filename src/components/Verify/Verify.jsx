import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GetPath } from '../../routes/Path';

const Verify = () => {
    const [flag, setFlag] = useState(true);
    const email = useRef(null);
    const otp = useRef(null);
    const navigate = useNavigate();
    const sendMail = async () => {
        console.log("Clicked!!", email.current.value);
        const response = await axios.post(`http://localhost:7000/auth/send-mail`, {
            email: email.current.value
        }, { withCredentials: true });

        if (response.status == 200) {
            email.current.value = null;
            setFlag(false);
        }
    }
    const verifyOTP = async () => {
        console.log("Clicked2!!", otp.current.value);
        const response = await axios.post(`http://localhost:7000/auth/verify-otp`, {
            otp: otp.current.value
        }, { withCredentials: true });
        if (response.status == 200) {
            navigate(GetPath('login'));
        }
    }
    return (
        <>
            <div className='row mx-0 h-screen justify-content-center align-items-center'>
                <div className="col-lg-4 col-10">

                    {flag ?
                        <>
                            <div className="mt-3 text-start">
                                <h3 className='py-3'>Verify Your Email</h3>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control px-4 py-2 rounded-5 bg-light" placeholder='Email' ref={email} />
                            </div>
                            <div className="mt-3">
                                <button className="form-control px-4 py-2 rounded-5 btn btn-primary fs-6" onClick={sendMail}>Request OTP </button>
                            </div>
                        </>
                        :
                        <>
                            <div className="mt-3 text-start">
                                <h3 className='py-3'>Verify With OTP</h3>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control px-4 py-2 rounded-5 bg-light" ref={otp} placeholder='Enter OTP' />
                            </div>
                            <div className="mt-3">
                                <button className="form-control px-4 py-2 rounded-5 btn btn-primary fs-6" onClick={verifyOTP}>Verify OTP </button>
                            </div>
                        </>}

                </div>
            </div >
        </>
    )
}

export default Verify