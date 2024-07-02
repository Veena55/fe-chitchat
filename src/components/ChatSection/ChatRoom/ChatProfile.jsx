import React from 'react'
import { BiDotsVertical } from 'react-icons/bi'
import '../chat.css';

const ChatProfile = ({ profile }) => {
    return (
        <div className='row mx-0'>
            <div className="col-12 p-0">
                <div className="chat-profile-card d-flex justify-content-between align-items-center shadow-sm px-3 bg-light">
                    <div className='d-flex align-items-center gap-3'>
                        <img src={profile.img} alt="" width={40} />
                        <p className='mb-0 text-primary fw-semibold'>{profile.name}</p>
                    </div>
                    <div>
                        <BiDotsVertical className='text-primary fs-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatProfile