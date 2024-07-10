import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import RecieveMsg from '../components/ChatSection/ChatRoom/RecieveMsg';
import SentMsg from '../components/ChatSection/ChatRoom/SentMsg';
import MessageBox from '../components/ChatSection/ChatRoom/MessageBox';

const ENDPOINT = 'http://localhost:7000';

const Chat = ({ profile }) => {
    console.log(profile);
    const [currentUser, setCurrentUser] = useState(profile.currentUser); // Set the current user
    const [targetedUser, setTargedtUser] = useState(profile.targetedUser); // Set the current user
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const socket = socketIOClient(ENDPOINT);

    useEffect(() => {
        socket.on('receiveMessage', ({ sender, receiver, message }) => {
            setMessages((prevMessages) => [...prevMessages, { sender, receiver, message }]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    console.log(messages);

    const sendMessage = () => {
        socket.emit('sendMessage', { sender: currentUser, receiver: targetedUser, message });
        setMessage('');
    };

    return (
        <div className="d-flex flex-column justify-content-between" >
            <div style={{ height: "80vh", overflow: "overlay" }}>
                {messages.map((msg, index) => (
                    (msg.sender === currentUser ? <SentMsg sendMsg={msg.message} /> : <RecieveMsg recieveMsg={msg.message} />)
                ))}
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
