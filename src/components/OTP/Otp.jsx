import React from 'react'

const Otp = () => {
    return (
        <>
            <div className='row mx-0 h-screen justify-content-center align-items-center'>
                <div className="col-lg-4 col-10">
                    <div className="mt-3 text-start">
                        <h3 className='py-3'>Verify Your Email</h3>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control px-4 py-2 rounded-5 bg-light" placeholder='Email' />
                    </div>
                    <div className="mt-3">
                        <button className="form-control px-4 py-2 rounded-5 btn btn-primary fs-6">Request OTP </button>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control px-4 py-2 rounded-5 bg-light" placeholder='Enter OTP' />
                    </div>
                    <div className="mt-3">
                        <button className="form-control px-4 py-2 rounded-5 btn btn-primary fs-6">Verify OTP </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Otp