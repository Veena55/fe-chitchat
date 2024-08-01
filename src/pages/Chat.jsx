import React, { useEffect, useState } from 'react';
import RecieveMsg from '../components/ChatSection/ChatRoom/RecieveMsg';
import SentMsg from '../components/ChatSection/ChatRoom/SentMsg';
import MessageBox from '../components/ChatSection/ChatRoom/MessageBox';
import { useSocket } from '../Socket';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sentMessage } from '../redux/actions';


const Chat = ({ profile }) => {
    const currentUser = useSelector(state => state.user.profile);
    const [message, setMessage] = useState('');
    const socket = useSocket();
    const messages = useSelector(state => state.messages.list[profile.user._id] || []);
    const dispatch = useDispatch();


    const sendMessage = () => {
        dispatch(sentMessage({ sender: currentUser._id, receiver: profile.user._id, message }));
        socket.emit('sendMessage', { to: profile.user._id, message });
        setMessage('');
    };

    return (
        <div className="d-flex flex-column justify-content-between" >
            <div style={{ height: "80vh", overflow: "overlay" }}>
                {messages.map((msg, index) => {
                    return (msg.sender === currentUser._id ? <SentMsg key={index} sendMsg={msg.message} /> : <RecieveMsg key={index} recieveMsg={msg.message} />)

                })}
            </div>
            <div className='pb-2 position-fixed bottom-0 col-9' style={{ width: "" }}>
                <MessageBox
                    type="text"
                    value={message}
                    onChangeHandler={(e) => setMessage(e.target.value)} onClick={sendMessage} />
            </div>
        </div>
    );
};

export default Chat;
