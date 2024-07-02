import React from 'react'
import ChatCard from '../../components/ChatSection/ChatCard'
import ChatNav from '../../components/ChatSection/ChatNav'
import Search from '../../components/ChatSection/Search'
import ChatArea from '../../components/ChatSection/ChatArea'

const Home = () => {
    return (
        <div className='row mx-0' style={{ height: "100vh", overflow: "hidden" }}>
            <div className="col-lg-3 p-0">
                <div className='position-sticky bg-white'>
                    <ChatNav />
                    <Search />
                </div>
                <div className='chit-chat_list'>
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                </div>
            </div>
            <div className="col-lg-9 p-0">
                <ChatArea />
            </div>
        </div>
    )
}

export default Home