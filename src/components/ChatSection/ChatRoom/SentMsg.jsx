import React from 'react'
import '../../ChatSection/chat.css';

const SentMsg = ({ sendMsg }) => {
    return (
        <div className='row mx-0 w-100 px-2'>
            <div className="my-2 d-flex justify-content-start">
                <p className='mb-0 py-1 px-3 width-content bg-white text-primary rounded-pill shadow-sm'>{sendMsg}</p>
            </div>
        </div>
    )
}

export default SentMsg