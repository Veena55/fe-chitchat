import React from 'react'
import './Invite.css'

const Invite = () => {
    return (
        <div className='row mx-0 bg-light-blue align-items-center' style={{ height: "100vh" }}>
            <div className="col-6 mx-auto">
                <h5 className='text-primary'>Send Invite link to your friend</h5>
                <div className="form-group">
                    <input type="email" className="form-control bg-white rounded-5" readOnly />
                </div>
                <div className='mt-2 text-end'>
                    <button className="btn btn-primary">Send Invite</button>
                </div>
            </div>
        </div>
    )
}

export default Invite