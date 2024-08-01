import socketIOClient from 'socket.io-client';
import { token } from './utils/token';
import { createContext, useContext, useEffect, useState } from 'react';
import { receiveMessage } from './redux/actions';
import { useDispatch } from 'react-redux';


const ENDPOINT = 'http://localhost:7000';

const SocketContext = createContext();

export const useSocket = () => {
    return useContext(SocketContext);
}

export const Socket = ({ children }) => {
    const [socket, setSocket] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        const newSocket = socketIOClient(ENDPOINT, {
            auth: { token }
        });

        newSocket.on('receiveMessage', ({ sender, message }) => {
            dispatch(receiveMessage({ sender, message }));
        });

        setSocket(newSocket);

        return () => newSocket.close();

        // socket.on('receiveMessage', ({ sender, receiver, message }) => {
        //     setMessages(prevMessages => [...prevMessages, { sender, receiver, message }]);
        // })
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default Socket