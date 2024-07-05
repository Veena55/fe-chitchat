import React, { useState } from 'react'
import { BsChatDots } from 'react-icons/bs'
import { LuContact } from 'react-icons/lu'
import './chat.css';
import { FaUserFriends, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChatNav = () => {
    const [activeElement, setActiveElement] = useState(['contacts']);
    const setActiveClass = (title) => {
        setActiveElement(title);
    }
    return (
        <div className='row mx-0'>
            <div className="col-12 py-2 d-flex justify-content-between align-items-center chat-nav">
                <div>
                    <h5 className='text-primary fs-bold text-capitalize'>{activeElement}</h5>
                </div>
                <div className='d-flex align-items-center'>
                    <BsChatDots className={`text-secondary mx-1 ${activeElement == 'chats' && 'active'}`} onClick={() => setActiveClass('chats')} size={20} />
                    <LuContact className={`text-secondary mx-1 ${activeElement == 'contacts' && 'active'}`} onClick={() => setActiveClass('contacts')} size={20} />
                    <FaUserFriends className={`text-secondary mx-1 ${activeElement == 'groups' && 'active'}`} onClick={() => setActiveClass('groups')} size={20} />

                </div>
            </div>
        </div>
    )
}
export default ChatNav