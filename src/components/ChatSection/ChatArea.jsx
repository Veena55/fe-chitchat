import React from 'react'
import { BiChat } from 'react-icons/bi'

const ChatArea = () => {
    return (
        <div className='row mx-0 chat-area'>
            <div className="col-12 d-flex justify-content-center align-items-center">
                <BiChat className='text-primary' size={50} />
            </div>
        </div>
    )
}

export default ChatArea