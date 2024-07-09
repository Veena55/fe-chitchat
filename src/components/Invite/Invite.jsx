
export const fetchUserId = async () => {
    const { data } = await axios.get('/invite/user');
    return data;
}

import React, { useRef } from 'react'
import './Invite.css'
import { useQuery } from '@tanstack/react-query';
import { BsShareFill } from 'react-icons/bs';
import axios from 'axios';

const Invite = () => {
    const inviteLink = useRef(null);
    const copyText = useRef(null);
    const { data: user, isLoading, error } = useQuery({
        queryKey: ['getUserId'],
        queryFn: fetchUserId
    });
    console.log(user);
    if (error) {
        return <p>No User Login</p>
    }

    const copyToClipBoard = () => {
        if (inviteLink.current) {
            inviteLink.current.select();
            document.execCommand('copy');
            copyText.current.innerText = 'Copied!';
        }
    }

    const sendWhatsAppMessage = () => {
        console.log("hi");
        try {
            const message = encodeURIComponent(`Hello! Join me on Chit-Chat at http://localhost:5173/signup?ref=${user}`);
            const whatsappUrl = `https://wa.me/?text=${message}`;
            window.open(whatsappUrl, "_blank");
        } catch (error) {
            console.error("Error opening WhatsApp:", error);
        }
    }

    return (
        <div className='row mx-0 bg-light-blue align-items-center' style={{ height: "100vh" }}>
            <div className="col-6 mx-auto">
                <h5 className='text-primary'>Send Invite link to your friend</h5>
                <div className="form-group bg-white d-flex align-items-center p-2 border rounded-5" onClick={copyToClipBoard}>
                    <input type="email" className="form-control border-0 invite_link" ref={inviteLink} value={`http://localhost:5173/signup?ref=${user}`} readOnly />
                    <p className='mb-0 text-primary fw-semibold' ref={copyText} style={{ cursor: 'pointer' }}>copy</p>
                </div >
                <div className='mt-2 text-end'>
                    <a href='#' className="btn btn-primary" onClick={sendWhatsAppMessage}><BsShareFill className='me-2' /> Send Invite</a>
                </div>
            </div >
        </div >
    )
}

export default Invite