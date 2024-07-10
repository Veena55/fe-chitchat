import React from 'react'
import '../chat.css';
import { BsSend } from 'react-icons/bs';

const MessageBox = ({ onClick, type, value, onChangeHandler }) => {
    return (
        <div className='row mx-0'>
            <div className='col-11 mx-auto bg-white shadow-sm my-1 pe-0 rounded-pill d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <button className='btn p-0 m-0 fs-3 shadow-0'>😀</button>
                    <input type={type} className='border-0 text-primary ps-3' placeholder='Send Message' value={value} onChange={onChangeHandler} autoFocus />
                </div>
                <button className='btn btn-primary rounded-pill' onClick={onClick}><BsSend className='fs-bold fs-5' /></button>
            </div>
        </div>
    )
}

export default MessageBox