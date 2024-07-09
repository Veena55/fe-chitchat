//Fetch API
export const fetchFriendList = async () => {
    const { data } = await axios.get("/friend/all");
    return data;
}

import React, { useEffect, useState } from 'react'
//Fetch API
export const fetchFriendList = async () => {
    const { data } = await axios.get("/friend/all");
    return data;
}

import React, { useState } from 'react'
import ChatCard from '../../components/ChatSection/ChatCard'
import ChatNav from '../../components/ChatSection/ChatNav'
import Search from '../../components/ChatSection/Search'
import ChatArea from '../../components/ChatSection/ChatArea'
import axios from '../../utils/axiosConfig'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { BiChat } from 'react-icons/bi';

const Home = () => {
    const [userProfile, setUserProfile] = useState({});
    const { data: friendList = [], isLoading, error } = useQuery({
        queryKey: ['friendList'],
        queryFn: fetchFriendList
    });

    if (error) {
        return toast.error("Error loading friend list");
    }

    return (
        <div className='row mx-0' style={{ height: "100vh", overflow: "hidden" }}>
            <div className="col-3 p-0">
                <div className='position-sticky bg-white'>
                    <ChatNav />
                    <Search />
                </div>
                <div className='chit-chat_list'>
                    {isLoading && <p className='text-center text-primary'>Loading....</p>}
                    {friendList.length > 0 ? friendList.map((friend, index) => {
                        return <ChatCard
                            key={index}
                            name={friend.friend.name}
                            bio={!friend.user.bio ? 'No Bio' : friend.user.bio}
                            date=''
                            onClick={() => { setUserProfile({ name: friend.friend.name }) }}
                        />
                    }
                    ) : <p>No Friends</p>}

                </div>
            </div>
            <div className="col-9 p-0">
                {Object.keys(userProfile).length > 0 ? <ChatArea profile={userProfile} /> :
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                        <BiChat className='text-primary' size={50} />
                    </div>
                }

            </div>
        </div>
    )
}

export default Home