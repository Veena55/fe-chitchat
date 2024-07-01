import React from 'react'
import assets from '../../assets/assets';

const ChatCard = () => {
    return (
        <>
            <div className="chat-card row mx-0">
                <div className="col-12 mx-auto py-2">
                    <div className="chat-card__header d-flex justify-content-between align-items-start">
                        <div className='d-flex gap-4 align-items-center'>
                            <div className="chat-card__header__img">
                                <img src={assets.girl} alt="user" className="img-fluid rounded-circle p-2 border border-primary font-bold" width={60} />
                            </div>
                            <div>
                                <div className="chat-card__header__name fw-semibold text-capitalize">name</div>
                                <div className="chat-card__header__bio text-primary fst-italic">Bio</div>
                            </div>
                        </div>
                        <div className="chart-card_header_time">
                            <div className="chart-card_header_time__text"><small className='text-primary'>2:00 PM</small></div>
                        </div>
                    </div>
                    <hr className='border-primary mt-2' />
                </div>
            </div>
        </>
    )
}

export default ChatCard