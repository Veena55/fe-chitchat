import React from 'react'
import { BiChat } from 'react-icons/bi'
import ChatRoom from './ChatRoom/ChatRoom'

const ChatArea = ({ profile }) => {
    console.log(profile);
    return (
        <>
            <div className="position-relative chat-area">
                <div className='position-absolute start-0 end-0'>
                    <ChatRoom profile={profile} />
                </div>
            </div>
        </>
    )
}

export default ChatArea