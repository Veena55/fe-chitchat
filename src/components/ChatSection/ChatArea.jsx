import React from 'react'
import { BiChat } from 'react-icons/bi'
import ChatRoom from './ChatRoom/ChatRoom'

const ChatArea = ({ profile }) => {
    return (
        <>
            <div className="position-relative chat-area">
                <div className='position-absolute start-0 end-0'>
                    <ChatRoom profile={profile} />
                    {/* <div className="col-12 d-flex justify-content-center align-items-center">
                    <BiChat className='text-primary' size={50} />
                </div> */}
                </div>
            </div>
        </>
    )
}

export default ChatArea