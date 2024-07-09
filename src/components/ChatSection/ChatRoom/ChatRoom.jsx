import React from 'react'
import ChatProfile from './ChatProfile'
import assets from '../../../assets/assets';
import SentMsg from './SentMsg';
import RecieveMsg from './RecieveMsg';
import MessageBox from './MessageBox';

const ChatRoom = () => {
    return (
        <div className='mx-0 w-100'>
            <ChatProfile profile={{ img: assets.girl, name: "Veena Rao" }} />
            <div className="d-flex flex-column justify-content-between" >
                <div style={{ height: "80vh", overflow: "overlay" }}>
                    <SentMsg sendMsg={"Hello!!"} />
                    <RecieveMsg recieveMsg={"Hello!!"} />
                </div>
                <div className='pb-2'>
                    <MessageBox />
                </div>
            </div>
        </div>
    )
}

export default ChatRoom