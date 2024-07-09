export const fetchFreinds = async (searchText) => {
    const { data } = await axios.post(`/search/friends`, { searchText });
    console.log(data);
    return data;
}

import React, { useState } from 'react'
import './chat.css';
import SearchBox from './SearchBox';
import { useQuery } from '@tanstack/react-query';
import axios from '../../utils/axiosConfig';

const Search = () => {
    // const friendList = [{ name: "Veena", img: "" }, { name: "Vidya", img: "" }, { name: "Vidya", img: "" }];
    const [searchText, setSearchText] = useState('');
    const { data: friendList = [], isLoading, error } = useQuery({
        queryKey: ['friends', searchText],
        queryFn: () => fetchFreinds(searchText),
        enabled: searchText.length > 3,
    });

    const handleSearch = async (e) => {
        if (e.target.value.length > 3) {
            const search = e.target.value;
            setSearchText(search);
        } else {
            console.log(e.target.value);
        }
    }
    console.log(friendList);

    return (
        <div className='row mx-0'>
            <div className="col-12">
                <div className="input-group search-bar mb-2 rounded-5">
                    <input type="text" className='search-bar_input border-0 w-100 px-3 py-2 text-primary' placeholder='Search here...' onChange={handleSearch} />
                </div>
            </div>

            {isLoading ? "Loading" : friendList.length > 0 && <SearchBox friends={friendList} />}
        </div>
    )
}
export default Search