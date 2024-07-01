import React, { useState } from 'react'
import { BsBellFill, BsChatDots } from 'react-icons/bs'
import { LuContact } from 'react-icons/lu'
import './chat.css';

const ChatNav = () => {
    const [activeElement, setActiveElement] = useState(['chats']);
    const setActiveClass = (title) => {
        setActiveElement(title);
    }
    return (
        <div className='row mx-0'>
            <div className="col-12 py-2 d-flex justify-content-between">
                <div>
                    <h4 className='text-primary fs-bold text-capitalize'>{activeElement}</h4>
                </div>
                <div className='d-flex align-items-center'>
                    <BsChatDots className={`text-secondary mx-1 ${activeElement == 'chats' && 'active'}`} onClick={() => setActiveClass('chats')} size={20} />
                    <LuContact className={`text-secondary mx-1 ${activeElement == 'contacts' && 'active'}`} onClick={() => setActiveClass('contacts')} size={20} />
                    <div className='position-relative'>
                        <BsBellFill className={`text-secondary mx-1 ${activeElement == 'notifications' && 'active'}`} onClick={() => setActiveClass('notifications')} size={20} />
                        <div className='position-absolute notification_count translate-middle badge rounded-circle bg bg-danger'><small>12</small></div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ChatNav