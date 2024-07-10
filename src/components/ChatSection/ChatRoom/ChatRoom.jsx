import React from 'react'
import ChatProfile from './ChatProfile'
import assets from '../../../assets/assets';
import Chat from '../../../pages/Chat';

const ChatRoom = ({ profile }) => {
    return (
        <div className='mx-0 w-100'>
            <ChatProfile profile={{ img: assets.girl, name: profile.name }} />
            <Chat profile={{ targetedUser: profile.targetedUser, currentUser: profile.currentUser, targetrUserName: profile.name }} />
        </div>
    )
}

export default ChatRoom